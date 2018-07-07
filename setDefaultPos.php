<?php

// Please echo what you get for inspection.
//GET!
// set a standard HTML header.
//header('Access-Control-Allow-Origin: snoep.at');
//header('Access-Control-Allow-Origin: makinggames.org');
header('Content-Type: text/html; charset=utf-8'); // this is needed to get special characters right.

// clean these fields!
$lx=0;
$ly=0;
$id="no id given";
if(isset($_GET["lx"])) $lx=preg_replace("/[^0-9]/", "", $_GET["lx"]);
if(isset($_GET["ly"])) $ly=preg_replace("/[^0-9]/", "", $_GET["ly"]);
if(isset($_GET["id"])) $id=preg_replace("/[^a-zA-Z0-9]/", "", $_GET['id']);

$response=array();
$response['succes']=1;

$path_to_root=$_SERVER['DOCUMENT_ROOT'];
$path_to_data=$path_to_root."/mgcms/data";


// create the huizen file!
$filename=$path_to_data."/huizen/".$id.".txt";
// if file exists move to trash with datestamp!
$nl="\n";
if(file_exists($filename))
{
	// now we read it get all info, change only the lx and ly and set it all back..
	$content=file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	for($line=0;$line<count($content);$line++)
	{
		$label=explode(":",$content[$line]);
		if($label[0]=="lx")
		{
			$content[$line]="lx: ".$lx;
		}
		if($label[0]=="ly")
		{
			$content[$line]="ly: ".$ly;
		}
	}
	$str="";
	for($line=0;$line<count($content);$line++)
	{
		$str.=$content[$line].$nl;
	}
	// set this to file!
	file_put_contents($filename ,$str ,LOCK_EX);
}else
{
	$response["succes"]=0;
	$response["error_message"]="no such file: ".$filename;
}
echo json_encode($response);
?>