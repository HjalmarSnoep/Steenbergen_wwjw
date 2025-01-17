<?php
// creates new user/game file..

$path_to_root=$_SERVER['DOCUMENT_ROOT'];
$path_to_data="data/";
$path_to_cms_data=$path_to_root."/mgcms/data";

$clean=array();
foreach ($_GET as $key => $value) 
{
	$key=preg_replace('/\s+/', '', $key); // only alphanumeric
	$value=preg_replace('/\s+/', '', strip_tags($value)); // only alphanumeric and NO additional HTML!
	$clean[$key]=strip_tags($value);
}
$response=array();
$response['succes']=0;

// get the number of questions
$dir=$path_to_cms_data.'/questions';
$nr_of_questions=0;
if ($handle = opendir($dir)) 
{
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != "..") 
		{
			$nr_of_questions++;
        }
    }
    closedir($handle);
}

if(isset($clean['naam']))
{
	$filename=$path_to_data."games/".$clean['naam'].".txt";
	if(!file_exists($filename))
	{
		if( isset($clean['wachtwoord']) &&
    		isset($clean['school']) && 
			isset($clean['groep']) && 
			isset($clean['plaats'])
		   )
		{		
			// creeer een nieuwe user file!
			$game=array();
			$game['naam']=$clean['naam'];
			$game['wachtwoord']=crypt($clean['wachtwoord']."mysalt","zoutjesvancalve");
			$game['school']=$clean['school'];
			$game['groep']=$clean['groep'];
			$game['plaats']=$clean['plaats'];
			$game['progress']=0;
			
			$order=array();
			for($i=0;$i<$nr_of_questions;$i++) $order[$i]=$i;
			shuffle($order);
			$game['question_order']=$order;
			$game['punten']=0;
			$game['stenen']=0;
			$game['gekochtehuizen']=array();
			$game['hints']=array(); // keep track of if you have seen the hints!!
			for($i=0;$i<$nr_of_questions;$i++)
			{
				array_push($game['hints'],0);
			}
			$fp = fopen($filename, 'w');
				fwrite($fp, json_encode($game));
			fclose($fp);
			$response['succes']=1;	
			$response['user']=$game; // give all important things to user right now..

			
			
// now also add all the questions same as in login

// gets all data for first time in reset situation, including user progress and questions
$path_to_root=$_SERVER['DOCUMENT_ROOT'];
$path_to_cms_data=$path_to_root."/mgcms/data";
$path_to_data="data/"; // here you will find games, data etc..

$dir_content=array();


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


			
			
			
			
		}else
		{
			if(!isset($clean['plaats']))
			{
				$response['error']="Geen plaats opgegeven";
				$response['errorcode']=5;
			}
			if(!isset($clean['groep']))
			{
				$response['error']="Geen groep opgegeven";
				$response['errorcode']=4;
			}
			if(!isset($clean['school']))
			{
				$response['error']="Geen school opgegeven";
				$response['errorcode']=3;
			}
			if(!isset($clean['wachtwoord']))
			{
				$response['error']="Geen wachtwoord gegeven";
				$response['errorcode']=2;
			}
		}
	}else
	{
		$response['error']="Naam bestaat al!";
		$response['errorcode']=13;
	}
}else
{
	$response['errorcode']=14;
	$response['error']="Geen naam gegeven";
}
echo json_encode($response);
?>