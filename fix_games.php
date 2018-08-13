<?php
// this updates all highscores lists, from all games.. So nothing get's lost..

// it builds a complete highscore in memory and then writes the file all at once.
// when there is a LOT of games in memory, this might take a while, but you could remedy that by deleting old games.

// first get a list of ALL games.
$path_to_games="data/games";

$dir_content=array();

if (!is_dir($path_to_games)) 
{
	echo("Sorry, cannot reach the games table. Please contact developer.");
}
// get the directory and save all entries in an array!
$dir=$path_to_games;
if ($handle = opendir($dir)) {
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != "..") 
		{
			array_push ($dir_content ,$dir."/".$entry );
			//echo($dir."/".$entry."<br>");
        }
    }
    closedir($handle);
}
$periods=[];
array_push($periods,[ 'label'=>"week", 'days'=> 7]);
array_push($periods,[ 'label'=>"maand", 'days'=> 31]);
array_push($periods,[ 'label'=>"jaar", 'days'=> 366]);
array_push($periods,[ 'label'=>"alles", 'days'=> 3000000]); // 3 miljoen dagen, da's 8000 jaar. 


	$highscores=array();
	// read every file on the list and build highscore lists!
	foreach ($dir_content as $key => $value)
	{
		$content=file_get_contents($value, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
		$game=json_decode($content, true);
		if(json_last_error()!=JSON_ERROR_NONE)
		{
			echo "sorry, something went wrong reading the json for: ".$value;
		}
		if(isset($game['naam']))
		{		
			$score=0;
			if(isset($game['punten'])) $score=$game['punten'];
			$school=$game['school'];
			$groep=$game['groep'];
			$plaats=$game['plaats'];
			$name=$game['naam'];
			echo("naam->".$name."-school: ".$school."-groep: ".$groep."-plaats: ".$plaats." => ".$score."<br>");
			
		//				addHighscore($add_to,    $label,           $punten,$naam,$school,$groep,$plaats,$timestamp)
		
			foreach ($periods as $p => $period)
			{
				$time=time()-filemtime($value); // number of days since the game was last played!
				$days=$time/(60*60*24);
				echo "days since game was played: ".$days."<br>";
				if($period['days']>=$days)
				{
					$highscores=addHighscore($highscores,"school_".$school."_".$period['label'],$score,$name,$school,$groep,$plaats,filemtime($value));
					$highscores=addHighscore($highscores,"groep_".$groep."_".$period['label'],$score,$name,$school,$groep,$plaats,filemtime($value));
					$highscores=addHighscore($highscores,"plaats_".$plaats."_".$period['label'],$score,$name,$school,$groep,$plaats,filemtime($value));
					$highscores=addHighscore($highscores,"all_all"."_".$period['label'],$score,$name,$school,$groep,$plaats,filemtime($value));
				}
			}	
		}// if we haven't got a name, skip it mate!
	}
	echo("<h1>restoring highscore tables for period ".$period["label"]."</h1>");

	echo("<hr>");

	// now save ALL files to data/highscores
	foreach ($highscores as $key => $value)
	{
		//echo("sorting list: ".$key."<br>");
		usort ($value, "cmp" ); // sort after complete list has been made, with huge histories, this might take a while..

		$filename=$path_to_highscores."/".$key.".txt";
		echo("rewriting highscores for: ".$key."<br>");
		file_put_contents($filename,json_encode($value));
	}


echo("<hr>done succesfully.");

?>
