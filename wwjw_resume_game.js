	//resume_game----------------------------------
	var resume_game={};
	resume_game.init=initresume_game;
	resume_game.form={};
	
	function initresume_game()
	{
		if(Hybrid.getCookie("wwjw_disclaimer")!="1")
		{
			Hybrid.debugmessage("you have not seen the disclaimer yet!");
			user.refer_to="resume";
			disclaimer.init();
		}else
		{
			var data={};
			data.page="resume";
			data.stat="page";
			Hybrid.setVars("add_stat.php", data);
		
			Hybrid.playSound("next_question");
			Hybrid.debugmessage("START  called!");
			Hybrid.setCookie("lastpage","resume_game");
			
			// get some stuff from the cookie!
			resume_game.form.naam="";
			if(Hybrid.getCookie("user_naam")!==null) resume_game.form.naam=Hybrid.getCookie("user_naam");
			
			Hybrid.resizeFunction=handleResizeresume_game;
			handleResizeresume_game(); // this builds the page 
//			Hybrid.listenToKeys(resume_KeyHandler)
		}
	}
	
//	function resume_KeyHandler(key, down)
//	{
		//Hybrid.debugmessage("key "+key+" down "+down);
		// listen for 13 to close on enter!
    //}
	
	/*
	Endless loop:
	
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER : blur
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER textbox changed: [object Object]
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER textbox changed to: vossemeer<div><br></div>
wwjw.js?ck=1417534790:422 user pressed enter!
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER : blur
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER textbox changed: [object Object]
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER textbox changed to: vossemeer
wwjw.js?ck=1417534790:422 blur value:vossemeer
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER : blur
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER textbox changed: [object Object]
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER textbox changed to: vossemeer<div><br></div>
wwjw.js?ck=1417534790:422 user pressed enter!
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER : blur
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER textbox changed: [object Object]
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER textbox changed to: vossemeer
wwjw.js?ck=1417534790:422 blur value:vossemeer
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER : blur
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER textbox changed: [object Object]
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER textbox changed to: vossemeer<div><br></div>
wwjw.js?ck=1417534790:422 user pressed enter!
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER : blur
wwjw.js?ck=1417534790:422 NEW GAME TEXTCHANGE LISTENER textbox changed: [object Object]
	*/
	

	function resume_game_TextChangeListener()
	{
		Hybrid.debugmessage("NEW GAME TEXTCHANGE LISTENER : "+Hybrid.lastTextboxChange);
		Hybrid.debugmessage("NEW GAME TEXTCHANGE LISTENER textbox changed: "+Hybrid.lastTextboxToChange);
		Hybrid.debugmessage("NEW GAME TEXTCHANGE LISTENER textbox changed to: "+Hybrid.lastTextboxChangedTo);
		
		
		
		switch(Hybrid.lastTextboxChange)
		{

			case "focus":
					if(Hybrid.lastTextboxChangedTo==Hybrid.lastTextboxToChange.initialText)
					{
						Hybrid.setText(Hybrid.lastTextboxToChange,"");
					}
					Hybrid.setTextBoxColor(Hybrid.lastTextboxToChange,palet.dark_blue);
			break;
			case "blur":
				Hybrid.debugmessage("blur value:"+Hybrid.lastTextboxChangedTo);
				if(Hybrid.lastTextboxChangedTo==Hybrid.lastTextboxToChange.initialText || Hybrid.lastTextboxChangedTo=="" )
				{
					Hybrid.setText(Hybrid.lastTextboxToChange,Hybrid.lastTextboxToChange.initialText);
					Hybrid.setTextBoxColor(Hybrid.lastTextboxToChange,palet.pale_grey);
				}
			break;
			case "change":
				if(Hybrid.lastTextboxChangedTo.indexOf("<div>")!==-1 || Hybrid.lastTextboxChangedTo.indexOf("<br>")!==-1)
				{
					// user pressed enter!
					Hybrid.debugmessage("user pressed enter!");
					// we want to erase any div stuff out of it!
					// we might need to set focus to a dummy textbox, to kill any softkeyboard
					Hybrid.blurTextField(Hybrid.lastTextboxToChange);
					//Hybrid.blurTextField(layout.wachtwoord_text);
					handleButtonsresume_game("button_continue"); // press button manually.
				}
			break;
			default:
			 Hybrid.debugmessage("unknown textChange:"+Hybrid.lastTextboxChange);
		}
	}
	function handleResizeresume_game()
	{
		Hybrid.debugmessage("pageresume_game build up:"+Hybrid.width+"x"+Hybrid.height);
		Hybrid.erasePage();
		layout={}; // erase any old layout!
		helpers_createStartSchermBack(); // cerateas a layer layout.back!

		
		// now create all buttons and elements
		layout.buttons=Hybrid.createLayer();
		
		var w,h,x,y,f,tx,ty,string;
		w=900;
		h=1020;
		x=100;
		y=345; //Hybrid.height-h;
		layout.wit_vlak=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.wit_vlak,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBoxAlpha(layout.wit_vlak,0.80); // alpha added		
		
		x=100;
		y=779/2; // measured 779 in psd. // why divided by two is a little mystery here..
		w=w-200;
		h=700;
		string="";
		string+="<h1>Weet jij waar je woont?</h1>";
		string+="Ja, de naam van je stad of dorp, die ken je wel. Maar wat weet je nu echt over jouw plaats? En over de zes kernen die samen de gemeente Steenbergen vormen? In ieder geval weet je lang niet alles. Speel het spel ‘Weet waar je woont’ en dat verandert vanzelf. Beantwoord de vragen en leer alles over de geschiedenis van jouw gemeente. Bovendien krijg je voor ieder goed antwoord punten waarmee je gebouwen of attracties kunt kopen. Plaats die in de plattegrond en bouw jouw ideale woonplaats. Voor je begint, moet je rechts eerst even je gegevens invullen en een wachtwoord aanmaken. Want je wilt toch niet dat iemand met jouw droomstad aan de haal gaat?";
		Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);
		 
		 // get the split and size of the button bit!!
		layout.split_x=1040;
		layout.split_w=Hybrid.width-layout.split_x;
		layout.button_margin_y=114;
		 
		// create button verder
		w=Hybrid.graphics_manifest['buttons'].ss['continue'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['continue'][0][3];
		x=layout.split_x+layout.split_w/2-w/2;
		y=637;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"continue","button_continue",handleButtonsresume_game);

		x=148;
		y=78; // position to left.
		w=810;
		h=617; 
		layout.logo=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxImage(layout.logo,"start_logo"); // this should be set to cover all, but that's for later!
		Hybrid.setBoxAlpha(layout.logo,0.85); // alpha added
	
		// now create the controls for new game..
		w=layout.split_w+10; // we want the bevel to look right!
		h=94;
		x=layout.split_x;
		y=345; //Hybrid.height-h;
		layout.naam=Hybrid.createBox(layout.buttons,x,y,w,h)
		Hybrid.setBoxColor(layout.naam,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.naam,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.naam_text=Hybrid.createTextInput(layout.naam,40,10,w-80,h-20,fonts.head,palet.pale_grey,"left",fontsz.edit,"naam");
		// auto fill met restored values;
		if(resume_game.form.naam!="")
		{
			Hybrid.setText(layout.naam_text,resume_game.form.naam);
			Hybrid.setTextBoxColor(layout.naam_text,palet.dark_blue);
		}

		//Hybrid.setTextEditable(layout.naam_text,true);// hoeft niet input type!

		
		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+1*layout.button_margin_y; //Hybrid.height-h;
		layout.wachtwoord=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.wachtwoord,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.wachtwoord,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.wachtwoord_text=Hybrid.createTextInput(layout.wachtwoord,40,10,w-80,h-20,fonts.head,palet.pale_grey,"left",fontsz.edit,"wachtwoord","password");
		//Hybrid.setTextEditable(layout.wachtwoord_text,true);// hoeft niet input type!
		
		
		x=layout.split_x;
		y=900; 
		w=layout.split_w+10;
		h=300;
//		layout.feedback=Hybrid.createBox(layout.buttons,x,y,w,h);
		layout.feedback_text=Hybrid.createTextBox(layout.buttons,x,y,w,h,fonts.head,palet.dark_red,"center",fontsz.edit,"");
		Hybrid.setBoxColor(layout.feedback_text,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setVisible(layout.feedback_text,false); // this should be set to cover all, but that's for later!
		
		// we created everything, now set the listener for changes!
		//Hybrid.textChangeListener=resume_game_TextChangeListener; // hoeft niet input type!
	}
	
	
	function resume_game_storeStuff()
	{
		resume_game.form.naam=Hybrid.getText(layout.naam_text);
		resume_game.form.wachtwoord=Hybrid.getText(layout.wachtwoord_text);

		Hybrid.debugmessage("resume_game.form.naam:"+resume_game.form.naam);
		Hybrid.debugmessage("resume_game.form.wachtwoord:"+resume_game.form.wachtwoord);

		// do ajax call!
		var data={};
		data.naam=resume_game.form.naam;
		data.wachtwoord=resume_game.form.wachtwoord;
		Hybrid.getVars("login.php",data,resume_game_ServerCallback,resume_game_ServerFail)
	}
	function resume_game_ServerCallback(response)
	{
		var all;
		if(response.succes=="1")
		{
			var data={};
			data.succes=1;
			data.stat="login";
			data.user=response.user.naam;
			Hybrid.setVars("add_stat.php", data);
			
			Hybrid.debugmessage("you are in, we have data now.. save it for later!");
			// old..
//			quiz.questions=response.questions; // we have that!
//			Hybrid.setCookie("nr_of_questions", quiz.questions.length); // remember it for on map!
//			quiz.question_order=response.user.question_order; // saved it for later!
			
			quiz.questions=response.questions; // we have that!
			user.data=response.user; // we have this..
			quiz.nr_of_questions=quiz.questions.length; 
			quiz.question_order=response.user.question_order; // saved it for later!
			
			for(var i=0;i<quiz.question_order.length;i++)
			{
				if(quiz.question_order[i]>=quiz.questions.length)
				{
					quiz.question_order[i]=quiz.questions.length-1;
				}
			}
			
			quiz_ShowQuestionData();
			
			// show it for debugging!
			for(all in response)
			{
				Hybrid.debugmessage("server response to login: "+all+"="+response[all]);
			}
			for(all in response.user)
			{
				Hybrid.debugmessage("server response.user to login "+all+"="+response.user[all]);
			}
			// keep stuff for next time..
			Hybrid.debugmessage("keep wachtwoord and name: "+response.user.naam);
			Hybrid.setCookie("user_wachtwoord",resume_game.form.wachtwoord);
			Hybrid.setCookie("user_naam",response.user.naam); // keep thw cleaned name for autologin via init!
			/*Hybrid.debugmessage("cleaned username: "+response.user.naam);
			Hybrid.setCookie("user_progress",response.user.progress);
			Hybrid.setCookie("user_punten",response.user.punten);
			Hybrid.setCookie("user_stenen",response.user.stenen);
			Hybrid.setCookie("question_order",response.user.question_order.join("_"));
			Hybrid.setCookie("user_hints",response.user.hints.join("_"));
			Hybrid.setCookie("user_plaats",response.user.plaats); // this determins what to load in map when we come back unexpectedly (so not via login!)..
.*/

			// we know the place, so add some houses to the list, we have to load these things dynamically from CMS.
			Hybrid.debugmessage("user komt uit plaats: "+response.user.plaats+", dus laad de juiste huizen achtergrond..");
			switch(parseInt(response.user.plaats))
			{
				case 1:
					Hybrid.graphics_manifest['houses1']={src:"getCMSImage.php?id=houses&img=steenbergen",w:4904,h:2048,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses2']={src:"getCMSImage.php?id=houses&img=deheen",w:4400,h:2052,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses3']={src:"getCMSImage.php?id=houses&img=nieuwvossemeer",w:3200,h:2048,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses4']={src:"getCMSImage.php?id=houses&img=kruisland",w:2672,h:1708,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses5']={src:"getCMSImage.php?id=houses&img=dinteloord",w:3665,h:2868,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses6']={src:"getCMSImage.php?id=houses&img=welberg",w:2461,h:1231,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
			}
			
			if(parseInt(response.user.progress)>=response.user.question_order.length)
			{
				// just goto the map you have done the work!
				//map.init();
			}else
			{	
				//wwjw.page_extras="show_welcome"; // defined in globals, means show popup on top of map!
				//	map.init();
			}
			quiz.init();
			Hybrid.playSound("right");
			
		}else
		{
			var data={};
			data.succes=0;
			data.stat="login";
			data.error=response.error;
			data.errorcode=response.errorcode;
			Hybrid.setVars("add_stat.php", data);

			for(all in response)
				Hybrid.debugmessage(all+"="+response[all]);
			Hybrid.playSound("wrong");
			Hybrid.showWarning("Combinatie naam en wachtwoord niet gevonden.");
			start.init();

	
		}
	}
	function resume_game_ServerFail(response)
	{
		//window.alert("Communication with the server interupted, try again later.");
		Hybrid.setText(layout.feedback_text,"Communication with the server interupted,<br> try again later.");
		Hybrid.playSound("wrong");
		Hybrid.setVisible(layout.feedback_text,true); // this should be set to cover all, but that's for later!

		Hybrid.debugmessage("Request failed..");
		var data={};
		data.succes=0;
		data.stat="login_serverfail";
		data.response=response;
		Hybrid.setVars("add_stat.php", data);
	}
	function handleButtonsresume_game(label)
	{
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		switch(label)
		{
			case "button_continue":
				resume_game_storeStuff();
			break;				
			case "button_close_popup":
				// hide popup layer!
				Hybrid.removeElement(layout.popup);
				Hybrid.restoreButtonContext();
			break;
			default:
				Hybrid.debugmessage("handleButtonsresume_game: "+label);
		}
	}
	

