<?php
// this updates the highscore list, from a game-name, so no cheating! possible.

$response=array();
$response['succes']=1;


$periods=[];
array_push($periods,[ 'label'=>"week", 'days'=> 7]);
array_push($periods,[ 'label'=>"maand", 'days'=> 31]);
array_push($periods,[ 'label'=>"jaar", 'days'=> 366]);
array_push($periods,[ 'label'=>"alles", 'days'=> 3000000]); // 3 miljoen dagen, da's 8000 jaar. 


// clean the variables and echo them:
$clean=array();
foreach ($_GET as $key => $value) 
{
	$key=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",$key);	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
	$value=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",strip_tags($value));	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
	$clean[$key]=strip_tags($value);
}

//echo("<hr>");
// get to the user progress file!

// start of highscore functions
function cmp($a, $b)
{
	if (intval($a['punten']) > intval($b['punten'])) return -1;
	if (intval($a['punten']) < intval($b['punten'])) return 1;
	return 0;
}
function addHighscore($label,$id,$current)
{
	// example: "school",$game['school'],$game);
	$response_str="";
	$max_highscore_len=1000; // hardly any truncation!
	$filename='data/highscores/'.$label."_".$id.".txt";
	//echo("DEBUG: trying to set a highscore in :".$filename."<br>");

	// we might check if there is a lock on the file and if there is, we might fail to set this highscore.
	// user scores will NOT be lost, it's saved in the game.
	// so the next time, the user scores, we correct the file (unless it's locked again)
	// but it's going to get REALLY complicated then..
	// also admins can fix the highscores from the scores.
	// we might just do this once a day?
	
	if(file_exists($filename))
	{
		// not bothering with file locking, if files get corrupted, we can recreate them, from all games..
//		echo("list exists :".$filename."<br>");
		$content=file_get_contents($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
		$highscores=json_decode($content, true);
	}else
	{
//		echo("DEBUG: new list for :".$filename."<br>");
		$response_str.="new_list|";
		$highscores=array();
	}
	// now you might want to remove entries that are too old (or archive them for periodic-highscores)...
	
	
	// add the current score (if not present yet!)
	$highscore_len=count($highscores);
	$add_score_at=$highscore_len; // add position = current highscore length!
	for($i=0;$i<$highscore_len;$i++)
	{
		$old=$highscores[$i];
		//echo("DEBUG: checking if your name is in there somewhere:".$old['naam']."==".$current['naam']."<br>");
		if($old['naam']==$current['naam'])
		{
			//echo("DEBUG: found your name at place:".$i." -> ".$old['naam']."==".$current['naam']."<br>");
			//echo("DEBUG: found your name at place:".$i." -> ".intval($old['punten']).">".intval($current['punten'])."<br>");
			if(intval($old['punten'])<=intval($current['punten']))
				$add_score_at=$i;
			else
				$add_score_at=-1; // this check makes scores only go up!
		}
	}
	$response_str.="rank".$add_score_at."|";

	if($add_score_at!=-1)
	{
		// always add the score at the right place now!
		$score=array();
		$score['naam']=$current['naam'];
		$score['punten']=$current['punten'];
		$score['plaats']=$current['plaats'];
		$score['school']=$current['school'];
		$score['groep']=$current['groep'];
		$score['time']=$current['time'];
		// we might also want a time on highscore!
		$highscores[$add_score_at]=$score;
		
		usort ($highscores, "cmp" );
		// unset everything above $max_highscore
		
		$highscore_len=count($highscores);
		if($highscore_len>$max_highscore_len)
		{
			$response_str.="truncate|";//.$highscore_len.">".$max_highscore_len."|"
			array_splice($highscores, $max_highscore_len, $highscore_len-$max_highscore_len);
		}
		// save the file!	
		file_put_contents($filename,json_encode($highscores));
		//echo(json_encode($highscores));
	}
	return $response_str;
}
// end of highscore functions
$filename="data/games/".$clean['naam'].".txt";
if(file_exists($filename))
{
	$content=file_get_contents($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	$game=json_decode($content, true);
	$game['time']=filemtime($filename); // take the last change of the game as play time!

	// check if we need to create highscores
	// set the score in every relevant list and sort it!
	$response["school"]=addHighscore("school",$game['school'],$game);
	$response["groep"]=addHighscore("groep",$game['groep'],$game);
	$response["plaats"]=addHighscore("plaats",$game['plaats'],$game);
	$response["all"]=addHighscore("all","all",$game);
}else
{
	$response['errorcode']=2;
	$response['error']="no such game found ".$clean['naam'];
}
echo(json_encode($response));
?>
