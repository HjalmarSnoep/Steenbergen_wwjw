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
	// these don't HAVE to be set, but now they CAN be!
	if(isset($clean["groep"]))$clean['groep'] = preg_replace("/[^1-8]/","",$clean['groep']);	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
	if(isset($clean["groep"]))$clean['groep']=substr($clean['groep'],0,1); // no longer names than 2!
	if(isset($clean["groep"]))$clean['groep']= intval($clean['groep']); // will become 0 if you try to kloot!
	if(isset($clean["plaats"]))$clean['plaats'] = preg_replace("/[^1-6]/","",$clean['plaats']);	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
	if(isset($clean["plaats"]))$clean['plaats']= substr($clean['plaats'],0,1); // no longer names than 2!
	if(isset($clean["plaats"]))$clean['plaats']= intval($clean['plaats']); // will become 0 if you try to kloot!
	if(isset($clean['category']))
	{
			
		$clean['category'] = preg_replace("/[^0-9A-Z-a-z\-]/","",$clean['category']);	// just an id people.. can be -1
		$clean['category']= substr($clean['category'],0,32); // no longer ids than 32!
	}else{
		$clean['category'] = -1; // if not set somehow..
	}
if(isset($clean['naam']))
{
	$clean['naam']=strtolower($clean['naam']); // lowercase names!!!!
	$clean['naam']=html_entity_decode($clean['naam']); // if there was a thing like &nbsp; in there it's turned into ' '
	$clean['naam']=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",$clean['naam']);	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
	$clean['naam']=filter_var($clean['naam'], FILTER_SANITIZE_STRING|FILTER_FLAG_STRIP_HIGH);
	$clean['naam']=substr($clean['naam'],0,32); // no longer names than 32!
	$filename=$path_to_data."games/".$clean['naam'].".txt";
	if(file_exists($filename))
	{
		// we have a file, read it..
		$jsonString = file_get_contents($filename);
		$data = json_decode($jsonString,true); // converts it to an array!
			
		if(isset($clean['wachtwoord']))
		{
			// NOW WE DO THE SAME AS WITH NEW_GAME!
			$clean['wachtwoord']=strtolower($clean['wachtwoord']); // lowercase names!!!!
			$clean['wachtwoord']=html_entity_decode($clean['wachtwoord']); // if there was a thing like &nbsp; in there it's turned into ' '
			$clean['wachtwoord'] = preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",$clean['wachtwoord']);	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
			$clean['wachtwoord']=substr($clean['wachtwoord'],0,32); // no longer names than 32!
			
		}else{
			$response['succes']=0;
			$response['error']="Naam en wachtwoord incorrect!";
			$response['errorcode']=17;
			exit(1);
		}

		// overwrite whatever is necessary
		if(isset($clean["category"]))$data["category"]=$clean["category"];
		if(isset($clean["groep"]))$data["groep"]=$clean["groep"];
		if(isset($clean["plaats"]))$data["plaats"]=$clean["plaats"];
		if(isset($clean["school"]))$data["school"]=$clean["school"];
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

if($response['succes']==1)
{
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
	if(isset($response['user']['category']))
	{
		if(	$response['user']['category']!="-1")
		{
				$category_file=$path_to_cms_data."/tags/questions_".$response['user']['category'].".json";
				if(file_exists($category_file))
				{
					$total_order=json_decode(file_get_contents($category_file),true);
				}else{
					$game['error_message']="category-question-list could not be fount for category: ".$category_file;// $game['category'];
				}
		}
	}else{
		echo "ERROR: user:";
		var_dump($response['user']);	
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
}

unset($response['user']['wachtwoord']);
echo json_encode($response);
?>