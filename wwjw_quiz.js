	//quiz----------------------------------
	var quiz={};
	quiz.init=initquiz;
	quiz.framecounter=0;
	quiz.bar_height=80;
	quiz.button_height=194;
	
	// these should be loaded, I think.. Or pushed as extrenal javascript??
	
	// question can have:
	// question title
	// question body
	// question media
	// answer body
	// answer right body
	// answer wrong body
	// hint body
	// hint title
	// user used hint
	// user answer time!
	
	quiz.questions=[];
	quiz.question_order=[];
	/*
		{qt:"Twee zeemeerminnen",qb:"Dit is de vraag",ab:["a1","a2","a3","a4"],qm:"img:test.jpg",ar: 0, us:false, ht:"hint title",hb:"hint body",uh:false, uat:0}, 
	{qt:"Twee zeemeerminnen",qb:"Dit is de vraag",ab:["a1","a2","a3","a4"],qm:"img:test.jpg",ar: 0, us:false, ht:"hint title",hb:"hint body",uh:false, uat:0}, 
	{qt:"Twee zeemeerminnen",qb:"Dit is de vraag",ab:["a1","a2","a3","a4"],qm:"img:test.jpg",ar: 0, us:false, ht:"hint title",hb:"hint body",uh:false, uat:0}, 
	{qt:"Twee zeemeerminnen",qb:"Dit is de vraag",ab:["a1","a2","a3","a4"],qm:"img:test.jpg",ar: 0, us:false, ht:"hint title",hb:"hint body",uh:false, uat:0}
	*/
	quiz.current_question=0;
	quiz.state="just_started";
	
	function initquiz()
	{
		Hybrid.debugmessage("START Quiz called! game_name"+Hybrid.getCookie("user_naam"));
		Hybrid.setCookie("lastpage","quiz");
		
		if(map.shop.length==0)
			map_fillShop(); // this will load the houses and their prices!
	
		quiz.selected_answer=-1;// right now nothing is selected

		var data={};
		data.page="quiz";
		data.stat="page";
		data.user=user.data.naam;
		Hybrid.setVars("add_stat.php", data);

		
		// open the questions!
		// do ajax call!
		if(quiz.question_order.length==0)
		{
			var i=0,order=Hybrid.getCookie("question_order").split("_")
			for(i=0;i<order.length;i++)
				quiz.question_order[i]=parseInt(order[i]);
		}
		if(quiz.questions.length==0)
		{
			Hybrid.debugmessage("no questions yet, need to be loaded!");
			Hybrid.showWarning("this shouldn't happen!");
/*			var data={};
			data.naam=Hybrid.getCookie("user_naam"); // also get user details!
			data.wachtwoord=Hybrid.getCookie("user_wachtwoord");
			data.ck=new Date().getTime();
			Hybrid.debugmessage("login.php?naam="+data.naam+"&wachtwoord="+data.wachtwoord);
			Hybrid.getVars("login.php",data,quiz_LoadServerCallback,quiz_LoadServerFail);*/
		}else
		{
			Hybrid.setCookie("nr_of_questions", quiz.questions.length); // remember it for on map!
			Hybrid.debugmessage("We have questions from the login.." +quiz.questions.length);
			// loaded them on login, so don't load again!
			Hybrid.resizeFunction=handleResizeQuiz;
			handleResizeQuiz(); // this builds the page */
		}
	}
	function quiz_ShowQuestionData()
	{
		Hybrid.playSound("next_question");
		Hybrid.debugmessage("quiz.questions : "+quiz.questions.length);
		var i;
		for(i=0;i<quiz.questions.length;i++)
		{
			Hybrid.debugmessage("------------------------------quiz.question: "+i);
			var all;
			for(all in quiz.questions[i])
			{
				Hybrid.debugmessage(all+"="+quiz.questions[i][all]);
			}
		}
	}
	function quiz_LoadServerCallback(response)
	{
		var all;
		Hybrid.debugmessage("quiz_LoadServerCallback");
		if(parseInt(response.succes)!=1)
		{
			Hybrid.showWarning("Server geeft error:"+response.error+" ("+response.errorcode+"), corrupt spel.");
			Hybrid.debugmessage("Server geeft error:"+response.error+" ("+response.errorcode+"), corrupt spel.");
			
			for(all in response)
				Hybrid.debugmessage("response["+all+"]="+response[all]);
			
			// go to login again!
			start.init();
			return;
		}
		quiz.questions = response.questions;
		
		Hybrid.debugmessage("got a user, i think..");
		for(all in response.user)
		{
			Hybrid.debugmessage("server response.user to get_questions "+all+"="+response.user[all]);
		}
		// we also get some stuff about the user!
		// we should put this in the cookie..
		//Hybrid.setCookie("user_progress",response.user.progress);
		//Hybrid.setCookie("user_punten",response.user.punten);
		//Hybrid.setCookie("user_stenen",response.user.stenen);
		//Hybrid.setCookie("question_order",response.user.question_order.join("_"));
		//Hybrid.setCookie("user_hints",response.user.hints.join("_"));
		//Hybrid.setCookie("user_plaats",response.user.plaats); // this determins what to load in map when we come back unexpectedly (so not via login!)..
			
		Hybrid.setCookie("nr_of_questions", quiz.questions.length); // remember it for on map!

		quiz_ShowQuestionData();
		
		// check if the questions arrived and do all kinds of things with them.
		// like sort them according to username!

/*		Hybrid.debugmessage("Loaded Questions:");			
		var i;
		for(i=0;i<quiz.questions.length;i++)
		{
			Hybrid.debugmessage((i+1)+". "+quiz.questions[i].body);			
		}*/
		
		Hybrid.resizeFunction=handleResizeQuiz;
		handleResizeQuiz(); // this builds the page 
		// determin the order of the questions
		
	}
	function quiz_LoadServerFail(response)
	{
		Hybrid.showWarning("get_questions.php not found or invalid json, please validate your json.");
		Hybrid.debugmessage("Request failed.. get_questions.php not found");
		//Hybrid.throwError("Request failed.. get_questions.php not found");
	}
	function quiz_CheckAnswer()
	{
		if(quiz.selected_answer==-1)
		{
			Hybrid.showWarning("Selecteer een antwoord.");
			return;
		}
		var nr=parseInt(user.data.progress );
		console.log(user.data.progress+ " of "+quiz.question_order );
		if(nr>=quiz.questions.length) nr=quiz.questions.length-1;
		var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]]; // Q is undefined sometiimes..
		if(typeof(q)==="undefined")
		{
			window.alert("Problem with question order. :"+user.data.progress+"=>"+quiz.question_order[parseInt(user.data.progress)]+">"+quiz.length+"?");
		}
		var answers=["A","B","C","D"];
		var selected_answer_text=Hybrid.getText(layout["a"+quiz.selected_answer+"_text"]);
		Hybrid.setText(layout.dummy,q[q.answer]); // this sometimes gives you a bug......?
		var right_answer_text= Hybrid.getText(layout.dummy);
		Hybrid.debugmessage("you selected answer: "+selected_answer_text);
		Hybrid.debugmessage("right answer was: "+right_answer_text);
		var i=0;
		var should_be="-";
		
		// what score is there for you?
		
		quiz.question_score=100; // default value of question without hint!
		quiz.question_stenen=20;
		if(parseInt(user.data.hints[nr])==1)
		{
			quiz.question_score=50;
			quiz.question_stenen=10;
		}
		
		
		for(i=0;i<4;i++)
		{
		
			Hybrid.debugmessage("Determining right letter: "+right_answer_text+"=="+Hybrid.getText(layout["a"+i+"_text"])+"?"); 
			// getTExt from layout makes for a non html-entity version of that thing...
			// so the best way to compare those two, is to put right_answer_text in a dummy box and read that out as well!
			
			
			
			if(right_answer_text==Hybrid.getText(layout["a"+i+"_text"]) ) should_be=answers[i];
		}
		
		if(selected_answer_text==right_answer_text)
		{
			// show right!
			Hybrid.debugmessage("show right");
			quiz_showRightPopup(answers[quiz.selected_answer]);
			Hybrid.playSound("right");
			var data={};
			data.qid=q.id;
			data.stat="right";
			data.user=user.data.naam;
			Hybrid.setVars("add_stat.php", data);
		}else
		{
			// show wrong!
			Hybrid.debugmessage("show wrong");
//			Hybrid.debugmessage("should_be answer"+should_be);
//			Hybrid.debugmessage("right_answer_text"+right_answer_text);
			quiz_showWrongPopup(answers[quiz.selected_answer],should_be,right_answer_text);
			Hybrid.playSound("wrong");
			var data={};
			data.qid=q.id;
			data.stat="wrong";
			data.user=user.data.naam;		
			Hybrid.setVars("add_stat.php", data);
		}
		
		// put to server.
		// open the questions!
		// do ajax call!
		
	
		Hybrid.debugmessage("Je hebt "+user.data.hints[nr]+" hints voor deze quiz gebruikt, dus score = score "+quiz.question_score+"/ stenen "+quiz.question_stenen);
		var data={};
		data.naam=Hybrid.getCookie("user_naam"); //should we also give the password, in case of pesten?????
		// it would be a bit safer, but overkill for now, I think..
		
		data.progress=user.data.progress;
		if(selected_answer_text==right_answer_text)
			data.answered="c"; // correctemundo
		else
			data.answered="b"; // bad, botched..
		
		data.question_id=q.id;
		data.punten=quiz.question_score;
		data.stenen=quiz.question_stenen;
		data.ck=new Date().getTime();
		Hybrid.getVars("answer_question.php",data,quiz_LoadAnswerCallback,quiz_LoadAnswerFail);
	}
		
	function quiz_LoadAnswerCallback(response)
	{
		var all;
		Hybrid.debugmessage("quiz_LoadAnswerCallback");
		if(parseInt(response.succes)!=1)
		{
			Hybrid.showWarning("Sorry, je antwoord is niet opgeslagen, check je internet verbinding!\n\nVervers de pagina als je weer internet hebt\nServer geeft error: "+response.error+" ("+response.errorcode+").");
			Hybrid.debugmessage("Request failed.. Sorry, je antwoord is niet opgeslagen, check je internet verbinding!\n\nAnswer_question.php responded: "+response.error+" ("+response.errorcode+") het spel start opnieuw op.");
			
			for(all in response)
				Hybrid.debugmessage("response["+all+"]="+response[all]);
			
			// go to login again!
//			setTimeout(start.init,200); // after ten seconds..
			return;
		}else
		{
			Hybrid.debugmessage("Saved answer");	
			
			// update the cookie with the server response!		
			//var nr=parseInt(response["progress"] );
			//Hybrid.setCookie("user_progress",nr+1)
			//var punten=parseInt(response["punten"] );
			//Hybrid.setCookie("user_punten",punten);
			//var stenen=parseInt(response["stenen"] );
			//Hybrid.setCookie("user_stenen",stenen);	
			var hints=response["hints"] ;
			Hybrid.debugmessage("received hints: "+hints+"");
			//Hybrid.setCookie("user_hints",hints);	
			// we update the user model
			user.data.progress=response["progress"];
			user.data.old_punten=user.data.punten; // we can use this to check if user has just played a new house loose?
			user.data.punten=response["punten"];
			user.data.stenen=response["stenen"];
			user.data.hints=response["hints"];
			
			Hybrid.setVisible(layout.popup,true); // show result
		}
	}
	
	function quiz_LoadAnswerFail(failingurl,errordata,thrownError,status)
	{
		// log the failure.. so that we can see, when the server would NOT return json, cause that's probably it..
		var data={};
		data.succes=0;
		data.stat="quiz_LoadAnswerFail";
		data.failingurl=failingurl;
		data.errordata=errordata;
		data.thrownError=thrownError;
		data.status=status;
		Hybrid.setVars("add_stat.php", data);
		
		Hybrid.showWarning("Check je internet verbinding: Laadfout.\nHerstel de internet verbinding en ververs de pagina om door te kunnen spelen.");
		Hybrid.debugmessage("quiz_LoadAnswerFail: Request failed.. answer_question.php not found");
		//Hybrid.throwError("Request failed.. Sorry, je antwoord is niet opgeslagen, check je internet verbinding!");
	}	
	
	function quiz_showWrongPopup(gekozen,should_be,right_answer_text)
	{
		var nr=parseInt( user.data.progress );
		var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]];
		
		layout.popup=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.popup,"rgba(0,0,0,0.5)");
		
		var x,y,w,h;
		w=985;
		h=1175;
		x=Hybrid.width/2-w/2;
		y=Hybrid.height/2-h/2;
		layout.popup_window=Hybrid.createBox(layout.popup,x,y,w,h);
		Hybrid.setBoxColor(layout.popup_window,palet.popup_back);
		Hybrid.setBoxShadow(layout.popup_window,0,0,50,"#000");
		
		x=88;
		y=80;
		w=985-x*2;
		h=460;
		var str="";
		str+="Je koos antwoord <font size='+3'>"+gekozen+"</font>";
		Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.dark_blue,"center",fontsz.head,str);

		y=158;
		var str="";
		str+="Dat is Helaas fout!";
		Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.wrong_text,"center",fontsz.quiz_mid,str);

		y=236;
		var str="";
		str+="Het had moeten zijn antwoord "+should_be+":<br>";
		str+=right_answer_text;
		layout.popup_head3=Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.quiz_small,str);
		
		Hybrid.debugmessage("content of layer: "+Hybrid.getText(layout.popup_head3));	
		Hybrid.debugmessage("getheight of text:"+Hybrid.getBoxContentHeight(layout.popup_head3));	
		Hybrid.debugmessage("h:"+h);	
		y+=Hybrid.getBoxContentHeight(layout.popup_head3);
		var str="";
			str+=q.wrong;
		if(q.wrong=="")
			str+=q.right;
		Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,str);
		
		// create button spelen
		w=Hybrid.graphics_manifest['buttons'].ss['play'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['play'][0][3];
		x=985/2-w/2;
		y=928;
		Hybrid.createSpriteButton(layout.popup_window,x,y,w,h,'buttons',"play","button_wrong_continue",handleButtonsQuiz);
		
		// create button SPEAK
		w=Hybrid.graphics_manifest['buttons'].ss['speak'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['speak'][0][3];
		Hybrid.createSpriteButton(layout.popup_window,985-w,0,w,h,'buttons',"speak","button_speak_right",handleButtonsQuiz);

	}
	
	function quiz_showFinishedPopup()
	{
		var nr=parseInt( user.data.progress );
		var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]];
		
		layout.popup=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.popup,"rgba(0,0,0,0.5)");
		
		var x,y,w,h;
		w=985;
		h=1115; // 1113 in original, but ok..
		x=Hybrid.width/2-w/2;
		y=Hybrid.height/2-h/2;
		layout.popup_window=Hybrid.createBox(layout.popup,x,y,w,h);
		var window_width=w;
		Hybrid.setBoxColor(layout.popup_window,palet.popup_back);
		Hybrid.setBoxShadow(layout.popup_window,0,0,50,"#000");
		
		x=88;
		y=80;
		w=985-x*2;
		h=460;
		
		var str="";
		str+="GEFELICITEERD!";
		Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.quiz_mid,str);

		y=158;
		var str="";
		str+="Je hebt het spel uitgespeeld";
		Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.head,str);
		y+=50;
		var str="";
		str+="Je score is "+user.data.punten+" punten!";
		Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.head,str);
			
		y+=100;
		str="Speel het spel nog een keer, bekijk de highscores of bouw nog even in je woonplaats. Je kunt nu natuurlijk ook gewoon stoppen. In dat geval, hopelijk tot ziens!"
		Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,str);

		// create button spelen
		w=Hybrid.graphics_manifest['buttons'].ss['again'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['again'][0][3];
		x=(window_width-w)/2;
		y=475;
		Hybrid.createSpriteButton(layout.popup_window,x,y,w,h,'buttons',"again","button_again",handleButtonsQuiz);

		// create other buttons
		w=Hybrid.graphics_manifest['buttons'].ss['high'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['high'][0][3];
		x=(window_width-w)/2;
		y=740;
		Hybrid.createSpriteButton(layout.popup_window,x,y,w,h,'buttons',"high","button_high",handleButtonsQuiz);

		w=Hybrid.graphics_manifest['buttons'].ss['city'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['city'][0][3];
		x=(window_width-w)/2;
		y+=100;
		Hybrid.createSpriteButton(layout.popup_window,x,y,w,h,'buttons',"city","button_city",handleButtonsQuiz);
		
		w=Hybrid.graphics_manifest['buttons'].ss['stop'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['stop'][0][3];
		x=(window_width-w)/2;
		y+=100;
		Hybrid.createSpriteButton(layout.popup_window,x,y,w,h,'buttons',"stop","button_stop",handleButtonsQuiz);
		
	}	
	 
function map_CheckNewHouseAvailable()
	{
		// we need to find out if there is any new houses available, if so, we need to show this to the user.
		var i;
		var new_house_available=-1;
		var new_score=user.data.punten+100; // act as if you allready have gotten the points, this runs via backend I think, but still..
		Hybrid.debugmessage("map_CheckNewHouseAvailable :"+map.shop.length+ "houses!");
		for(i=0;i<map.shop.length;i++)
		{
			console.log(new_score+" punten, quick check of the shop: "+map.shop[i].naam+","+map.shop[i].unlock+","+ map.shop[i].unlocked);
			if(map.shop[i].unlock<=new_score && map.shop[i].unlocked==false)
			{
				map.shop[i].unlocked=true; // only once!
				Hybrid.debugmessage("house available:"+map.shop[i].naam+" id:"+map.shop[i].img);
				// check if it's placed!
				var j=0;
				var placed=false;
				if(placed==false)
				{
					// you might need to hear about this house.
					new_house_available=i;  // map.shop.nr, never -1!
				}
			}else
			{
				//Hybrid.debugmessage("house unavailable:"+map.shop[i].naam+", "+map.shop[i].prijs+"<"+user.data.stenen);
			}
		}
		return new_house_available;
	}
	function quiz_showRightPopup(gekozen)
	{
		var new_house_available=map_CheckNewHouseAvailable();
		if(new_house_available!=-1)
		{
			Hybrid.debugmessage("show the new house available popup! for" +map.shop[new_house_available].naam+", id:"+map.shop[new_house_available].img);
		}
		
		var nr=parseInt( user.data.progress );
		var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]];
		
		layout.popup=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.popup,"rgba(0,0,0,0.5)");

		if(new_house_available!=-1)
		{
			// create the new house popup on top of the black!
			var x,y,w,h;
			w=640;
			h=720;
			x=Hybrid.width/2+350;
			y=Hybrid.height/2-180;
			layout.popup_new_house=Hybrid.createBox(layout.popup,x,y,w,h);
			Hybrid.setBoxColor(layout.popup_new_house,palet.pale_blue); 
			Hybrid.setBoxShadow(layout.popup_new_house,0,0,50,"#000");
			
			x=205;
			y=390;
			w=380;
			h=190;
			var str="";
			str+="Gefeliciteerd, je hebt een nieuw gebouw vrijgespeeld";
			layout.popup_house_text=Hybrid.createTextBox(layout.popup_new_house,x,y,w,h,fonts.head,"#fff","center",fontsz.quiz_very_small,str);
			
			// show the building in question!
			x=205;
			y=10;
			w=400;
			h=380;
			nr=new_house_available;
			layout.popup_canv=Hybrid.createCanvas(layout.popup_new_house,x,y,w,h);
			// get the scale factor!
			Hybrid.debugmessage("nr: "+nr);
			Hybrid.debugmessage("map.shop.length: "+map.shop.length);
			Hybrid.debugmessage("map.shop[nr].img: "+map.shop[nr].img);
			var fx=w/Hybrid.graphics_manifest[map.shop[nr].img].w; // HIER gaat het fout, omdat de shop niet geladen is??
			var fy=h/Hybrid.graphics_manifest[map.shop[nr].img].h;
			var f=fx;
			if(fy<fx)f=fy;
			if(f>0.9 && f<1.1) f=1;
			else f*=0.9;
			Hybrid.drawImage(layout.popup_canv,map.shop[nr].img,w/2,h/2,0,f);
			
			// create button plaats op de kaart
			w=Hybrid.graphics_manifest['buttons'].ss['place'][0][2];
			h=Hybrid.graphics_manifest['buttons'].ss['place'][0][3];
			Hybrid.debugmessage("found the button names place: "+w+","+h);
			x=200;
			y=560;
			Hybrid.createSpriteButton(layout.popup_new_house,x,y,w,h,'buttons',"place","button_place_on_map",handleButtonsQuiz);
		}
		
		var x,y,w,h;
		w=985;
		h=1118;
		x=Hybrid.width/2-w/2;
		y=Hybrid.height/2-h/2;
		layout.popup_window=Hybrid.createBox(layout.popup,x,y,w,h);
		Hybrid.setBoxColor(layout.popup_window,palet.popup_back);
		Hybrid.setBoxShadow(layout.popup_window,0,0,50,"#000");
		
		x=88;
		y=80;
		w=985-x*2;
		h=460;
		var str="";
		str+="Je koos antwoord <font size='+3'>"+gekozen+"</font>";
		layout.popup_head1=Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.dark_blue,"center",fontsz.head,str);

		y=158;
		var str="";
		str+="Dat is goed!";
		layout.popup_head2=Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.quiz_mid,str);
		
		y=220;
		h=660;
		var str="";
		
		str+="Je verdient "+quiz.question_score+" pnt en "+quiz.question_stenen+" stenen";
		layout.popup_head3=Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.quiz_small,str);
			
		y+=Hybrid.getBoxContentHeight(layout.popup_head3)+60;
		str=q.right;
		layout.popup_body=Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,str);
		
		// create button SPEAK
		w=Hybrid.graphics_manifest['buttons'].ss['speak'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['speak'][0][3];
		x=985-w;
		Hybrid.createSpriteButton(layout.popup_window,x,0,w,h,'buttons',"speak","button_speak_right",handleButtonsQuiz);
		
		
		// create button spelen
		w=Hybrid.graphics_manifest['buttons'].ss['play'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['play'][0][3];
		x=985/2-w/2;
		y=865;
		Hybrid.createSpriteButton(layout.popup_window,x,y,w,h,'buttons',"play","button_right_continue",handleButtonsQuiz);
		
		// after creation it should be made invisible, the server answer will make it visible!
		Hybrid.setVisible(layout.popup,false);

	}	


	function quiz_showHint()
	{
		var nr=parseInt( user.data.progress );
		var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]];
		
		// if this is the first time, you set the hint:
		
		if(typeof(q.used_hint)==="undefined" || q.used_hint!=true)
		{
			q.used_hint=true;
			var data={};
			data.qid=q.id;
			data.stat="hint";
			data.user=user.data.naam;			
			Hybrid.setVars("add_stat.php", data);
		}
		
		var data={};
		data.naam=Hybrid.getCookie("user_naam");
		data.progress=user.data.progress;
		data.answered="a"; // a hint has been used for this question!
		data.question_id=q.id;
		data.ck=new Date().getTime();
		var str="answer_question.php?";
		var i;
		for(i in data) str+=i+"="+data[i]+"&";
		Hybrid.debugmessage("trying to answer with a hint used...  "+str);
		
		Hybrid.getVars("answer_question.php",data,quiz_LoadAnswerCallback,quiz_LoadAnswerFail);
		
		
		layout.popup=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.popup,"rgba(0,0,0,0.5)");
		
		var x,y,w,h;
		w=985;
		h=1118;
		x=Hybrid.width/2-w/2;
		y=Hybrid.height/2-h/2;
		layout.popup_window=Hybrid.createBox(layout.popup,x,y,w,h);
		Hybrid.setBoxColor(layout.popup_window,palet.popup_back);
		Hybrid.setBoxShadow(layout.popup_window,0,0,50,"#000");
		
		x=88;
		y=80;
		w=Math.floor(985-x*2);
		h=460;
		var str="";
		str+="Vind je de vraag nog moeilijk?<BR>Misschien dat het met deze hint wel zal lukken?";
		layout.popup_head1=Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.dark_blue,"center",fontsz.head,str);

		var th=Hybrid.getTextboxHeight(layout.popup_head1);
		Hybrid.debugmessage("HINT height of textbox popup_head1: "+th);
		y+=th+40;
		
		str=q.hint;
		layout.popup_body=Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,str);
	
		// do layout on resized text!
		
		th=Hybrid.getTextboxHeight(layout.popup_body);
		y+=th+40;
		Hybrid.debugmessage("HINT height of textbox: "+th);
		
		// create button spelen
		w=Hybrid.graphics_manifest['buttons'].ss['play'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['play'][0][3];
		x=985/2-w/2;
		Hybrid.createSpriteButton(layout.popup_window,x,y,w,h,'buttons',"continue","button_hint_continue",handleButtonsQuiz);

		// create button SPEAK
		w=Hybrid.graphics_manifest['buttons'].ss['speak'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['speak'][0][3];
		x=985-w;
		Hybrid.createSpriteButton(layout.popup_window,x,0,w,h,'buttons',"speak","button_speak_hint",handleButtonsQuiz);

		// set position of window!
		w=985;
		h=y+280;
		y=Hybrid.height/2-h/2;
		x=Hybrid.width/2-w/2;
		Hybrid.sizeBox(layout.popup_window,w,h);
		Hybrid.moveBox(layout.popup_window,x,y);

		// if we set it to invisible, innerheight measures 0!
		Hybrid.setVisible(layout.popup,false); // you will only see it when it registers!
	
	}		
	
	function quiz_ShowQuestion(nr)
	{
		if(nr>=quiz.questions.length) nr=quiz.questions.length-1;
		var q=quiz.questions[nr];
		if(typeof(q)=="undefined")
		{
			console.warn("an exception occured "+JSON.stringify(quiz.questions));
		}
		
		Hybrid.debugmessage("quiz_ShowQuestion "+(nr+1));
		
		Hybrid.debugmessage("vraag nr"+parseInt(user.data.progress ));
		if(parseInt(user.data.progress)==0)
		{
			// first question
			Hybrid.debugmessage("eerste vraag gedisplayed!");
			// mark this time and event for later in stats!
			var data={};
			data.stat="game";
			data.event="started";
			data.user=user.data.naam;
			Hybrid.setVars("add_stat.php", data);
		}
		
		
		Hybrid.setText(layout.vraag_nr,"Vraag "+(parseInt(user.data.progress)+1)+"/"+quiz.question_order.length);
		Hybrid.setText(layout.score_label,"Score <em>"+user.data.punten+"</em> punten / <em>"+user.data.stenen+"</em> stenen");
		// Question Progress
		var w=412;
		w=w*(parseInt(user.data.progress)/(quiz.question_order.length-1));
		var h=30;
		Hybrid.sizeBox(layout.progress,w,h);
		// Question Title
		Hybrid.setText(layout.title,q.title); // this is where it goes wrong if the question that is being displayed has been deleted!
		// Question Body
		Hybrid.setText(layout.question_body,q.body);
		var answers=["A","B","C","D"];
		var hussle_antwoorden=[0,1,2,3];
		hussle_antwoorden.sort(Hybrid.sort_shuffle);
		// Question Media
		Hybrid.debugmessage("Question Media:"+q.media);
		
		// remove AND recreate layout media!
		w=854;
		h=557;
		var x=104;
		var y=488;
		Hybrid.removeElement(layout.media);
		if(q.media!="")
		{
			if(q.media.indexOf("www")==-1 && q.media.indexOf("http")==-1)
			{
				// default: it's an image!
				layout.media=Hybrid.createBox(layout.quiz,x,y,w,h);
				Hybrid.setBoxColor(layout.media,"#fff"); 
				Hybrid.setBoxImagePath(layout.media,"/mgcms/cms_images/"+q.media+".png");
			}else
			{
				// It's a youtube video!
				var video_code=getYoutubeVideoCode(q.media);
				Hybrid.debugmessage("embed a video with code: '"+video_code+"'");
				var iframe_url="https://www.youtube.com/embed/"+video_code+"?autoplay=1&showinfo=0&controls=1&rel=0&modestbranding=1";
				// create a webview..
				if(layout.media.kind=="hybridWebview")
				{
					Hybrid.debugmessage("stopped video!");
					Hybrid.setWebviewURL(layout.media,"www.google.com");// shut up any video's!
				}
				if(layout.media)
				{
					Hybrid.debugmessage("layout.media: there was something there allready, removed it!");
					Hybrid.removeElement(layout.media);
				}
				layout.media=Hybrid.createWebview(layout.quiz,x,y,w,h,iframe_url);
			}
		}

		
		
		var i;
		q.hussle_antwoorden=hussle_antwoorden; // keep the hussle_antwoorden voor de speak.
		for(i=0;i<4;i++)
		{
			Hybrid.setText(layout["a"+i+"_text"],q[ answers[hussle_antwoorden[i]] ]);
			var th=Hybrid.getTextboxHeight(layout["a"+i+"_text"]);
			Hybrid.debugmessage("place answers in button: "+th);
			Hybrid.moveBox(layout["a"+i+"_text"],124,90-th/2);
		}
		Hybrid.stopVoice();
		quizHelperDrawAnswerCanvasses();
	}
	
	function getYoutubeVideoCode(media_url)
	{
		Hybrid.debugmessage("getYoutubeVideoCode("+media_url+")");
		var video_code="";
		// werk url om naar geldige embed code!
		if(media_url.indexOf("youtu.be/")!=-1)
		{
			// looks like this:
			// "http://youtu.be/rht7mPaXgzU";
			 video_code=media_url.substr(media_url.indexOf("youtu.be/")+9,11);
			// window.alert("extracted video_code:"+video_code);
		}
		if(media_url.indexOf("v=")!=-1)
		{
			// looks like this:
			//"https://www.youtube.com/watch?v=uziVqnHhLDg";
			video_code=media_url.substr(media_url.indexOf("v=")+2,11);
			//window.alert("extracted video_code:"+video_code);
		}
		return video_code;
	}
	
	function handleResizeQuiz()
	{
		Hybrid.debugmessage("page Quiz build up:"+Hybrid.width+"x"+Hybrid.height);
		Hybrid.erasePage();
		layout={}; // erase any old layout!
		layout.back=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.back,palet.pale_green); // this should be set to cover all, but that's for later!
		
		var w,h,x,y,f,tx,ty,string;
		w=Hybrid.width;
		h=quiz.bar_height;
		x=0;
		y=0;
		layout.bar=Hybrid.createBox(layout.back,x,y,w,h);
		Hybrid.setBoxColor(layout.bar,palet.pale_blue); // this should be set to cover all, but that's for later!
	
		// it's imperative that layout stays the same, so apart from the bar, we need to set a box in the middle of exactly 2048..
		// UNLESS it's smaller, than we need to scale it down... but smaller than 4x3?? I think not.
		
		w=2048;
		h=1361;
		x=(Hybrid.width-2048)/2;
		y=0;
		layout.quiz=Hybrid.createBox(layout.back,x,y,w,h);

		// set the snap to aim for!
		//Hybrid.setBoxColor(layout.quiz,"rgba(255,255,255,0.1)"); // this should be set to cover all, but that's for later!
		//Hybrid.setBoxImage(layout.quiz,"snap"); // this should be set to cover all, but that's for later!

		// stuff in the bar
		layout.user_name=Hybrid.createTextBox(layout.quiz,60,20,450,100,fonts.head,"#fff","left",fontsz.head,Hybrid.getCookie("user_naam"));
		layout.vraag_nr=Hybrid.createTextBox(layout.quiz,440,25,350,100,fonts.body,"#fff","right",fontsz.menu,"Vraag "+user.data.progress+"/..");
		layout.score_label=Hybrid.createTextBox(layout.quiz,1340,25,600,100,fonts.body,"#fff","right",fontsz.menu,"Score <em>"+user.data.punten+"</em> punten / <em>"+user.data.stenen+"</em> stenen");

		// Question Progress
		w=412;
		h=30;
		x=(2048-w)/2;
		y=(quiz.bar_height-h)/2+5;
		layout.progress_total=Hybrid.createBox(layout.quiz,x,y,w,h);
		Hybrid.setBoxColor(layout.progress_total,"#fff"); 
		var w1=(parseInt(user.data.progress)/30);
		if(w1>1) w1=1;
		if(w1<0) w1=0;
		layout.progress=Hybrid.createBox(layout.quiz,x,y,w*w1,h);// set inital width.. user.data.progress might be any positive integer (if they add MANY questions!).
		Hybrid.setBoxColor(layout.progress,palet.pale_yellow); 
		
		// Question Title
		w=854;
		h=86;
		x=104;
		y=264;
		string="...";
		layout.title=Hybrid.createTextBox(layout.quiz,x,y,w,h,fonts.head,palet.head,"left",fontsz.head,string);

		// Question Body
		w=854;
		h=174;
		x=104;
		y=310;
		string="...";
		layout.question_body=Hybrid.createTextBox(layout.quiz,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,string);
		
		// create media box
		w=854;
		h=557;
		x=104;
		y=488;
		layout.media=Hybrid.createBox(layout.quiz,x,y,w,h);
		Hybrid.setBoxColor(layout.media,"#fff"); 
		
		// create answers buttons!
		var i,letter=["A","B","C","D"];
		var answers=["","","",""];
		// create the right answer textbox...
		// this is a dummy textbox to stop decoding problems:
		layout.dummy=Hybrid.createTextBox(layout.quiz,-50,-100,50,100,fonts.head,palet.head,"center",20,"");
		
		
		for(i=0;i<4;i++)
		{
			w=900;
			h=quiz.button_height;
			x=1046;
			y=315+(quiz.button_height-16)*i; // 172 is inner, so  thickness =8
			// create the outer box (rounded)
			layout["a"+i]=Hybrid.createBox(layout.quiz,x,y,w,h);
			//Hybrid.setBoxColor(layout["a"+i],"#fff"); 
			
			// because the sprite way is not very handy in this case!!!
			// THIS IS THE WAY TO DO IT WITH A CANVAS!
			layout["a"+i+"_canvas"]=Hybrid.createCanvas(layout["a"+i],0,0,w,h);
			layout["a"+i+"_canvas"].over=false; // this is false.
			
			// now create the texts
			layout["a"+i+"_letter"]=Hybrid.createTextBox(layout["a"+i],-5,60,150,150,fonts.head,palet.head,"center",60,letter[i]);
			string="";
			layout["a"+i+"_text"]=Hybrid.createTextBox(layout["a"+i],128,60,720,70,fonts.body,palet.body,"left",fontsz.body,answers[i]);
			//var th=Hybrid.getTextboxHeight(layout["a"+i+"_text"]);
			//Hybrid.debugmessage(" answer "+(i+1)+" height = "+th);
			//Hybrid.moveBox(layout["a"+i+"_text"],124,h/2-th/2); // half button height?
			
			// set a button box over this all.
			layout["a"+i+"hit"]=Hybrid.createBox(layout["a"+i],0,0,w,h);
			Hybrid.makeButton(layout["a"+i+"hit"],"answer|"+i,handleButtonsQuiz,handleOverButtonsQuiz);
			
		}
		quizHelperDrawAnswerCanvasses();
		
		// create menubutton quiz
		w=Hybrid.graphics_manifest['buttons'].ss['stop'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['stop'][0][3];
		x=2048-300;
		y=137;
		Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"stop","button_stop",handleButtonsQuiz);

		w=Hybrid.graphics_manifest['buttons'].ss['high'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['high'][0][3];
		x=2048-610;
		y=137;
		Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"high","button_high",handleButtonsQuiz);

		w=Hybrid.graphics_manifest['buttons'].ss['city'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['city'][0][3];
		x=2048-1035;
		y=137;
		Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"city","button_city",handleButtonsQuiz);

		// create button answer
		w=Hybrid.graphics_manifest['buttons'].ss['answer'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['answer'][0][3];
		x=2048-60-755;
		y=Hybrid.height-h-60;
		layout.answer_button=Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"answer","button_answer",handleButtonsQuiz);
		Hybrid.setVisible(layout.answer_button,false);
		
		// create button SPEAK
		w=Hybrid.graphics_manifest['buttons'].ss['speak'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['speak'][0][3];
		x=104;
		y=137;
		Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"speak","button_speak_question",handleButtonsQuiz);
		
		// create button SPEAK Answer
		for(i=0;i<4;i++)
		{
			x=2048-104;
			y=345+(quiz.button_height-16)*i; // 172 is inner, so  thickness =8
			Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"speak","button_speak_answer_"+i,handleButtonsQuiz);
		}
		
		// create button hint
		w=Hybrid.graphics_manifest['buttons'].ss['hint'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['hint'][0][3];
		x=2048-60-192;
		y=Hybrid.height-h-80;
		Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"hint","button_hint",handleButtonsQuiz);
		// maybe ghosted
		// you can look at hints as much as you like..
		//Hybrid.debugmessage("ghost hint? "+user.data.hints[parseInt(user.data.progress)]);
/*		if(parseInt(user.data.hints[parseInt(user.data.progress)])==1)
		{
			// you have the hint allready!
			quiz.question_punten=50;
			quiz.question_stenen=10;
			// ghost it by posting something over it!
			layout.ghosted=Hybrid.createBox(layout.quiz,x,y,w,h);
			Hybrid.setBoxColor(layout.ghosted,"rgba(201,229,182,0.5)"); 		
		}*/
		
		// overlay snap!
		/*
		{
			w=2048;
			h=1361;
			x=(Hybrid.width-2048)/2;
			y=0;
			layout.snap=Hybrid.createBox(layout.back,x,y,w,h);
	//		Hybrid.setBoxColor(layout.quiz,"rgba(255,255,255,0.1)"); // this should be set to cover all, but that's for later!
			Hybrid.setBoxImage(layout.snap,"snap"); // this should be set to cover all, but that's for later!
			Hybrid.setBoxAlpha(layout.snap,0.5); // this should be set to cover all, but that's for later!
		*/
	
		// now ALWAYS set the right data
		var nr=parseInt(user.data.progress);
		if(nr>=quiz.question_order.length)
		{
			// extra popup!!
			Hybrid.playSound("finished");
			quiz_showFinishedPopup();
			// finished!
			
			/*Hybrid.showWarning("Je bent klaar met de quiz. Het is tijd om naar de kaart te gaan.");
			// we zetten hier even een highscore!
			var data={};
			data.naam=user.data.naam;
			Hybrid.setVars("add_highscore.php", data);
			
			var data={};
			data.stat="game";
			data.event="finished";
			data.user=user.data.naam;
			Hybrid.setVars("add_stat.php", data);

			
			// one way traffic for stats and highscores.
			// we don't need to know if this lands ok!
			map.init();*/
		}else
		{
			quiz_ShowQuestion(quiz.question_order[nr]);
		}
	}
	
	function quizHelperDrawAnswerCanvasses()
	{
		var i;
		var w,h;
		for(i=0;i<4;i++)
		{
			w=900;
			h=quiz.button_height;
			var rounding=8;
			var ctx=layout["a"+i+"_canvas"].context;
			var grd=ctx.createLinearGradient(0,0,0,h);
			if(i==quiz.selected_answer)
			{
				//rounding=20;
				Hybrid.setTextBoxColor(layout["a"+i+"_text"],"#fff");
				Hybrid.setTextBoxColor(layout["a"+i+"_letter"],"#9cd2f7");
				grd.addColorStop(0,"#255192");
				grd.addColorStop(1,"#3a75bc");
			}else
			{
				//rounding=8;
				Hybrid.setTextBoxColor(layout["a"+i+"_text"],palet.body);
				Hybrid.setTextBoxColor(layout["a"+i+"_letter"],palet.head);
				if(layout["a"+i+"_canvas"].over===false)
				{
					grd.addColorStop(0,"#9cd2f7");
					grd.addColorStop(1,"#88bfe8");
				}else
				{
					grd.addColorStop(0,"#6cbcff");
					grd.addColorStop(1,"#5aaaf2");
				}
			}
			ctx.fillStyle=grd;
			ctx.strokeStyle="#FFF";
			ctx.lineWidth=rounding;
			ctx.beginPath();
			Hybrid.drawRoundedRect(ctx,4,4,w-8,h-8,rounding);
			ctx.fill();
			ctx.stroke();
		}
	}
	
	function handleOverButtonsQuiz(label,overout)
	{
		Hybrid.debugmessage("handleButtonsQuiz: "+label+","+overout);
		if(label.indexOf("answer|")!=-1)
		{
			var nr=parseInt(label.substr(7,15));
			Hybrid.debugmessage("button nummer: "+nr);
			if(overout=="out")
			{
				// restore
				layout["a"+nr+"_canvas"].over=false;
			}else
			{
				// show over!
				layout["a"+nr+"_canvas"].over=true;
			}
			quizHelperDrawAnswerCanvasses();
		}
	}
	function handleButtonsQuiz(label)
	{
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		if(label.indexOf("answer|")!=-1)
		{
			var nr=parseInt(label.substr(7,15));
			quiz.selected_answer=nr;
			Hybrid.setVisible(layout.answer_button,true);
			quizHelperDrawAnswerCanvasses();
			
		}
		var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]]; // Q is undefined sometiimes..
		var answer_codes=["A","B","C","D"];
		switch(label)
		{
			case "button_speak_question":
				Hybrid.playVoice("question_"+q.id+"_body.mp3");
			break;
			case "button_speak_right":
				q=quiz.questions[quiz.question_order[parseInt(user.data.progress)-1]]; // we have just progressed one question, so we have to go back one question..
				Hybrid.playVoice("question_"+q.id+"_right.mp3");
			break;
			case "button_speak_hint":
				Hybrid.playVoice("question_"+q.id+"_hint.mp3");
			break;
			case "button_speak_answer_0":
				Hybrid.playVoice("question_"+q.id+"_"+answer_codes[q.hussle_antwoorden[0]]+".mp3");
			break;
			case "button_speak_answer_1":
				Hybrid.playVoice("question_"+q.id+"_"+answer_codes[q.hussle_antwoorden[1]]+".mp3");
			break;
			case "button_speak_answer_2":
				Hybrid.playVoice("question_"+q.id+"_"+answer_codes[q.hussle_antwoorden[2]]+".mp3");
			break;
			case "button_speak_answer_3":
				Hybrid.playVoice("question_"+q.id+"_"+answer_codes[q.hussle_antwoorden[3]]+".mp3");
			break;
			case "button_place_on_map":
				map.init();
			break;
			case "button_right_continue":
			case "button_wrong_continue":
				// next question should be displayed.
				// delete the popup!
				var nr=parseInt(user.data.progress);
				if(nr>=quiz.question_order.length)
				{
					// play special sound and show map!
					Hybrid.playSound("finished");
					// set a highscore!!
					var data={};
					data.naam=user.data.naam;
					Hybrid.setVars("add_highscore.php", data);
					
					var data={};
					data.stat="game";
					data.event="finished";
					//data.gametime=Hybrid.getCookie("sta"); // we don't do that any more, but this was why it failed!
					// couldn't figure that out, then and went and fixed it in the stats. oh well..
					data.user=user.data.naam;
					Hybrid.setVars("add_stat.php", data);
					
					quiz_showFinishedPopup(); // user JUST finished!
				}else
				{
					// show the next question!
					Hybrid.removeElement(layout.popup);
					quiz.selected_answer=-1;
					//if(user.data.progress%5==0)
					//{
						// every five questions we go to the map!
						//map.init();
					//}else
					//{
						Hybrid.setVisible(layout.answer_button,false);
						quiz_ShowQuestion(quiz.question_order[parseInt(user.data.progress)]);
					//}
				}
			break;
			case "button_hint_continue":
				// you just had a hint, all we do now, is remove the popup and you are go!
				Hybrid.removeElement(layout.popup);
			break;
			case "button_hint":
				Hybrid.playSound("hint");
				quiz_showHint();
			break;				
			case "button_answer":
				quiz_CheckAnswer();
				if(layout.media.kind=="hybridWebview")
				{
					Hybrid.debugmessage("stopped video!");
					Hybrid.setWebviewURL(layout.media,"img/video_stopped.png");// shut up any video's!
				}
			break;				
			case "button_again":
					// now it means START over, check if that's what they want with a prompt..
					//var user_answer=window.confirm("Weet je zeker dat je opnieuw wilt beginnen met de vragen om meer punten en stenen te verdienen?");
					reset_game.init();
					if(0)
					{
						// we do a call to the server to reset the game, 
						// we reset all values in javascript
						// and then init the quiz!
						user.data.progress=0;
						//user.data.punten=0;
						user.data.hints=[];
						for(var i=0;i<user.data.question_order.length;i++)
							user.data.hints.push(0);// geen hints gebruikt..
						// we should tell the server and on succes get the new order and THEN init the quiz!
						
						var data={};
						data.page="quiz";
						data.stat="reset";
						data.user=user.data.naam;
						Hybrid.setVars("add_stat.php", data);
						
						var data={};
//						map.state="reset game";
						data.naam=Hybrid.getCookie("user_naam");
						data.wachtwoord=Hybrid.getCookie("user_wachtwoord");
						data.ck=new Date().getTime();
						Hybrid.debugmessage("reset_game.php?naam="+data.naam+"&"+data.wachtwoord+"ck="+data.ck);
						Hybrid.getVars("reset_game.php",data,resetGame_ServerCallback,resetGame_ServerFail);
						//quiz.init();					
					}
					//Hybrid.debugmessage("user_answer: "+user_answer);
			break;
			case "button_city":
				map.init();
			break;				
			case "button_high":
				high.init();
			break;				
			case "button_stop":
				start.init();
			break;				
			default:
				Hybrid.debugmessage("handleButtonsQuiz: "+label);
		}
	}
	function resetGame_ServerCallback(response)
	{
		var id;
		if(response.succes=="1")
		{
			Hybrid.debugmessage("Got back reset game: "+response.user);
			Hybrid.debugmessage("new question order received: "+response.user.question_order);
			user.data.question_order=response.user.question_order;
			
			// als ik dit doe, krijg ik de oude vragen NOGmaals.
			// instead, refresh the page!
			// quiz.init();
			location.reload();
			
			// we weten de nieuwe volgorde van de vragen, deze zit in 
			// 
		}else
		{
			var all;
			Hybrid.showWarning("Sorry, je antwoord is niet opgeslagen, check je internet verbinding!\n\nServer geeft error: "+response.error+" ("+response.errorcode+"), het spel start opnieuw op.");
			Hybrid.debugmessage("Request failed.. : "+response.error+" ("+response.errorcode+") het spel start opnieuw op.");
			
			for(all in response)
				Hybrid.debugmessage("response["+all+"]="+response[all]);
			
			// go to login again!
			setTimeout(start.init,200); // after ten seconds..
			return;
		}
	}
	function resetGame_ServerFail(response)
	{
		Hybrid.showWarning("Check your internet connection: mangled answer or no answer received.");
		Hybrid.debugmessage("Request failed..");
		
	}	
	

