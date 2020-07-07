	//reset_game----------------------------------
	var reset_game={};
	reset_game.init=initreset_game;
	reset_game.framecounter=0;
	reset_game.state="just_started";
	reset_game.form={};
	reset_game.cms_data={};
	
	// extra pagina om te kunnen kiezen welke game categorie je wilt.
	reset_game.cms_data.school=[
							  {label:"De Nieuwe Veste",id:"sdif4356srhe"},
							  {label:"Maria Regina",id:"sdiofhoe"},
							  {label:"Gummarusschool",id:"sd56pfioei"},
							  {label:"Merijntje",id:"idfhrs"},
							  {label:"Regenboog, De",id:"sd83ls"},
							  {label:"De zonneberg",id:"dfoihsue"},
							  {label:"Petrus en Paulusschool",id:"78sd3ogosd"},
							  {label:"Groen van Prinsterer",id:"98sdyvj"},
							  {label:"Pius X",id:"fgf45uh"},
							  {label:"niet van toepassing",id:"666"}];
	reset_game.cms_data.groep=[{label:"Groep 1",id:1},{label:"Groep 2",id:2},{label:"Groep 3",id:3},{label:"Groep 4",id:4},{label:"Groep 5",id:5},{label:"Groep 6",id:6},{label:"Groep 7",id:7},{label:"Groep 8",id:8},{label:"niet van toepassing",id:"666"}];
	reset_game.cms_data.category=cms.tags;
	for(var i=reset_game.cms_data.category.length-1;i>=0;i--)
	{
		if(typeof(reset_game.cms_data.category[i].questions)=="undefined")
		{
			reset_game.cms_data.category.splice(i,1); // remove it!
		}else{
			if(reset_game.cms_data.category[i].questions<30)
			{
				reset_game.cms_data.category.splice(i,1); // remove it!
			}else{
				reset_game.cms_data.category[i].label=reset_game.cms_data.category[i].label.split(" (")[0];
				reset_game.cms_data.category[i].label+=" (30/"+reset_game.cms_data.category[i].questions+" vragen)";
			}
		}
	}
	reset_game.cms_data.category.push({label:"Alles",id:-1});
	// copy it from CMS.tags set in script at top of page.php (the gamepage)
	
	reset_game.cms_data.plaats=[{label:"Steenbergen",id:1},{label:"De Heen",id:2},{label:"Nieuw Vossemeer",id:3},{label:"Kruisland",id:4},{label:"Dinteloord",id:5},{label:"Welberg",id:6}];
	
	function initreset_game()
	{
		
				Hybrid.debugmessage("user.data.naam:"+user.data.naam);
		Hybrid.debugmessage("user.data.wachtwoord:"+user.data.wachtwoord);

		
		//Hybrid.setCookie("wwjw_disclaimer","0"); // I want to see it to debug it, uncomment this!
		if(Hybrid.getCookie("wwjw_disclaimer")!="1")
		{
			Hybrid.debugmessage("you have not seen the disclaimer yet!");
			user.refer_to="new";
			disclaimer.init();
		}else
		{
			var data={};
			data.page="reset_game";
			data.stat="page";
			Hybrid.setVars("add_stat.php", data);
		
			Hybrid.playSound("next_question");
			Hybrid.debugmessage("START  called!");
			Hybrid.setCookie("lastpage","reset_game");
			
			// get some stuff from the cookie!
			reset_game.form.school=user.data.school;
			reset_game.form.groep=user.data.groep;
			reset_game.form.plaats=user.data.plaats;
			reset_game.form.category=user.data.category;
			
			Hybrid.resizeFunction=reset_gameHandleResize;
			reset_gameHandleResize(); // this builds the page 
		}
	}
	function reset_game_TextChangeListener()
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
					Hybrid.setVisible(layout.feedback_text,false); 
			break;
			default:
			 Hybrid.debugmessage("unknown textChange:"+Hybrid.lastTextboxChange);
		}
	}
	function reset_gameHandleResize()
	{
		Hybrid.debugmessage("pagereset_game build up:"+Hybrid.width+"x"+Hybrid.height);
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
		string+="<h1>Weet waar je woont!</h1>";
		string+="Hier kun je kiezen een andere categorie te spelen. Kun je niet beslissen? Dan kies je toch gewoon 'alles'!<br><br>Ook kun je eventueel je plaats, school of groep wijzigen. Voor als je over gaat of verhuisd.";
		Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);
		 
		 
		 // get the split and size of the button bit!!
		layout.split_x=1040;
		layout.split_w=Hybrid.width-layout.split_x;
		layout.button_margin_y=114;
		 
		// create button verder
		w=Hybrid.graphics_manifest['buttons'].ss['continue'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['continue'][0][3];
		x=layout.split_x+layout.split_w/2-w/2;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"continue","button_continue_reset_game",reset_gameHandleButtons);

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

		layout.naam=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.naam,palet.pale_green); // this should be set to cover all, but that's for later!
		layout.naam_text=Hybrid.createTextBox(layout.naam,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit-3,"naam: "+user.data.naam);
		Hybrid.setBoxColor(layout.naam_text,palet.pale_green); // this should be set to cover all, but that's for later!

		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+1*layout.button_margin_y; //Hybrid.height-h;
		layout.wachtwoord=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.wachtwoord,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.wachtwoord,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.wachtwoord_text=Hybrid.createTextInput(layout.wachtwoord,40,10,w-80,h-20,fonts.head,palet.pale_grey,"left",fontsz.edit,"wachtwoord");

		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+2*layout.button_margin_y; //Hybrid.height-h;
		layout.school=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.school,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.school,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.school_text=Hybrid.createTextBox(layout.school,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit,"- school -");
		Hybrid.makeButton(layout.school_text, "button_dropdown_school", reset_gameHandleButtons); // also right if they hit the text itself!
		if(reset_game.form.school!=-1)
		{
			// reflect this in the label!
			Hybrid.debugmessage("reset_game.form.school"+reset_game.form.school);
			var label=reset_game_GetLabelFromId("school",reset_game.form.school);
			Hybrid.setText(layout.school_text,label);
		}
		// create the listbox button
		w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		x=Hybrid.width-w;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"dropdown","button_dropdown_school",reset_gameHandleButtons);
		
		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+3*layout.button_margin_y; //Hybrid.height-h;
		layout.groep=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.groep,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.groep,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.groep_text=Hybrid.createTextBox(layout.groep,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit,"- groep -");
		Hybrid.makeButton(layout.groep_text, "button_dropdown_groep", reset_gameHandleButtons); // also right if they hit the text itself!
		if(reset_game.form.groep!=-1)
		{
			// reflect this in the label!
			Hybrid.debugmessage("reset_game.form.groep"+reset_game.form.groep);
			var label=reset_game_GetLabelFromId("groep",reset_game.form.groep);
			Hybrid.setText(layout.groep_text,label);
		}
		
		
		// create the listbox button
		w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		x=Hybrid.width-w;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"dropdown","button_dropdown_groep",reset_gameHandleButtons);
	
		// plaats
		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+4*layout.button_margin_y; //Hybrid.height-h;
		layout.plaats=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.plaats,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.plaats,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.plaats_text=Hybrid.createTextBox(layout.plaats,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit,"- plaats -");
		Hybrid.makeButton(layout.plaats_text, "button_dropdown_plaats", reset_gameHandleButtons); // also right if they hit the text itself!
		if(reset_game.form.plaats!=-1)
		{
			// reflect this in the label!
			Hybrid.debugmessage("reset_game.form.plaats"+reset_game.form.plaats);
			var label=reset_game_GetLabelFromId("plaats",reset_game.form.plaats);
			Hybrid.setText(layout.plaats_text,label);
		}
		// create the listbox button
		w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		x=Hybrid.width-w;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"dropdown","button_dropdown_plaats",reset_gameHandleButtons);
		
		// category
		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+5*layout.button_margin_y; //Hybrid.height-h;
		layout.category=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.category,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.category,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.category_text=Hybrid.createTextBox(layout.category,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit,"- Onderwerpen -");
		Hybrid.makeButton(layout.category_text, "button_dropdown_category", reset_gameHandleButtons); // also right if they hit the text itself!
		if(reset_game.form.category!=-1)
		{
			// reflect this in the label!
			Hybrid.debugmessage("reset_game.form.category"+reset_game.form.category);
			var label=reset_game_GetLabelFromId("category",reset_game.form.category);
			Hybrid.setText(layout.category_text,label);
		}
		// create the listbox button
		w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		x=Hybrid.width-w;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"dropdown","button_dropdown_category",reset_gameHandleButtons);
		
		// precreate the feedback..
		x=layout.split_x;
		y=345+6*layout.button_margin_y; //Hybrid.height-h;
		w=layout.split_w+10;
		h=90;
//		layout.feedback=Hybrid.createBox(layout.buttons,x,y,w,h);
		layout.feedback_text=Hybrid.createTextBox(layout.buttons,x,y,w,h,"sans-serif",palet.dark_red,"center",30,"");
		Hybrid.setBoxColor(layout.feedback_text,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setVisible(layout.feedback_text,false); // this should be set to cover all, but that's for later!
		
		// we created everything, now set the listener for changes!
		Hybrid.textChangeListener=reset_game_TextChangeListener;
	}
	function reset_game_GetLabelFromId(datagroep,id)
	{
		var i;
		var label="---";
		for(i=0;i<reset_game.cms_data[datagroep].length;i++)
		{
			if(reset_game.cms_data[datagroep][i].id==id)
			{
				return reset_game.cms_data[datagroep][i].label;
			}
		}
	}
	function reset_game_createPopupList(label)
	{
		Hybrid.saveButtonContext(); // we are going to need a seperate callback!
		var dataprovider=reset_game.cms_data[label];
		Hybrid.debugmessage("createPopupList"+label+" "+dataprovider.length);
		
		layout.popup=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.popup,palet.pale_grey);
		
		// create a title box for the popup!
		var w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		var h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		var x=Hybrid.width-w;
		var y=0;
		layout.viewport_y=h;
		layout.viewport_h=Hybrid.height-layout.viewport_y;
		
		layout.popup_title=Hybrid.createBox(layout.popup,0,0,Hybrid.width,h);
		Hybrid.setBoxColor(layout.popup_title,palet.dark_blue);
		
		w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		x=Hybrid.width-w;
		y=0;
		Hybrid.createSpriteButton(layout.popup_title,x,y,w,h,'buttons',"dropdown","button_close_popup",reset_gameHandleButtons_popup);
		// create a scrollable box inside the layer!
		layout.popup_scroll=Hybrid.createBox(layout.popup,0,layout.viewport_y,Hybrid.width,layout.viewport_h);
		Hybrid.setBoxColor(layout.popup_scroll,palet.pale_grey);
		//Hybrid.setBoxScrollable(layout.popup_scroll,false,true);
		// make it closable!
		
//		Hybrid.debugmessage("height of viewport: "+layout.viewport_h); // 1265
		
		var i,margin=150,rows=1,w=Hybrid.width,row_len=9;
		if(dataprovider.length<row_len)
		{
			margin=layout.viewport_h/dataprovider.length;
		}else
		{
			// there's more than one row needed!
			margin=layout.viewport_h/row_len;
			if(Math.floor(dataprovider.length/row_len)==(dataprovider.length/row_len))
			{
				rows=Math.floor(dataprovider.length/row_len);
			}else
			{
				rows=Math.floor(dataprovider.length/row_len)+1;
			}
			w=Hybrid.width/rows;
			Hybrid.debugmessage("button width:"+w);
			
		}
		for(i=0;i<dataprovider.length;i++)
		{
			// create the list!
			//layer,x,y,w,h,tekst,label,cb,fontsz)
			var x=Math.floor(i/row_len)*w;
			var y=(i%row_len)*margin;

			Hybrid.createTextButton(layout.popup_scroll,x,y,w,margin,dataprovider[i].label,"list_"+label+"_"+dataprovider[i].id,reset_gameHandleButtons_popup,50);
		}
	}
	function reset_gameHandleButtons_popup(label)
	{
		//Hybrid.makePageSelectable();
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		if(label=="button_close_popup")
		{
			Hybrid.removeElement(layout.popup);
			Hybrid.restoreButtonContext();
		}else
		{
			if(label.substr(0,4)=="list")
			{
				Hybrid.debugmessage("total label:"+label);
				var parts=label.split("_");
				var field=parts[1];
				var id=parts[2];
				Hybrid.debugmessage("field:"+field+" , "+reset_game.cms_data[field].length);
				var i;
				for(i=0;i<reset_game.cms_data[field].length;i++)
				{
					if(reset_game.cms_data[field][i].id==id)
					{
						label=reset_game.cms_data[field][i].label;
					}
				}
				Hybrid.debugmessage("id:"+id);
				Hybrid.debugmessage("label:"+label);
				// set it!
				switch(field)
				{
					case "school":
						Hybrid.setText(layout.school_text,label);
						reset_game.form.school=id;
						Hybrid.debugmessage("school set to: "+reset_game.form.school);
					break;
					case "groep":
						Hybrid.setText(layout.groep_text,label);
						reset_game.form.groep=id;
						Hybrid.debugmessage("groep set to: "+reset_game.form.groep);
					break;
					case "plaats":
						Hybrid.setText(layout.plaats_text,label);
						reset_game.form.plaats=id;
						Hybrid.debugmessage("plaats set to: "+reset_game.form.plaats);
					break;
					case "category":
						Hybrid.setText(layout.category_text,label);
						reset_game.form.category=id;
						Hybrid.debugmessage("category set to: "+reset_game.form.category);
					break;
				}
				Hybrid.removeElement(layout.popup);
				Hybrid.restoreButtonContext();
			}else
			{
				// ignore the buttonpress, iPad does that sometimes..
				// fire multiple events for one press.
				
			}
		}
	}
	function reset_game_storeStuff()
	{
		Hybrid.debugmessage("validate Form");
		Hybrid.setVisible(layout.feedback_text,false); // hide to show processing... 
		
		reset_game.form.wachtwoord=Hybrid.getText(layout.wachtwoord_text);
		
		var error="";
		if(reset_game.form.plaats=="undefined" || reset_game.form.plaats==-1)
		{
			error="Vul een plaats in!";
		}
		if(reset_game.form.groep=="undefined" || reset_game.form.groep==-1)
		{
			error="Vul een groep in!";
		}
		if(reset_game.form.school=="undefined" || reset_game.form.school==-1)
		{
			error="Vul een school in!";
		}

		if(reset_game.form.school=="undefined" || reset_game.form.school==-1)
		{
			error="Vul een school in!";
		}
		if(reset_game.form.wachtwoord=="undefined" || reset_game.form.wachtwoord==-1)
		{
			error="Vul een wachtwoord in!";
		}

		Hybrid.debugmessage("reset_game.form.groep (id):"+reset_game.form.groep);
		Hybrid.debugmessage("reset_game.form.school (id):"+reset_game.form.school);
		Hybrid.debugmessage("reset_game.form.groep (id):"+reset_game.form.groep);
		Hybrid.debugmessage("reset_game.form.plaats (id):"+reset_game.form.plaats);

		Hybrid.debugmessage("stored user name: "+user.data.naam);
		Hybrid.setCookie("user_school",reset_game.form.school);
		Hybrid.setCookie("user_groep",reset_game.form.groep);
		Hybrid.setCookie("user_plaats",reset_game.form.plaats); // this determins what to load in map!
		
		if(error=="")
		{
			
			// also get a request to the server to create a new user....?
			// we might want to tell them something about that, but we'll do it with a window.alert.
			// do ajax call!
			var data={};
			data.naam=user.data.naam;
			data.wachtwoord=reset_game.form.wachtwoord;
			data.school=reset_game.form.school;
			data.groep=reset_game.form.groep;
			data.plaats=reset_game.form.plaats;
			data.category=reset_game.form.category;
			console.log(JSON.stringify(data));
			Hybrid.getVars("reset_game.php",data,reset_game_ServerCallback,reset_game_ServerFail)
		}else
		{
			// validation failed..
			Hybrid.setText(layout.feedback_text,error);
			Hybrid.playSound("wrong");
			Hybrid.setVisible(layout.feedback_text,true); 
			Hybrid.debugmessage("Validation failed..");
		}
		
//		window.alert("Communication with the server interupted, try again later.");
	}
	function reset_game_ServerCallback(response)
	{
		var all;
		if(response.succes=="1")
		{
			Hybrid.playSound("right");

			
			var data={};
			data.succes=1;
			data.stat="reset_game";
			data.user=response.user.naam;
			Hybrid.setVars("add_stat.php", data);

			//Hybrid.setCookie("user_naam",user.data.naam);
			//Hybrid.setCookie("user_school",reset_game.form.school);
			//Hybrid.setCookie("user_punten",0);
			//Hybrid.setCookie("user_stenen",0);
			//Hybrid.setCookie("user_progress",0);
			//Hybrid.setCookie("user_plaats",reset_game.form.plaats);			
			
			// we also get the questions
			// AND we get the question_order..
			// AND the houses and stuff.

//			if(typeof(response.questions)==="undefined")
//			{
//				Hybrid.throwError("Server configuration error: wwjw_reset_game.js, line 456");
//			}
//			quiz.questions=response.questions; // we have that!
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
			// show it for debugging!
			for(all in response)
			{
				Hybrid.debugmessage("server response to new game: "+all+"="+response[all]);
			}
			for(all in response.user)
			{
				Hybrid.debugmessage("server response.user to new game "+all+"="+response.user[all]);
			}
			// keep stuff for next time..
			Hybrid.debugmessage("keep wachtwoord and name: "+response.user.naam);
			Hybrid.setCookie("user_wachtwoord",user.data.wachtwoord);
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
			//wwjw.page_extras="show_welcome"; // defined in globals, means show popup on top of map!
			//map.init();
			quiz.init();
			
		}else
		{
		
			var data={};
			data.succes=0;
			data.stat="reset_game";
			Hybrid.setVars("add_stat.php", data);

			Hybrid.setText(layout.feedback_text,"Mislukt: "+response.error);
			Hybrid.setVisible(layout.feedback_text,true); // this should be set to cover all, but that's for later!
			Hybrid.playSound("wrong");
			Hybrid.debugmessage("Server reports errorcode:"+response.errorcode+" "+response.error);
		}
	}
	function reset_game_ServerFail(response)
	{
		var data={};
		data.succes=0;
		data.stat="reset_game";
		Hybrid.setVars("add_stat.php", data);
			
		//window.alert("Communication with the server interupted, try again later.");
		Hybrid.setText(layout.feedback_text,"Server bezet, probeer later");
		Hybrid.setVisible(layout.feedback_text,true); // this should be set to cover all, but that's for later!
		Hybrid.playSound("wrong");
		Hybrid.debugmessage("Request failed..");
		
	}	
	function reset_gameHandleButtons(label)
	{
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		switch(label)
		{
			case "button_continue_reset_game":
				reset_game_storeStuff();
			break;				
			case "button_dropdown_school":
//				setTimeout(reset_game_createPopupList,500,"school");
				reset_game_createPopupList("school");
			break;				
			case "button_dropdown_groep":
//				setTimeout(reset_game_createPopupList,500,"groep");
				reset_game_createPopupList("groep");
			break;				
			case "button_dropdown_plaats":
				reset_game_createPopupList("plaats");
			break;				
			case "button_dropdown_category":
				reset_game_createPopupList("category");
			break;				
			case "button_close_popup":
				// hide popup layer!
				Hybrid.removeElement(layout.popup);
				Hybrid.restoreButtonContext();
			break;
			default:
				Hybrid.debugmessage("reset_gameHandleButtons: "+label);
		}
	}
	

