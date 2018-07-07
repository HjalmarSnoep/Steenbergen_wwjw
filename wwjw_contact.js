	//CONTACT----------------------------------
	var contact={};
	contact.init=initContact;
	contact.framecounter=0;
	contact.buttons_Alpha=0;
	contact.state="just_started";
	contact.hasPopup=false;
	
	function initContact()
	{
		var data={};
		data.page="contact";
		data.stat="page";
		Hybrid.setVars("add_stat.php", data);

		Hybrid.debugmessage("START  called!");
		Hybrid.setCookie("lastpage","contact");

		Hybrid.resizeFunction=handleResizeContact;
		handleResizeContact(); // this builds the page 
	}
	function handleResizeContact()
	{
		Hybrid.debugmessage("pageContact build up:"+Hybrid.width+"x"+Hybrid.height);
		Hybrid.erasePage();
		layout={}; // erase any old layout!
		helpers_createStartSchermBack(); // cerateas a layer layout.back!

		
		// now create all buttons and elements
		layout.buttons=Hybrid.createLayer();
		
		var w,h,x,y,f,tx,ty,string;
		w=900;
		h=1020;
		x=100;
		y=Hybrid.height-h;
		layout.wit_vlak=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.wit_vlak,"#c9e5b6"); // this should be set to cover all, but that's for later!
		Hybrid.setBoxAlpha(layout.wit_vlak,0.80); // alpha added		
		
		x=100;
		y=170;
		w=w-200;
		h=700;
		string="";
		string+="Dit spel is tot stand gekomen op initiatief van het Platform Kunst en Cultuur Steenbergen. Talloze vrijwilligers, al dan niet via de heemkundige kringen,  de stichting stadsarcheologie of de dorpsraden, hebben bijgedragen aan de inhoud van dit spel. Het spel is financieel mede mogelijk gemaakt door de Kiwanis, Rotary Steenbergen en Kies Best, Kies West en Gemeente Steenbergen.";
//		string+="Teksten: <a href='http://www.dasklaretaal.nl' onClick='handleButtonsContact(\"button_dasklaretaal\")' target='_blank'>Dasklare Taal</a><br>";
//		string+="Ontwerp en illustraties: <a href='http://www.colorsandshapes.nl' target='_blank'>colorsandshapes.nl</a><br>";
//		string+="Ontwikkeling: <a href='http://www.snoepgames.nl' target='_blank'>www.Snoepgames.nl</a><br>";
//		string+="<br>";
//		string+="Met dank aan: .......<br>";
//		string+="<br>";
//		string+="<br>";
//		string+="<h1>Heb je vragen of suggesties?</h1>";
//		string+="Telefoon 06 - 41311612";
//		string+="<h1>Werkt er iets niet:</h1>";
//		string+="<a href='"+Hybrid.supportlink+Hybrid.app_id+"' target='_top'>Meld hier een probleem</a>";
		Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);

		var link_factor=1.4;
		 // put some buttons over this, to make it possible to connect on an iPad. Don't know why it wouldn't but hey..
		 y+=320;
		 w=Hybrid.graphics_manifest['buttons'].ss['dasklaretaal'][0][2]*link_factor;
		 h=Hybrid.graphics_manifest['buttons'].ss['dasklaretaal'][0][3]*link_factor;
   		 Hybrid.createSpriteButton(layout.wit_vlak,x,y,w,h,'buttons',"dasklaretaal","button_dasklaretaal",handleButtonsContact);
		 
		 y+=60;
		 w=Hybrid.graphics_manifest['buttons'].ss['shapesandsounds'][0][2]*link_factor;
		 h=Hybrid.graphics_manifest['buttons'].ss['shapesandsounds'][0][3]*link_factor;
   		 Hybrid.createSpriteButton(layout.wit_vlak,x,y,w,h,'buttons',"shapesandsounds","button_shapesandsounds",handleButtonsContact);
		 
		 y+=60;
		 w=Hybrid.graphics_manifest['buttons'].ss['snoepgames'][0][2]*link_factor;
		 h=Hybrid.graphics_manifest['buttons'].ss['snoepgames'][0][3]*link_factor;
   		 Hybrid.createSpriteButton(layout.wit_vlak,x,y,w,h,'buttons',"snoepgames","button_snoepgames",handleButtonsContact);

		 y+=60;
		 w=700;
		 h=200;
 		 string="Mocht u opmerkingen hebben over het spel dan kunt u contact opnemen via";
		 Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);

		 y+=70;
		 w=Hybrid.graphics_manifest['buttons'].ss['admin'][0][2]*link_factor;
		 h=Hybrid.graphics_manifest['buttons'].ss['admin'][0][3]*link_factor;
   		 Hybrid.createSpriteButton(layout.wit_vlak,x,y,w,h,'buttons',"admin","button_admin",handleButtonsContact);

		 y+=70;
		 w=700;
		 h=200;
 		 string="Voor technische problemen";
		 Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);

		 y+=40;
		 w=Hybrid.graphics_manifest['buttons'].ss['problem'][0][2];
		 h=Hybrid.graphics_manifest['buttons'].ss['problem'][0][3];
   		 Hybrid.createSpriteButton(layout.wit_vlak,x,y,w,h,'buttons',"problem","button_problem",handleButtonsContact);
		 
		// create menubutton contact
		//w=Hybrid.graphics_manifest['buttons'].ss['contact'][0][2];
		//h=Hybrid.graphics_manifest['buttons'].ss['contact'][0][3];
		//x=Hybrid.width-w-60;
		//y=60;
		//Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"contact","button_contact",handleButtonsContact);
		
		// create button stoppen
		w=Hybrid.graphics_manifest['buttons'].ss['back'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['back'][0][3];
		x=Hybrid.width-w-60;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"back","button_back",handleButtonsContact);
		// create button new_game 
		//w=Hybrid.graphics_manifest['buttons'].ss['new_game'][0][2];
		//h=Hybrid.graphics_manifest['buttons'].ss['new_game'][0][3];
		//x=60;
		//y=Hybrid.height-h-60;
		//Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"new_game","button_new_game",handleButtonsContact);

		x=162;
		y=172; // position to left.
		w=405;
		h=301; 
		layout.logo=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxImage(layout.logo,"start_logo"); // this should be set to cover all, but that's for later!
		Hybrid.setBoxAlpha(layout.logo,0.85); // alpha added
		
	
	}
	function handleButtonsContact(label)
	{
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		switch(label)
		{
			case "button_problem":
				window.open(
				  Hybrid.supportlink+Hybrid.app_id,
				  '_blank' // <- This is what makes it open in a new window.
				);
			break;			
			case "button_admin":
				window.open(
				  "http://spel.kijkopsteenbergen.nl/contact",
				  '_blank' // <- This is what makes it open in a new window.
				);
			break;				
			case "button_dasklaretaal":
				window.open(
				  "http://www.dasklaretaal.nl",
				  '_blank' // <- This is what makes it open in a new window.
				);
			break;							
			case "button_shapesandsounds":
				window.open(
				  "http://www.colorsandshapes.nl",
				  '_blank' // <- This is what makes it open in a new window.
				);
			break;							
			case "button_snoepgames":
				window.open(
				  "http://www.snoepgames.nl",
				  '_blank' // <- This is what makes it open in a new window.
				);
			break;				
			
			case "button_back":
				start.init();
			break;				
			case "button_continue_game":
				//continue_game.init();
			break;				
			case "button_new_game":
				//new_game.init();
			break;		
			default:
				Hybrid.debugmessage("handleButtonsContact: "+label);
		}
	}
	

