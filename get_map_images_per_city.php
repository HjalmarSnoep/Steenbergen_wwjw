<?php
// this file reads things from CMS and outputs a json object including data-urls for every object.
header( 'application/javascript' );

$path_to_root=$_SERVER['DOCUMENT_ROOT'];

function getDataURI($image, $mime = '') {
	//echo("make urI of: ".$image."<br>");
	return 'data: '.(function_exists('mime_content_type') ? mime_content_type($image) : $mime).';base64,'.base64_encode(file_get_contents($image));
	return 'data: '.(function_exists('mime_content_type') ? mime_content_type($image) : $mime).';base64,'.base64_encode(file_get_contents($image));
}

// get the var
$city="1";
if(isset($_GET["city"]) )
{
	$city = preg_replace("/[^0-9]/", "", $_GET["city"]);
}

// aiming for some objects like this:
// {src:"data:",w:2048,h:2048,preload: true,kind:"sprite",ss:{city:[[0,0,398,72,0,0,0]]}}


$response=array();
$response['images']=array();
$response['succes']=1;

// to get the list, we must travel into the dir data/images
$path_to_uploads=$path_to_root."/mgcms/data/huizen"; 
$dir_content=array();

// get the directory and save all entries in an array!
$dir=$path_to_uploads;
if ($handle = opendir($dir)) {
    while (false !== ($entry = readdir($handle))) {
		

        if ($entry != "." && $entry != ".." && pathinfo($entry, PATHINFO_EXTENSION)!="txt") 
		{
			array_push ($dir_content ,$entry );
        }
		
    }
    closedir($handle);
}
$nr_of_images=count($dir_content);

// filter all_images on.... .txt!
$all_images=array();
for($i=0;$i<$nr_of_images;$i++)
{
	// try and open the file and read the contents..
	$temp = explode( '.', $dir_content[$i] );
	$ext = array_pop( $temp );
	$id = implode( '.', $temp );
	// we might also open the txt files here to see if we should ad it!!
	$obj=array();
	if(file_exists($path_to_uploads."/".$id.".txt")) // read file!
	{
		$content=file($path_to_uploads."/".$id.".txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
		for($line=0;$line<count($content);$line++)
		{
			$label=explode(":",$content[$line]);
			$obj[$label[0]]=trim($label[1]);
		}
		if($obj['city']==$city || $obj['city']=='0' || $obj['city']=='7')
		{
		 // do the ones for sale dynamically AS well!
		 if($obj['published']!="") 
		 {
			array_push($all_images,$obj);
			// don't go for unpublished images.. sorrt
		 }
		}
	}else
	{
		echo("WARNING data accomanying image ".$id." might be lost");
	}
}
/*
foreach ($all_images as $key => $value)
{
	$id=$value['id'];
	echo($key." all images ".$id."<br>");
}*/
// create ONE big datauri thing..
foreach ($all_images as $key => $value)
{
	$id=$value['id'];
	$w=$value['w']; // we get these from the txt files!
	$h=$value['h'];
	$rx=$value['rx']; // we get these from the txt files!
	$ry=$value['ry'];
	$city=$value['city'];
	$test=array();
	// spritesheet, make default 1 animation, with centered refpoint.
//		$ss=array();
//		$ss['basic']=array();
//		$ss['basic'][0]=array(0,0,$w,$h,0,$rx,$ry);
//		$test['ss']=$ss;
	$test['src']=getDataURI($path_to_uploads."/".$id.".png");
	$test['w']=$w;
	$test['h']=$h;
	$test['rx']=$value['rx'];
	$test['ry']=$value['ry'];
	$test['lx']=$value['lx'];
	$test['ly']=$value['ly'];
	$test['city']=$city;
	$test['prijs']=$value['prijs'];
	$test['naam']=$value['naam'];
	$test['kind']="sprite";
	$response['images']["hous_".$id]=$test;
}
echo json_encode($response);
?>