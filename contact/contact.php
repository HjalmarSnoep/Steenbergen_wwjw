
<?php

	

	$name = isset($_REQUEST['name']) ? filter_var($_REQUEST['name'], FILTER_SANITIZE_STRING) : '';
	$email = isset($_REQUEST['email']) ? filter_var($_REQUEST['email'], FILTER_SANITIZE_EMAIL)  : '';
	$comment = isset($_REQUEST['comment']) ? filter_var($_REQUEST['comment'], FILTER_SANITIZE_STRING) : '';

	// CLEAN THE VARIABLES
	
	
	$last_part=strstr ($email,"@");
	if(strlen($last_part)==0) $email="";
	$ext=strstr ($last_part,".");
	if(strlen($ext)==0) $email="";

	if($email=="")
	{
		echo("<html><head><meta http-equiv=\"refresh\" content=\"0;URL=invalid_email.php\"></head><body>Just a second.....</body></html>");

//		echo("<html><head><title>Error submitting form</title></head><body><h1>ERROR WHILE SUBMITTING FORM..</h1>Error: Invalid E-mail given, please <a href='javascript:window.history.back();'>try again</a> </body></html>");
		exit(0); // A response code other than 0 is a failure
	}

  	$to="steenbergen@snoep.at";
  	$subject="Message from ".$name;
  	$email_code="email:".$email."\n";
  	$email_code.="\ncomment:\n".$comment;
  	$headers = 'From: ' .$email. "\r\n" .
	    		'Reply-To: ' .$email. "\r\n" .
	    		'X-Mailer: PHP/' . phpversion();

	$mail_gelukt=mail($to, $subject, $email_code, $headers);
	
  	$to="info@colorsandshapes.nl";
  	$subject="Message from ".$name;
  	$email_code="email:".$email."\n";
  	$email_code.="\nmessage:\n".$comment;
  	$headers = 'From: ' .$email. "\r\n" .
	    		'Reply-To: ' .$email. "\r\n" .
	    		'X-Mailer: PHP/' . phpversion();

	$mail_gelukt=mail($to, $subject, $email_code, $headers);
	
	if($mail_gelukt)
	{
		echo("<html><head><meta http-equiv=\"refresh\" content=\"0;URL=succes.php\"></head><body>Just a second.....</body></html>");
	}
	else
	{
		echo("<html><head><meta http-equiv=\"refresh\" content=\"0;URL=failed.php\"></head><body>Just a second.....</body></html>");
	}
?>


