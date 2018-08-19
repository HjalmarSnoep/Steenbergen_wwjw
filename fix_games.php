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

foreach($dir_content as $file)
{
	$data=json_decode(file_get_contents($file),true);
	$data["id"]=basename($file,".txt");
	echo $data["id"]."<br>";
	if(!isset($data["plaats"]))
	{
		unlink($file); // remove the file rucksichtlos, iemand loopt te klooien.
		continue;
	}
	$bought=[];
	if(!isset($data["created"])) $data["created"]=filemtime($file); // this only works the first time we do this!
	if(!isset($data["last_played"])) $data["last_played"]=filemtime($file); // this only works the first time we do this!
//	echo "plaats:".$data["plaats"]."<br>";
	if(isset($data["gekochtehuizen"]))
	{
		echo json_encode($data["bought_per_city"])."<br>";
		for($i=0;$i<=6;$i++)array_push($bought,[]);
		$data["bought_per_city"]=$bought;
		$data["bought_per_city"][$data["plaats"]]=$data["gekochtehuizen"];
		unset($data["gekochtehuizen"]);
	}
	file_put_contents($file,json_encode($data,JSON_PRETTY_PRINT));
	touch($file, $data["last_played"]);
	// also we should try to keep the time!
	echo "<hr>";
}

echo("<hr>done succesfully.");

?>
