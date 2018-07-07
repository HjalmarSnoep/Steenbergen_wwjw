<?php
// creates new user/game file..

$path_to_root=$_SERVER['DOCUMENT_ROOT'];
$path_to_data="data/";

$clean=array();
foreach ($_GET as $key => $value) 
{
	$key=preg_replace('/\s+/', '', $key); // only alphanumeric
	$value=preg_replace('/\s+/', '', strip_tags($value)); // only alphanumeric and NO additional HTML!
	$clean[$key]=strip_tags($value);
}
$response=array();
$response['succes']=0;
if(isset($clean['naam']))
{
	$filename=$path_to_data."games/".$clean['naam'].".txt";
	if(file_exists($filename))
	{
		// we have a file, read it..
		
		if( isset($clean['wachtwoord']) &&
    		isset($clean['school']) && 
			isset($clean['groep']) && 
			isset($clean['plaats'])
		   )
		{		
			// creeer een nieuwe user file!
			$game=array();
			$game['naam']=$clean['naam'];
			$game['wachtwoord']=$clean['wachtwoord'];
			$game['school']=$clean['school'];
			$game['groep']=$clean['groep'];
			$game['plaats']=$clean['plaats'];
			$game['progress']=0;
			$game['question_order']=0;
			$game['punten']=0;
			$game['stenen']=0;
			$game['gekochtehuizen']=array();
			$fp = fopen($filename, 'w');
				fwrite($fp, json_encode($game));
			fclose($fp);
			$response['succes']=1;	
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
		$response['error']="Naam bestaat niet!";
		$response['errorcode']=13;
	}
}else
{
	$response['errorcode']=14;
	$response['error']="Geen naam gegeven";
}
echo json_encode($response);
?>