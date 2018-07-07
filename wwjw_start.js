	//STARTSCHERM----------------------------------
	var start={};
	start.init=initStart;
	start.shown_animation=false;
	var heard_start_up_sound=false;
	function initStart()
	{
		if(heard_start_up_sound!=true)
		{
			Hybrid.playSound("begin");
			heard_start_up_sound=true;
			// track unique visitors!
			var data={};
			// gather information about the visitor!!
			data.unique=0;
			data.stat="visitors";
			data.online=navigator.onLine;
			data.language=navigator.language;
			data.platform=navigator.platform;
			data.appName=navigator.appName;
			data.appVersion=navigator.appVersion;
			data.cookieEnabled=navigator.cookieEnabled;
			data.maxTouchPoints=navigator.maxTouchPoints;
			if(Hybrid.getCookie("steenbergen")==null)
			{
				Hybrid.setCookie("steenbergen",1)
				data.unique=1;
			}
			Hybrid.setVars("add_stat.php", data);
		}
		Hybrid.debugmessage("START called!");
		Hybrid.setCookie("lastpage","start");
		Hybrid.resizeFunction=handleResize;
		handleResize(); // this builds the page AND redraws the stage with the initial puppet!
	}
	function handleResize()
	{
		Hybrid.debugmessage("ready for first page:"+Hybrid.width+"x"+Hybrid.height);
		Hybrid.erasePage();
		// now create and set the layer
		layout={}; // erase any old layout!
		helpers_createStartSchermBack();
		
		// now create all buttons to appear a bit later!
		var w,h,x,y,f;
		layout.buttons=Hybrid.createLayer();
		// create menubutton contact
		w=Hybrid.graphics_manifest['buttons'].ss['contact'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['contact'][0][3];
		x=Hybrid.width-w-60;
		y=60;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"contact","button_contact",handleButtonsStart);
		
		// create button continue_game
		w=Hybrid.graphics_manifest['buttons'].ss['continue_game'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['continue_game'][0][3];
		x=Hybrid.width-w-60;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"continue_game","button_continue_game",handleButtonsStart);
		// create button new_game 
		w=Hybrid.graphics_manifest['buttons'].ss['new_game'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['new_game'][0][3];
		x=60;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"new_game","button_new_game",handleButtonsStart);

		// place logo smack in the middle!
		w=Hybrid.graphics_manifest['start_logo'].w;
		h=Hybrid.graphics_manifest['start_logo'].h;
		x=Hybrid.width/2-w/2;
		y=138; // from layout!
		layout.logo=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxImage(layout.logo,"start_logo"); // this should be set to cover all, but that's for later!
		Hybrid.setBoxAlpha(layout.logo,0.85); // alpha added
	
		if(!start.shown_animation)
		{
			start.shown_animation=true;
			Hybrid.setBoxAlpha(layout.buttons,0.0); // this one fades in after a while..
			start.framecounter=0;
			start.buttons_Alpha=0; // buttons_alpha will be only set to 0 once!
			start.state="just_started";
			start.framecounter=0;
			start.state="wait_fade_in";
			Hybrid.startLoop(startPageLoop,1000/25);
		}else
		{
			start.state="done";
		}
	}
	function startPageLoop()
	{
		switch(start.state)
		{
			case "wait_fade_in":
				start.framecounter++;
				if(start.framecounter>10)
				{
					start.framecounter=0;
					start.state="fade_in";
				}
			break;
			case "fade_in":
				start.buttons_Alpha+=0.1;
				if(start.buttons_Alpha>=1)
				{
					Hybrid.setBoxAlpha(layout.buttons,1); // this one fades in after a while..
					start.state="done";
				}else
				{
					Hybrid.setBoxAlpha(layout.buttons,start.buttons_Alpha); // this one fades in after a while..
				}
			break;
		}
	}
	function handleButtonsStart(label)
	{
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		switch(label)
		{
			case "button_contact":
				Hybrid.stopLoop();
				contact.init();
			break;				
			case "button_continue_game":
				//welcome.init();
				resume_game.init();
				//map.init();
			break;				
			case "button_new_game":
				//quiz.init();
				new_game.init();
			break;		
			default:
				Hybrid.debugmessage("handleButtonsStart: "+label);
		}
	}
	

