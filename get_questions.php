<?php
// creates valid json file of all response from CMS
// structure:
/*[
	{
		"title": "Sint Corneliuskerk",
		"body": "In Welberg staat de Sint Corneliuskerk. Deze is sinds november 2014 niet meer in gebruik als kerk. Hoe heet de straat waar het kerkgebouw staat?",
		"points": 100,
		"bricks": 20,
		"media": "1uEpyM31X0",
		"A": "Kapelaan Kockstraat.",
		"B": "Corneliusstraat.",
		"C": "Pastoor Kerckerstraat.",
		"D": "Kerkstraat.",
		"hint": "De straat is vernoemd naar een welbergenaar die in de tweede wereldoorlog door de duitsers werd vermoord.",
		"right": "De straat is genoemd naar de Welbergse Kapelaan Kock die tijdens de Tweede Wereldoorlog dood ging. De kapelaan (een soort hulppastoor) werd op 1 november 1944 vermoord door de Duitsers. Van 29 oktober tot en met 4 november 1944 vond er rond Welberg en Steenbergen een keiharde strijd plaats tussen de bezetters en de bevrijders. Veel mensen vluchtten of doken onder. Kapelaan Kock dook samen met nog 20 andere mensen onder in de kelder van het hoofd van de school van Welberg. Op 1 november verschenen er ineens een paar Canadezen op het dorp. De mensen dachten dat zij bevrijd waren. Maar de Canadezen waren alleen maar op verkenning en gingen weer weg. Later die dag kwamen de Duitsers terug. Zij dachten dat de kapelaan informatie aan de Canadezen had gegeven. Zij takelden de kapelaan zo erg toe dat hij niet meer overeind kon komen. Uiteindelijk is hij aan de kant van de weg aan zijn verwondingen gestorven.",
		"wrong": "",
		"answer": "A"
	}	
]*/



// to get the list, we must travel into the dir data/response
$path_to_root=$_SERVER['DOCUMENT_ROOT'];
$path_to_cms_data=$path_to_root."/mgcms/data";
$path_to_data="data/"; // here you will find games, data etc..

$dir_content=array();


$response=array();
$response['succes']=1; // this will contain 0 or 1

	$response['succes']=0;
	$response['error']="WARNING get_questions deprecated, use login.php instead not found";
	$response['errorcode']=-144;
	
echo(json_encode($response));
exit(0);

// get the directory and save all entries in an array!
$dir=$path_to_cms_data.'/questions';
if ($handle = opendir($dir)) 
{
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != "..") 
		{
			array_push ($dir_content ,$entry );
        }
    }
    closedir($handle);
}else
{
	$response['succes']=0;
	$response['error']="data not found";
	$response['errorcode']=1;
}
//echo("found ".count($dir_content));

$nr_of_response=count($dir_content);
$lb="\n";
$out_str="[".$lb;
$locked=false;

$response["questions"]=array(); // this will contain all questions
$question_counter=0;

for($i=0;$i<$nr_of_response;$i++)
{
	// try and open the file and read the contents..
	$temp = explode( '.', $dir_content[$i] );
	$ext = array_pop( $temp );
	$id = implode( '.', $temp );
	$out_str.='{"id":"'.$id.'",'.$lb;// also put in the timestamp!
	
	
	$content=file($dir."/".$dir_content[$i], FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	$response["questions"][$question_counter]=array();
	$response["questions"][$question_counter]["id"]=$id;
	for($line=0;$line<count($content);$line++)
	{
		$label=explode(":",$content[$line]);
		switch($label[0])
		{
			case "media":
				// might be a full url in here!
				//so http:// we might need to add any other content back!
				$label[1]=substr($content[$line],strlen($label[0])+1);// no length, is to end of string!
				$response["questions"][$question_counter][$label[0]]=str_replace('"',"'",trim($label[1]));
				$out_str.='"'.$label[0].'"'.":\"".str_replace('"',"'",trim($label[1]))."\",".$lb;
			break;
			case "title":
			case "hint":
			case "right":
			case "wrong": 
			case "answer":
			case "published":
			case "city":
			case "cat":
			case "A":
			case "B":
			case "C":
			case "D":
			case "body":
				$text=trim($label[1]);
				
				// smart quotes!
				$text = str_replace(
					 array("\xe2\x80\x98", "\xe2\x80\x99", "\xe2\x80\x9c", "\xe2\x80\x9d", "\xe2\x80\x93", "\xe2\x80\x94", "\xe2\x80\xa6"),
					 array("'", "'", '"', '"', '-', '--', '...'),
					 $text);
					// Next, replace their Windows-1252 equivalents.
					 $text = str_replace(
					 array(chr(145), chr(146), chr(147), chr(148), chr(150), chr(151), chr(133)),
					 array("'", "'", '"', '"', '-', '--', '...'),
					 $text);
				
				$text=str_replace("\"", "'", $text); // because we serve it as JSON, a double quote could cause a lot of havok!
				$text=str_replace("\\", "", $text); // because we serve it as JSON, a backslash could cause a lot of havok!
		
				$response["questions"][$question_counter][$label[0]]=$text;
				$out_str.=$label[0].":\"".$text."\",".$lb; // here we hard convert double quotes to single quotes!
			break;
		}
	}
	$question_counter++;
}
// this concludes getting the questions!

// get user info as well!
if(isset($clean['naam']))
{
	$filename="data/games/".$clean['naam'].".txt";
	if(file_exists($filename))
	{
		// we have a file, read it..
		$jsonString = file_get_contents($filename);
		$data = json_decode($jsonString,true); // converts it to an array!
		// check if the wachtwoord matches
		if( isset($clean['wachtwoord']) )
		{
			if($data['wachtwoord']==crypt($clean['wachtwoord']."mysalt","zoutjesvancalve"))
			{
				unset($data['naam']);
				unset($data['wachtwoord']);
				unset($data['school']);
				unset($data['groep']);
//				unset($data['plaats']);
				$response['user']=$data;
				$response['succes']=1;
			}else
			{
				$response['succes']=0;
				$response['error']="Naam en wachtwoord incorrect!";
				$response['errorcode']=17;

			}
		}else
		{
			$response['succes']=0;
			$response['error']="Naam en wachtwoord incorrect!";
			$response['errorcode']=17;
		}
	}else
	{
		$response['succes']=0;
		$response['error']="Naam bestaat niet!";
		$response['errorcode']=13;
	}
}else
{
	$response['succes']=0;
	$response['errorcode']=14;
	$response['error']="Geen naam gegeven";
}



echo(json_encode($response));
?>
