<?php
// opens the user file and deletes the password and name entries, then returns the data!

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
		$jsonString = file_get_contents($filename);
		$data = json_decode($jsonString,true); // converts it to an array!
		// check if the wachtwoord matches
		if( isset($clean['wachtwoord']) )
		{
			if($data['wachtwoord']=crypt($clean['wachtwoord']."mysalt","zoutjesvancalve"))
			{
				unset($data['naam']);
				unset($data['wachtwoord']);
				unset($data['school']);
				unset($data['groep']);
				unset($data['plaats']);
				$response=$data;
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