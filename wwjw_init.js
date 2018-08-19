/*
	init.js (inits all hybrid settings)
*/
	/*---------------------Overriding basic things like manifests etc!----------------------------------------------*/
	Hybrid.stageScale="responsive-width"; // this could also be lineair...?
	Hybrid.app_id="weetwaarjewoont_steenbergen";
	Hybrid.mustBeLandscape=true;
	Hybrid.portraitModeCatchImage; // we can put a picture here, telling the user to reorient..
	//Hybrid.width=1280; // 1024 
	Hybrid.height=1360; // 691  // aim width for interface elements, width will be set by mode responsive-width!
	// experiments with size
	// we have to put the headers on index.php, as THIS has the browsers attention.
	// for good measure we also put the headers on the game.php!
	// // <meta name="viewport" content="user-scalable=no,width=device-width"> 768x519 
	//<meta name="viewport" content="user-scalable=no,width=device-width, initial-scale=1">  1024 x 691
	// via home screen: 1024x748!

	Hybrid.aatd.push("687474703a2f2f7777772e736e6f65702e6174"); //http://www.snoep.at
	//Hybrid.debugmessage("new domain: "+Hybrid.encodeString("http://spel.kijkopsteenbergen.nl"));
	Hybrid.aatd.push("687474703a2f2f7370656c2e6b696a6b6f70737465656e62657267656e2e6e6c");//http://spel.kijkopsteenbergen.nl
	
	//Hybrid.stageColor="#ff0000"; // transparent if you don't set this.
	Hybrid.initPageFunction=initPage;
	Hybrid.loadingProgressFunction=showLoadingProgress;
	
	var colorPalet=[];
	colorPalet.loading_bar="#22aaee";
	var layout={};
	
	var custom_switches=["selectable"]; 
	// these will be gotten in loadInitPage from the url, you can set the to a default, but they WILL be overridden!!

	// AUDIO MANIFEST
	Hybrid.audio_manifest['begin']={vol:1.0,preload:true}; // music always preload false, it would just take too long!
	//Hybrid.audio_manifest['buy_house']={vol:1.0,preload:true}; // this file gives problems on android galaxy tab, don't know why?
	Hybrid.audio_manifest['place']={vol:1.0,preload:true}; // music always preload false, it would just take too long!
	Hybrid.audio_manifest['hint']={vol:1.0,preload:true}; // music always preload false, it would just take too long!
	Hybrid.audio_manifest['right']={vol:1.0,preload:true}; // music always preload false, it would just take too long!
	Hybrid.audio_manifest['wrong']={vol:1.0,preload:true}; // music always preload false, it would just take too long!
	Hybrid.audio_manifest['finished']={vol:1.0,preload:true}; // music always preload false, it would just take too long!
	Hybrid.audio_manifest['next_question']={vol:1.0,preload:true}; // music always preload false, it would just take too long!
	// GRAPHICS MANIFEST
	var a;
	Hybrid.graphics_manifest['loading_anim']={src:"loading_anim.gif",w:265,h:200,preload: false}; // we don't preload the loading anim, that would be dumb!
	Hybrid.graphics_manifest['snap']={src:"snap.png",w:2048,h:1361,preload: false}; // we don't preload the loading anim, that would be dumb!
	Hybrid.graphics_manifest['buttons']={src:"buttons.png",w:2048,h:2048,preload: true,kind:"sprite",ss:{}}; // we don't preload the loading anim, that would be dumb!
	a=[[4,4,398,72,0,0,0],[406,4,398,72,0,0,0],[808,4,287,72,0,0,0],[1099,4,287,72,0,0,0],[1390,4,236,72,0,0,0],[1630,4,236,72,0,0,0],[4,80,236,72,0,0,0],[244,80,236,72,0,0,0],[484,80,645,182,0,0,0],[1133,80,645,182,0,0,0],[4,266,855,182,0,0,0],[863,266,855,182,0,0,0],[4,452,435,182,0,0,0],[443,452,435,182,0,0,0],[882,452,146,145,0,0,0],[1032,452,146,145,0,0,0],[1182,452,515,182,0,0,0],[4,638,515,182,0,0,0],[523,638,435,182,0,0,0],[962,638,435,182,0,0,0],[1401,638,435,182,0,0,0],[4,824,435,182,0,0,0],[443,824,103,95,0,0,0],[550,824,103,95,0,0,0],[657,824,8,25,0,0,0],[669,824,599,179,0,-1,2],[1272,824,599,179,0,-1,2],[4,1010,401,80,0,2,2],[409,1010,401,80,0,2,2],[814,1010,780,180,0,2,2],[4,1194,780,180,0,2,2],[788,1194,198,29,0,0,0],[990,1194,198,29,0,0,0],[1192,1194,381,29,0,0,0],[1577,1194,381,29,0,0,0],[4,1378,315,29,0,0,0],[323,1378,315,29,0,0,0],[642,1378,301,29,0,0,0],[947,1378,301,29,0,0,0],[1252,1378,401,80,0,2,2],[4,1462,401,80,0,2,2],[4,156,72,72,0,0,0],[79,156,72,72,0,0,0],[155,156,72,72,0,0,0],[231,156,72,72,0,0,0]];
		Hybrid.graphics_manifest['buttons'].ss['city']=[a[0],a[1]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['high']=[a[2],a[3]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['stop']=[a[4],a[5]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['contact']=[a[6],a[7]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['new_game']=[a[8],a[9]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['continue_game']=[a[10],a[11]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['back']=[a[12],a[13]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['hint']=[a[14],a[15]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['answer']=[a[16],a[17]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['continue']=[a[18],a[19]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['play']=[a[20],a[21]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['dropdown']=[a[22],a[23]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['dropdown_back']=[a[24],a[23]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['akkoord']=[a[25],a[26]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['place']=[a[27],a[28]];// reg x and y =0 for buttons!s!
		Hybrid.graphics_manifest['buttons'].ss['again']=[a[29],a[30]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['dasklaretaal']=[a[31],a[32]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['shapesandsounds']=[a[33],a[34]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['snoepgames']=[a[35],a[36]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['admin']=[a[37],a[38]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['problem']=[a[39],a[40]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['prev']=[a[41],a[42]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['next']=[a[43],a[44]];// reg x and y =0 for buttons!
	
	Hybrid.graphics_manifest['rotate_device']={src:"rotate_device.jpg",w:480,h:640,preload: false}; // we don't preload the loading anim, that would be dumb!
	Hybrid.graphics_manifest['location1']={src:"getCMSImage.php?id=map&img=steenbergen",w:4904,h:2048,preload: false}; // we don't preload the map back, that's just a bit heavy.
	Hybrid.graphics_manifest['location2']={src:"getCMSImage.php?id=map&img=deheen",w:4400,h:2052,preload: false}; // we don't preload the map back, that's just a bit heavy.
	Hybrid.graphics_manifest['location3']={src:"getCMSImage.php?id=map&img=nieuwvossemeer",w:3200,h:2048,preload: false}; // we don't preload the map back, that's just a bit heavy.
	Hybrid.graphics_manifest['location4']={src:"getCMSImage.php?id=map&img=kruisland",w:2672,h:1708,preload: false}; // we don't preload the map back, that's just a bit heavy.
	Hybrid.graphics_manifest['location5']={src:"getCMSImage.php?id=map&img=dinteloord",w:3665,h:2868,preload: false}; // we don't preload the map back, that's just a bit heavy.
	Hybrid.graphics_manifest['location6']={src:"getCMSImage.php?id=map&img=welberg",w:2461,h:1231,preload: false}; // we don't preload the map back, that's just a bit heavy.
	Hybrid.graphics_manifest['new']={src:"getCMSImage.php?id=houses&img=new",w:2461,h:1231,preload: false}; // we don't preload the map back, that's just a bit heavy.
	Hybrid.graphics_manifest['start_background']={src:"start_background.png",w:2048,h:1536,preload: true}; 
	Hybrid.graphics_manifest['start_logo']={src:"start_logo.png",w:1087,h:803,preload: true}; 

	
	// TEXT/Language MANIFEST
	Hybrid.disablePageScrolling(); // as a default, we want this to act as a webapp on iPad and other tablets!
	
	/*-------------------------------------------------------------------------------------
	// Show loading page here.
	----------------------------------------------------------------------------------------*/	
	var loading_bar;
	function showLoadingProgress(perc,first_time)
	{
		Hybrid.debugmessage("loading progress is being called.!");
		if(first_time)
		{
			// build up the loading graphics
			Hybrid.erasePage();
			var bg=Hybrid.createLayer();
			
			// set Content
			var loading_anim=Hybrid.createBox(bg,Hybrid.width/2-265/2,Hybrid.height/2-200/2,265,200);
			Hybrid.setBoxImage(loading_anim, "loading_anim"); // index, you get it from the graphics manifest!
			Hybrid.createTextBox(bg,0,Hybrid.height/2-30,Hybrid.width,75,'Luckiest Guy',colorPalet.loading_bar,"center",50,"Laden..");
			var loading_back=Hybrid.createBox(bg,Hybrid.width/2-200,Hybrid.height-100,400,25);
			Hybrid.debugmessage("loading_back: "+loading_back);
			Hybrid.setBoxColor(loading_back,"#ffffff");
			// temporary info box for remote debugging!
			//layout.loading_what=Hybrid.createTextBox(bg,Hybrid.width/4,2*Hybrid.height/3,Hybrid.width/2,Hybrid.height/5,'"Lucida Sans Unicode", "Lucida Grande", sans-serif',"#000000","center",30,"Loading");
			// Hybrid.setDebugEchoDiv(layout.loading_what.jquery);
			// layout.loading_text="";
			// Hybrid.setBoxColor(layout.loading_what,"#999999");
			Hybrid.createTextBox(bg,0,Hybrid.height-130,Hybrid.width,75,'Luckiest Guy',"#999999","center",20,"<a href='"+Hybrid.supportlink+Hybrid.app_id+"'>(Meld een probleem)</a>");
			loading_bar=Hybrid.createBox(loading_back,1,1,10,10); // initial size doesn't matter
			Hybrid.setBoxColor(loading_bar,colorPalet.loading_bar);
		}
		// always:	
		Hybrid.sizeBox(loading_bar,perc*(400-2),23);
		// for debugging if loading goes wrong!
		//Hybrid.setText(layout.loading_what,Hybrid.preload_message+"-"+url);
//		layout.loading_text="";
		
		// show text of what we are loading, making it easier to do remote debug on an ipad
		
		
	}

	/*-------------------------------------------------------------------------------------
	// init Functions
	----------------------------------------------------------------------------------------*/	
	function initPage(str)
	{
		// disclaimer first!
		Hybrid.debugmessage("all is loaded, initPage function called."+Hybrid.width+"x"+Hybrid.height);
		// we could check if we are in landscape mode really easy:
		if(Hybrid.width>Hybrid.height)
		{
			// work out where to go!
			
			var goto_what="start";
			if(Hybrid.getCookie("lastpage")!=null)
			{
				var goto_what=Hybrid.getCookie("lastpage");
				
				user.last_visit=new Date().getTime()-parseInt(Hybrid.getCookie("lastvisittime"));
				Hybrid.setCookie("lastvisittime",new Date().getTime());
				Hybrid.debugmessage("last visit was: "+user.last_visit+" ago");
				if(user.last_visit>(30*60*1000)) // 30 minutes then you have to start again.
				{
					Hybrid.debugmessage("last visit was: "+user.last_visit+" ago, so we override the start page.");
					start.init();
				}else
				{
					Hybrid.debugmessage("last page was: "+goto_what+"");
					// we should totally LOGIN now, because everywhere else, we are going to need that info..
					
					// login now and THEN goto quizz
					// let's check if there is a cookie!
					// do ajax call!
					var data={};
					data.naam=Hybrid.getCookie("user_naam");
					data.wachtwoord=Hybrid.getCookie("user_wachtwoord");
					Hybrid.debugmessage("login.php?naam="+data.naam+"&wachtwoord="+data.wachtwoord);
					Hybrid.getVars("login.php",data,init_ServerCallback,init_ServerFail)
				}
			}else
			{
				Hybrid.debugmessage("this is your first time!");
				start.init();
			}
		}
		else
		{
			Hybrid.debugmessage("apparently w x h="+Hybrid.width+","+Hybrid.height+" you need to rotate your device");
			ori_mm.init();
		}
	}

	function init_ServerCallback(response)
	{
		var all;
		if(response.succes=="1")
		{
			Hybrid.debugmessage("you are in, we have data now.. we save it here for later..");
			quiz.questions=response.questions; // we have that!
			user.data=response.user; // we have this..
			quiz.nr_of_questions=quiz.questions.length; 
			quiz.question_order=response.user.question_order; // saved it for later!
			// check if any of the questions are out of bounds (this happens sometimes when questions get deleted!)
			
			for(var i=0;i<quiz.question_order.length;i++)
			{
				if(quiz.question_order[i]>=quiz.questions.length)
				{
					quiz.question_order[i]=quiz.questions.length-1;
				}
			}
			//Hybrid.setCookie("nr_of_questions", quiz.questions.length); // remember it for on map!
			
			// show it for debugging!
			for(all in response)
			{
				Hybrid.debugmessage("server response to init-login: "+all+"="+response[all]);
			}
			for(all in response.user)
			{
				Hybrid.debugmessage("server response.user to init-login "+all+"="+response.user[all]);
			}
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
			// all went well, go to the page we were last:
			var goto_what=Hybrid.getCookie("lastpage");
			// and go there
			switch(goto_what)
			{
				case "quiz":
					quiz.init();
				break;
				case "contact":
					contact.init();
				break;
//				case "welcome":
//					wwjw.page_extras="show_welcome";
//					map.init();
//				break;
				case "map":
					map.init();
				break;
				case "high":
					high.init();
				break;
				case "new_game":
					start.init();
					//new_game.init();
				break;
				case "resume_game":
					//resume_game.init();
					start.init();
				break;
				default:
					start.init();
			}
		//----------------------------------------------			
			
		}else
		{
			for(all in response)
				Hybrid.debugmessage(all+"="+response[all]);
			//Hybrid.showWarning("Init quiz mislukt: Combinatie naam en wachtwoord niet gevonden.");
			// no warnning necessary, just no cookie!
			start.init();
	
		}
	}
	function init_ServerFail(response)
	{
		Hybrid.debugmessage("init_ServerFail..");
		Hybrid.showWarning("Geen internet verbinding,\n Probeer later nog eens.");
	}	
	

	
