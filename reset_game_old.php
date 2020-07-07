<?php
// creates new user/game file..

$path_to_root=$_SERVER['DOCUMENT_ROOT'];
$path_to_data="data/";
$path_to_cms_data=$path_to_root."/mgcms/data";

// clean the variables and echo them:
$clean=array();
foreach ($_GET as $key => $value) 
{
	$key=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",$key);	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
	$value=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",strip_tags($value));	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
	$clean[$key]=strip_tags($value);
}

$response=array();
$response['succes']=0;


$clean=array();
foreach ($_GET as $key => $value) 
{
	$key=preg_replace('/\s+/', '', $key); // only alphanumeric
	$value=preg_replace('/\s+/', '', strip_tags($value)); // only alphanumeric and NO additional HTML!
	$clean[$key]=strip_tags($value);
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
				//unset($data['wachtwoord']);
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
//$response['user']['punten']=0; //keep your damn points.
$response['user']['progress']=0; // we need to pick new questions!

// get the number of questions in CMS
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
// repick questions!
$max_questions=30;
$total_order=array();
for($i=0;$i<$nr_of_questions;$i++) $total_order[$i]=$i;
// if category different than -1
// preload ready made question list of tag!
if($response['user']['category']!="-1")
{
		$category_file=$path_to_cms_data."/tags/questions_".$response['user']['category'].".json";
		if(file_exists($category_file))
		{
			$total_order=json_decode(file_get_contents($category_file),true);
		}else{
			$game['error_message']="category-question-list could not be fount for category: ".$category_file;// $game['category'];
		}
	}

shuffle($total_order);
$order=array();
// now copy to a new array for just the first 30!!
for($i=0;$i<$max_questions;$i++) // 30 from total number of questions, which must be more than 30!
{
	array_push($order,$total_order[$i]);
}

$response['user']['question_order']=$order;
$response['user']['hints']=array();
for($i=0;$i<30;$i++)
{
	array_push($response['user']['hints'],0);
}
// we should now save this data and tell the questioner about the new shuffle order!
file_put_contents($filename,json_encode($response['user']));

unset($response['user']['wachtwoord']);
echo json_encode($response);
?>