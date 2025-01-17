<?php
// this handles the actual progress of the user..
// and creates stats!

// to get the list, we must travel into the dir data/response
$path_to_root=$_SERVER['DOCUMENT_ROOT'];
$path_to_cms_data=$path_to_root."/mgcms/data";
$path_to_data="data/"; // here you will find games, data etc..

$response=array();
$response['succes']=0;

// clean the variables and echo them:
// clean the variables and echo them:
$clean=array();
foreach ($_GET as $key => $value) 
{
	$key=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",$key);	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
	$value=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",strip_tags($value));	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
	$clean[$key]=strip_tags($value);
}
$map=intval($clean["map"]); // we need a map where it's moving!

//echo("<hr>");
// get to the user progress file!
$filename="data/games/".$clean['naam'].".txt";
if(file_exists($filename))
{
//	echo($filename."<br>");
	$content=file_get_contents($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	$response=json_decode($content, true);

	// we found the userfile
	if(isset($clean['wachtwoord']))
	{
		if($response['wachtwoord']==crypt($clean['wachtwoord']."mysalt","zoutjesvancalve"))
		{
			$response['succes']=1;
			// get the place of the house , subtract the stones.
			if(isset($clean['prijs']))
			{
				$response['stenen']-=intval($clean['prijs']);
				if($response['stenen']<0)
				{
					$response['succes']=0;
					$response['error']="te weinig tegoed";
					$response['errorcode']=38;
					echo(json_encode($response));
					exit(0);
				}
			}
			else
			{
				$response['succes']=0;
				$response['error']="geen prijs gegeven";
				$response['errorcode']=35;
			}
			// we have paid, set the position!
			$new_house=array();
			$new_house['id']=$clean['id'];
			$new_house['lx']=intval($clean['lx']);
			$new_house['ly']=intval($clean['ly']);
			array_push($response['bought_per_city'][$map],$new_house);
			
			
			// we should save response as well. (means an extra succes=1 is added, I don't care!)
			file_put_contents($filename,json_encode($response, JSON_PRETTY_PRINT));
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
	$response['errorcode']=2;
	$response['error']="no such game found ".$clean['naam'];
	echo(json_encode($response));
	exit();
}
// unset the wachtwoord before responding to user..
unset($response['wachtwoord']);
echo(json_encode($response));
?>
