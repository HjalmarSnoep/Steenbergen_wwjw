<?php
// this updates all highscores lists, from all games.. So nothing get's lost..

// it builds a complete highscore in memory and then writes the file all at once.
// when there is a LOT of games in memory, this might take a while, but you could remedy that by deleting old games.

// first get a list of ALL games.
$path_to_games="data/games";
$path_to_highscores="data/highscores";



// start of highscore functions
function cmp($a, $b)
{
	if (intval($a['punten']) > intval($b['punten'])) return -1;
	if (intval($a['punten']) < intval($b['punten'])) return 1;
	return 0;
}                                    
function addHighscore($add_to,$label,$punten,$naam,$school,$groep,$plaats,$timestamp)
{
	$temp=array(
		"punten" => $punten,
		 "naam" => $naam,
		 "groep" => $groep,
		 "school" => $school,
		 "plaats" => $plaats,
		 "time" => $timestamp,
		);
	$str="";
	foreach ($temp as $key => $value)
	{
		$str.=$key."=>".$value. "  -  ";
	}
	echo($str."<br>");

	// the temp object seems sound!
	if(isset($add_to[$label]))
	{
		//object format: "naam":"test8","punten":2000,"plaats":"6","school":"sdfrr","groep":"2","time":1409816106
		array_push($add_to[$label],$temp);
		
	}else
	{
//		echo("creating the table!<br>");
		$add_to[$label]=array();
		array_push($add_to[$label],$temp);
	}
	return $add_to;
}
//end of highscore functions



//>> OK let's start the script!

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
$highscores=array();

// read every file on the list and build highscore lists!
foreach ($dir_content as $key => $value)
{
	$content=file_get_contents($value, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	$game=json_decode($content, true);
	$score=0;
	$naam=basename($value,".txt");
	if(isset($game['punten']))	$score=$game['punten'];
	if(isset($game['naam']))$name=$game['naam'];
	if(!isset($game['school']))
	{
		// this game kan be deleted!
		unlink($value);
		echo "<hr>delete game: ".basename($value,".txt")."<hr>";
		continue;
	}
	$school=$game['school'];
	$groep=$game['groep'];
	$plaats=$game['plaats'];
	echo("naam->".$name."-school: ".$school."-groep: ".$groep."-plaats: ".$plaats." => ".$score."<br>");
	
//				addHighscore($add_to,    $label,           $punten,$naam,$school,$groep,$plaats,$timestamp)
	$highscores=addHighscore($highscores,"school_".$school,$score,$name,$school,$groep,$plaats,filemtime($value));
	$highscores=addHighscore($highscores,"groep_".$groep,$score,$name,$school,$groep,$plaats,filemtime($value));
	$highscores=addHighscore($highscores,"plaats_".$plaats,$score,$name,$school,$groep,$plaats,filemtime($value));
	$highscores=addHighscore($highscores,"all_all",$score,$name,$school,$groep,$plaats,filemtime($value));
}
echo("<h1>restoring highscore tables</h1>");

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
