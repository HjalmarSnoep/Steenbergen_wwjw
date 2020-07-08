<?php
// this handles the actual progress of the user..
// and creates stats!

// to get the list, we must travel into the dir data/response
$path_to_root=$_SERVER['DOCUMENT_ROOT'];
$path_to_cms_data=$path_to_root."/mgcms/data";
$path_to_data="data/"; // here you will find games, data etc..

$response=array();
$response['succes']=0;

// clean the variables:
// clean the variables and echo them:
$clean=array();
foreach ($_GET as $key => $value) 
{
	$key=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",$key);	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
	$value=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",strip_tags($value));	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
	$clean[$key]=strip_tags($value);
}

// debug only
//echo("<hr>");
// get to the user progress file!
$filename="data/games/".$clean['naam'].".txt";
if(file_exists($filename))
{
//  debug only
//	echo($filename."<br>");
	$content=file_get_contents($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	$response=json_decode($content, true);
	$response['succes']=1; // so far, so good!

	// do some integrity checks..
	if($response['progress']!=intval($clean['progress']))
	{
		// the progress is to be one more than it was..
		$response['succes']=0;
		$response['errorcode']=1;
		$response['error']="progress mismatch";
		echo(json_encode($response));
		exit();
	}
	
	// now if he was right, add the points and the stones and do progress.
	if($clean['answered']=='c') // correct
	{
		
		// check for nr of points other than 100 and 50!
		if(intval($clean['punten'])!=100 && intval($clean['punten'])!=50 )
		{
			$response['succes']=0;
			$response['errorcode']=3;
			$response['error']="points mismatch: ".intval($clean['punten']);
			echo(json_encode($response));
			exit();
		}
		if(intval($clean['stenen'])!=20 && intval($clean['stenen'])!=10 )
		{
			$response['succes']=0;
			$response['errorcode']=4;
			$response['error']="stenen mismatch";
			echo(json_encode($response));
			exit();
		}
	
		$response['punten']=intval($response['punten'])+intval($clean['punten']);
		$response['stenen']=intval($response['stenen'])+intval($clean['stenen']);
		$response['progress']=intval($clean['progress'])+1;
		$response['last_played']=time(); // keep the last_played in there!
	}
	// if he was bad, don't add the points and stones!
	if($clean['answered']=='b') // bad, bothced
	{
		$response['progress']=intval($clean['progress'])+1;
	}
	// if he just used a hint, show that!
	if($clean['answered']=='a') // a hint has been used.. (coding to confuse hackers!)
	{
		if(isset($response['hints']))
		{
			$response['hints'][$response['progress']]=1;
		}else
		{
			// we create it!
			$response['hints']=array();
			$response['hints'][$response['progress']]=1;
		}	
	}
	// we should save response as well. (means an extra succes=1 is added, I don't care!)
	file_put_contents($filename,json_encode($response));
	
	// check if we need to create highscores
	$max_highscore_len=10;
	function cmp($a, $b)
	{
		if (intval($a['punten']) > intval($b['punten'])) return -1;
		if (intval($a['punten']) < intval($b['punten'])) return 1;
		return 0;
	}
	
	// we might make it leaner and meaner by just doing highscores if it's the last question..
	if(0) // for now it's never, unless you finished!
	{
		
	}
}else
{
	$response['errorcode']=2;
	$response['error']="no such game found ".$clean['naam'];
	echo(json_encode($response));
	exit();
}
echo(json_encode($response));
?>
