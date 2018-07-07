	//STARTSCHERM----------------------------------
	var ori_mm={};
	ori_mm.init=orientationStart;
	var layout={};

	
	function orientationStart()
	{
		Hybrid.debugmessage("reorient request called!");
		Hybrid.resizeFunction=handleResize_orimm;
		Hybrid.erasePage();
		window.alert("Zet de tablet in landschapspositie en herlaad de pagina.");
		//handleResize(); // this builds the page AND redraws the stage with the initial puppet!
	}
	function handleResize_orimm()
	{
	}
	
	
	

