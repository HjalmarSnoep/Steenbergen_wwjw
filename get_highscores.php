<?php
// this get's you a certain highscore (first 10) and your rank in total rankings (truncated at 1000?)..
$response=array();
$response['succes']=1;

// clean the variables and echo them:
// clean the variables and echo them:
$clean=array();
foreach ($_GET as $key => $value) 
{
	$key=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",$key);	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
	$value=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",strip_tags($value));	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
	$clean[$key]=strip_tags($value);
}

// we get id, label of highscore list, naam of user/game
$filename="data/games/".$clean['naam'].".txt"; // this just checks if the game exists (or you as player exist!)
if(file_exists($filename))
{
	$content=file_get_contents($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	$game=json_decode($content, true);
	$game['time']=filemtime($filename);

	// check if we need to create highscores
	// set the score in every relevant list and sort it!
	
	//
	$filename='data/highscores/'.$clean['label']."_".$clean['id']."_".$clean['period'].".txt";
	// this gets the filename!
	$response['list_exists']=file_exists($filename);
	if(file_exists($filename))
	{
		$content=file_get_contents($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
		$highscores=json_decode($content, true);
	}else
	{
		$response['non-existing-list-name']=basename($filename,".txt");
		$highscores=array();
	}
	$response['high']=array();
	$highscore_len=count($highscores);
	for($i=0;$i<10 && $i<$highscore_len;$i++) // copy the first 10
	{
		$response['high'][$i]=$highscores[$i];
	}
	// now also get my rank in the total highscores
	$response['rank']=-1;
	for($i=0;$i<$highscore_len;$i++)
	{
		if($highscores[$i]['naam']==$clean['naam'])
			$response['rank']=$i;
	}
}else
{
	$response['errorcode']=2;
	$response['error']="no such game found ".$clean['naam'];
}
echo(json_encode($response));
?>
