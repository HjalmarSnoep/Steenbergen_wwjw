	//STARTSCHERM----------------------------------
	var ori_mm={};
	ori_mm.init=initORIMM;
		
	function initORIMM()
	{
		layout={}; // erase any old layout!

		var data={};
		data.page="orientation";
		data.stat="page";
		Hybrid.setVars("add_stat.php", data);

		
		Hybrid.debugmessage("init InTerFace (initApp) called!");
		Hybrid.resizeFunction=initPage; // try again!
		Hybrid.erasePage();
		layout.back=Hybrid.createLayer();
		Hybrid.setBoxImage(layout.back,"rotate_device"); // this should be set to cover all, but that's for later!
		//handleResize(); // this builds the page AND redraws the stage with the initial puppet!
	}
	

