<?php
// gets all data for first time in reset situation, including user progress and questions
$path_to_root=$_SERVER['DOCUMENT_ROOT'];
$path_to_cms_data=$path_to_root."/mgcms/data";
$path_to_data="data/"; // here you will find games, data etc..

$dir_content=array();
			
$response=array();
$response['succes']=1; // this will contain 0 or 1

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
$response['succes']=0;
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
				$response["questions"][$question_counter][$label[0]]=str_replace('"',"'",trim($label[1]));
			break;
		}
	}
	$question_counter++;
}
// this concludes getting the questions!
// we now also have unpublished questions!

// now get the user data!
$path_to_root=$_SERVER['DOCUMENT_ROOT'];
$path_to_data="data/";

$log_filename=$path_to_data."logs";// create that dir!
if(!is_dir($log_filename))
{
	mkdir($log_filename);
}

$clean=array();
foreach ($_GET as $key => $value) 
{
	$key=preg_replace('/\s+/', '', $key); // only alphanumeric
	$value=preg_replace('/\s+/', '', strip_tags($value)); // only alphanumeric and NO additional HTML!
	$clean[$key]=strip_tags(strtolower($value)); // this makes it safe to lowercase all usernames and wws in new_game.php!
}

// make it a little easier to login
// we found the following: 
// Erik-jan&nbsp;.txt
// Erik-jan.txt
// erik-jan.txt
// Erik-jan1.txt
if(isset($clean['naam']))
{
	$clean['naam']=strtolower($clean['naam']); // lowercase names!!!!
	$clean['naam']=html_entity_decode($clean['naam']); // if there was a thing like &nbsp; in there it's turned into ' '
	$clean['naam']=preg_replace('/\s+/', '', $clean['naam']); // only alphanumeric, so any compound html chars are gone now.
}
if(isset($clean['wachtwoord']))
{
	$clean['wachtwoord']=strtolower($clean['wachtwoord']); // lowercase names!!!!
	$clean['wachtwoord']=html_entity_decode($clean['wachtwoord']); // if there was a thing like &nbsp; in there it's turned into ' '
	$clean['wachtwoord']=preg_replace('/\s+/', '', $clean['wachtwoord']); // only alphanumeric, so any compound html chars are gone now.
}

if(isset($clean['naam']))
{
	$filename=$path_to_data."games/".$clean['naam'].".txt";
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
				unset($data['wachtwoord']);
				$response['user']=$data;
				$response['succes']=1;
			}else
			{
				unset($response['questions']);
				$response['succes']=0;
				$response['error']="Naam en wachtwoord incorrect!";
				$response['errorcode']=17;
				// log this to be able to debug stuff you know is correct!
				$log_filename=$path_to_data."logs/".gmdate('Y-m-d', time()).".txt";
				$log_data=$_SERVER['REMOTE_ADDR']." name: '".$clean['naam']."' ww:'".$clean['wachtwoord']."' not same as crypted\n";
				file_put_contents ($log_filename , $log_data ,FILE_APPEND );

			}
		}else
		{
			$response['succes']=0;
			unset($response['questions']);
			$response['error']="Naam en wachtwoord incorrect!";
			$response['errorcode']=17;
			// log this to be able to debug stuff you know is correct!
			$log_filename=$path_to_data."logs/".gmdate('Y-m-d', time()).".txt";
			$log_data=$_SERVER['REMOTE_ADDR']." name: '".$clean['naam']."' ww:'".$clean['wachtwoord']."' no ww\n";
			file_put_contents ($log_filename , $log_data ,FILE_APPEND );
		}
	}else
	{
		$response['succes']=0;
		unset($response['questions']);
		$response['error']="Naam bestaat niet!";
		$response['errorcode']=13;
		$log_filename=$path_to_data."logs/".gmdate('Y-m-d', time()).".txt";
		$log_data=$_SERVER['REMOTE_ADDR']." name: '".$clean['naam']."' ww:'".$clean['wachtwoord']."' name doesn't exist\n";
		file_put_contents ($log_filename , $log_data ,FILE_APPEND );
	}
}else
{
	$response['succes']=0;
	unset($response['questions']);
	$response['errorcode']=14;
	$response['error']="Geen naam gegeven";
	$log_filename=$path_to_data."logs/".gmdate('Y-m-d', time()).".txt";
	$log_data=$_SERVER['REMOTE_ADDR']." name: '".$clean['naam']."' ww:'".$clean['wachtwoord']."' no name\n";
	file_put_contents ($log_filename , $log_data ,FILE_APPEND );
}

echo json_encode($response);
?>