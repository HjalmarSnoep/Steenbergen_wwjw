<?php
// this script takes all js libraries and bundles them, then minifies them into ascript to present to a client!
// use a .htaccess to rewrite a specific js_file ( defined here as $lib!) to this script..
// this script will create a build_.... version of this script that you can rename.
// it will then automatically update the script is you change/touch any of the files named here!
// don't publish this script, it's not leech protected

$lib="wwjw.js";
$root=$_SERVER['DOCUMENT_ROOT']."/";

$hybrid_version='1_2_2';

$build = array
(
	array (
        'js' => $root.'static/lib/jquery-1.11.1.min.js',
        'desc' => array
				  (
					'jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license',
				  ),
    ),
	

	// hybrid stuff!
	array (
        'js' => $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_init.js',
        'desc' => array
				  (
					'SnoepHybrid:HTML5 GAME and WebApp LIB',
					'Version'.$hybrid_version.'',
					'Copyright (c)  2014 Hjalmar Snoep, http://www.snoepgames.nl.',
					'All rights reserved.',
				  ),
    ),
	array (
        'js' => $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_debug.js',    // setsup debugmessage AND Chrome minified debugging!
         'desc' => array(),
    ),
	array (
        'js' => $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_audio.js',	// sets up audio capabilities
         'desc' => array(),
    ),
	array (
        'js' => $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_input.js',    // sets up touch, multitouch, buttons etc..
         'desc' => array(),
    ),
	array (
        'js' => $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_canvas.js',    // all canvas functions including isCanvasSupported, blocksprites, particles etc.
         'desc' => array(),
    ),
	array (
        'js' => $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_context_menu.js',    // will show a closeable context menu with options.
         'desc' => array(),
    ),
	array (
        'js' => $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_math.js',    // all kinds of helping math stuffs!
         'desc' => array(),
    ),
	array (
        'js' => $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_layout.js',    // pagescaling, stage, toPx, that stuff. 
         'desc' => array(),
    ),
	array (
        'js' => $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_leech_protect.js',    // aatd settings
         'desc' => array(),
    ),
	array (
        'js' => $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_loading.js',    // get all assets, generate assets
         'desc' => array(),
    ),
	array (
        'js' => $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_box.js',    // All boxes, quite powerfull in itself
         'desc' => array(),
    ),
	array (
        'js' => $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_textbox.js',    // All textboxes
         'desc' => array(),
    ),
	array (
        'js' => $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_cookies.js',    // Interacting with cookies 
         'desc' => array(),
    ),
	array (
        'js' => $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_server.js',    // getting and setting to server, navigation
         'desc' => array(),
    ),
	array (
        'js' => $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_csssprite.js',    // css Sprites from the regular spritesheet environment.
         'desc' => array(),
    ),
	array (
        'js' => $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_webview.js',    // css Sprites from the regular spritesheet environment.
         'desc' => array(),
    ),
	
	
	// add build scripts for game here!
	
	array (
       'js' => 'wwjw_init.js',
        'desc' => array(),
    ),
	array (
       'js' => 'wwjw_globals.js',
        'desc' => array(),
    ),
	array (
       'js' => 'wwjw_disclaimer.js',
        'desc' => array(),
    ),
	array (
       'js' => 'wwjw_user.js',
        'desc' => array(),
    ),
	array (
       'js' => 'wwjw_start.js',
        'desc' => array(),
    ),
	array (
       'js' => 'wwjw_contact.js',
        'desc' => array(),
    ),
	array (
       'js' => 'wwjw_new_game.js',
        'desc' => array(),
    ),
	array (
       'js' => 'wwjw_resume_game.js',
        'desc' => array(),
    ),
	array (
       'js' => 'wwjw_reset_game.js',
        'desc' => array(),
    ),
	array (
       'js' => 'wwjw_quiz.js',
        'desc' => array(),
    ),	
	array (
       'js' => 'wwjw_map.js',
        'desc' => array(),
    ),
	array (
       'js' => 'wwjw_high.js',
        'desc' => array(),
    ),
	array (
       'js' => 'wwjw_orientation_mismatch.js',
        'desc' => array(),
    ),
	
	
);

// hide descriptive and long strings...
$characters = str_split("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); // allowed characters for minifying

// add the defaults to the obscure list!
$lines  = file( $root.'static/lib/snoep_hybrid_v'.$hybrid_version.'/hybrid_obscurelist.txt');
$obscure=array(
); // we create three letter mnemonics for these..

// take the obscuring array from the lib itself!
$count=0;
$base = count($characters);
foreach($lines  as $line ){
	$line=trim ($line);
	if($line!="")
	{
	//	echo $line. " => _".num2alpha($count)."<br>";
		$obscure[$line]='_'.num2alpha($count);
		$count++;
	}
}

if(file_exists("local_obscurelist.txt"))
{
	// add the local functionnames to the obscure list!
	$lines  = file( 'local_obscurelist.txt');
	foreach($lines  as $line ){
		$line=trim ($line);
		if($line!="")
		{
			$obscure[$line]='_'.num2alpha($count);
			$count++;
		}
	}
}

function num2alpha($n) {
    $r = '';
    for ($i = 1; $n >= 0 && $i < 10; $i++) {
        $r = chr(0x41 + ($n % pow(26, $i) / pow(26, $i - 1))) . $r;
        $n -= pow(26, $i);
    }
    return strtolower ($r);
}


// WE ALWAYS MINIFY AND Build debug, So don't even catch the minify thing..
//$minify=true;
//if(isset($_GET['minify'])) 
//{
//	$minify=false;	
//}


$cache_file = 'build_' . $lib ;

// ALWAYS build now.. It's quick. ...Optimisation removed: we need to rebuild if the largest in mtime is newer than the cache file mtime

 require $root.'static/php/jsmin/jsmin-1.1.1.php';
  $scripts = '';
  foreach ($build as $file) {
		$contents = @file_get_contents($file['js']);
		if ($contents === false) {
		  echo("build_js.php: Error reading file ".$file['js']);
		  exit;
		} else {
		  $scripts .= $contents;
		}
  }

  $min_content = $scripts;
  file_put_contents($cache_file, $min_content); // this creates the build. We always want that, because this script CAN only be called locally!

	// now start minifying!
  // first we strip the debugmessages from it and save again to check that went right!
 
	$min_content = preg_replace('/Hybrid.debugmessage\(.*\);/', '{}', $scripts);
	$min_content = preg_replace('/Hybrid.debugmessage\(.*\)/', '{}', $min_content); // this is still legal in javascript
  
    //file_put_contents("no_mes_".$cache_file, $min_content); // this creates the build. We always want that, because this script CAN only be called locally!
 
 
  
  
  // NOW always minify for a instant release version, than in the page getting the javaascript switch on host for build_ or min_ version without the comments and obscured with terms above!
  $min_content = JSMin::minify($min_content);
  $br="\n";
  $copyright='/*-- '.$br;
  for($i=0;$i<count($build);$i++)
  {
	if(count($build[$i]['desc'])!=0)
	{
		$copyright .= $br."Copyright notice".$br; 
		for($l=0;$l<count($build[$i]['desc']);$l++)
		{
			$copyright .=  $build[$i]['desc'][$l].$br;
		}
	}
  }
  $copyright .= $br.'---*/'.$br;
  // now we obscure it some more!!!
  reset($obscure);
  while (list($key, $val) = each($obscure)) 
  {
	// replace each $key with $val!!
	$min_content=str_replace($key,$val,$min_content);
	
  }
  $min_content =$copyright.$min_content;
  $cache_file = 'release_' . $lib ;
  file_put_contents($cache_file, $min_content);
  
  
  // check in the minified contents if any function names still stand out!
  if(!file_exists("local_obscurelist.txt"))
	{
		// check for descriptive and long names and put suggestions in a file!
		//$min_content = preg_replace('/Hybrid.debugmessage\(.*\);/', '{}', $scripts);
		
		# The Regular Expression for Function Declarations
		$functionFinder = '/function[\s\n]+(\S+)[\s\n]*\(/';
		//$functionFinder = '/Hybrid.debugmessage\(.*\);/';
		# Init an Array to hold the Function Names
		$functionArray = array();
		# Load the Content of the PHP File
		$fileContents = $min_content;
		# Apply the Regular Expression to the PHP File Contents
		preg_match_all( $functionFinder , $fileContents , $functionArray );
		# If we have a Result, Tidy It Up
		if( count( $functionArray )>1 ){
		  # Grab Element 1, as it has the Matches
		  $functionArray = $functionArray[1];
		}
		// dump the function list into a new file called local_obscurelist.
		$fileContents="";
		for($i=0;$i<count($functionArray);$i++)
		{
			$function_name=explode ( "(" , $functionArray[$i] ); // cut it off at first hook!
			if(strlen($function_name[0])>7 && $function_name[0][0]!="_") // that's a big name.. and not starting with _ allready!
			{
				$fileContents.=$function_name[0]."\n";
			}
		}
		file_put_contents ( "local_obscurelist.txt", $fileContents);
	}
 
  
  $min_content=$scripts; // restore it for (debug output)

 
  
  

header('Content-Type: text/javascript');
header('Expires: ' . gmdate('D, d M Y H:i:s', time()+365*24*3600) . ' GMT');
header('ETag: "' . md5($min_content) . '"');


if (is_buggy_IE()) {
  ob_start();
} else {
  ob_start('ob_gzhandler');
}

echo $min_content;

function is_buggy_IE() {
  $ret = false;
  $agent = $_SERVER['HTTP_USER_AGENT'];
  if (strpos($agent, 'Mozilla/4.0 (compatible; MSIE ') === 0 && strpos($ua, 'Opera') === false) {
    $version = floatval(substr($agent, 30));
    if ($version < 6) {
      $ret = true;
    } else if ($version == 6 && strpos($agent, 'SV1') === false) {
      $ret = true;
    }
  }
  return $ret;
}
?>