<?php
// open the file in a binary mode
$path_to_root=$_SERVER['DOCUMENT_ROOT'];
// we set the name according to the stuff set in the variables (normally!)
// for this test, we just do it like this.


// clean the variables and echo them:
$clean=array();
foreach ($_GET as $key => $value) 
{
	$key=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",$key);	// can contain accents, spaces and - but nothing else, so St.John doesn't work 
	$value=preg_replace("/[^a-zA-Z0-9?@À-ÿ\- _]/","",strip_tags($value));	// can contain accents, spaces and - but nothing else, so St.John doesn't work
	$clean[$key]=strip_tags($value);
}

$name="";
if($clean['id']=="map")
{
	$name = $path_to_root.'/mgcms/cms_map/'.$clean['img'].'.jpg';
}

if($name=="") $name= $path_to_root.'/mgcms/cms_map/'.$clean['img'].'.jpg';
if(file_exists($name))
{
	$fp = fopen($name, 'rb');
	// send the right headers
	header("Content-Type: image/jpg");
	header("Content-Length: " . filesize($name));
	// dump the picture and stop the script
	fpassthru($fp);
	exit;
}else
{
	echo("sorry, no such file ".$name);
}
?>