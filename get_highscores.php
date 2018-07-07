<?php
// this get's you a certain highscore (first 10) and your rank in total rankings (truncated at 1000?)..
$response=array();
$response['succes']=1;

// clean the variables and echo them:
$clean=array();
foreach ($_GET as $key => $value) 
{
	$key=preg_replace('/\s+/', '', $key); // only alphanumeric
	$value=preg_replace('/\s+/', '', strip_tags($value)); // only alphanumeric and NO additional HTML!
	$clean[$key]=strip_tags($value);
	//echo($key."=".$clean[$key]."<br>");
}
// we get id, label of highscore list, naam of user/game
$filename="data/games/".$clean['naam'].".txt";
if(file_exists($filename))
{
	$content=file_get_contents($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	$game=json_decode($content, true);
	$game['time']=filemtime($filename);

	// check if we need to create highscores
	// set the score in every relevant list and sort it!
	
	//
	$filename='data/highscores/'.$clean['label']."_".$clean['id'].".txt";
	$response['list_exists']=file_exists($filename);
	if(file_exists($filename))
	{
		$content=file_get_contents($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
		$highscores=json_decode($content, true);
	}else
	{
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
