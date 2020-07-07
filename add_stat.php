<?php
// this sets a stat to a incredible list of human readable stats!
$path_to_root=$_SERVER['DOCUMENT_ROOT'];
$path_to_cms_data=$path_to_root."/mgcms/data";
$path_to_data="data/"; // here you will find games, data etc..

// clean the variables and echo them:
$clean=array();
foreach ($_GET as $key => $value) 
{
	$key=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",$key);	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
	$value=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",strip_tags($value));	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
	$clean[$key]=strip_tags($value);
}


$dateObject = new DateTime;


// now we create a file with the same name as stat and put all others in the line..
$filename=$path_to_cms_data."/stats/".$dateObject->format('Y_m_d')."_".$clean['stat'].".txt";
$fh = fopen($filename, 'a') or die("can't open file");
$stringData = time() ."|";
$stringData .= "addr=".$_SERVER['REMOTE_ADDR']."|";
//$stringData .= "agent=".$_SERVER['HTTP_USER_AGENT']."|";

foreach ($clean as $key => $value)
{
	if($key!="stat" && $key!="ck") // don't write the cachekiller...
	{
		$stringData.=$key."=".$value."|";
	}
}
$stringData.="\n";

fwrite($fh, $stringData);
fclose($fh);

?>
