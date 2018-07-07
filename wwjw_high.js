	//high----------------------------------
	var high={};
	var empty_list=[];
	high.init=initHigh;
	high.bar_height=80;
	high.tabs=["plaats","school","speler"];

	high.label="all"; // starts on all_all!
	high.id="all";
	high.rank=-1;
	high.selected_tab=2;
	
	function initHigh()
	{
		Hybrid.debugmessage("START high called!");
		Hybrid.setCookie("lastpage","high");

		Hybrid.playSound("next_question");
		
		var data={};
		data.page="high";
		data.user=user.data.naam;
		data.stat="page";
		Hybrid.setVars("add_stat.php", data);

		
		var i;
		empty_list=[];
		for(i=0;i<12;i++)empty_list.push({naam:"loading",school:0,groep:0,plaats:0,punten:-1});
		high.data=empty_list; // we would show an empty list now..
		
		// read the highscores
		var data={};
		data.label=high.label;
		data.id=high.id;
		data.naam=user.data.naam;
		Hybrid.getVars("get_highscores.php",data,high_LoadSucces,high_LoadFail);// we don't want to know about any stuff.
		
		Hybrid.resizeFunction=handleResizehigh;
		handleResizehigh(); // this builds the page 
		//high_showHighscores(); // show the loading data..
	}
	function high_LoadSucces(response)
	{
		var id;
		if(parseInt(response.succes)==1)
		{	
			high.rank=-1;
			Hybrid.debugmessage("got your highscore data");
			high.data=response.high;
			high.rank=parseInt(response.rank);
			high_showHighscores();
		}else
		{
			Hybrid.debugmessage("something went wrong: "+response.error_message);
		}
	}
	function high_LoadFail(response)
	{
		//window.alert("Communication with the server interupted, try again later.");
		Hybrid.debugmessage("Request failed..");
	}			
	function handleResizehigh()
	{
		Hybrid.debugmessage("page high build up:"+Hybrid.width+"x"+Hybrid.height);
		Hybrid.erasePage();
		layout={}; // erase any old layout!
		layout.back=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.back,palet.green); // this should be set to cover all, but that's for later!
		
		var w,h,x,y,f,tx,ty,string;
		w=Hybrid.width;
		h=343; // little bit different
		layout.split_y=343;
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
		layout.high=Hybrid.createBox(layout.back,x,y,w,h);

		// set the snap to aim for!
		//Hybrid.setBoxColor(layout.high,"rgba(255,255,255,0.1)"); // this should be set to cover all, but that's for later!
		//Hybrid.setBoxImage(layout.high,"snap"); // this should be set to cover all, but that's for later!
		
		// tabs
		layout.split_y=343;
		layout.tab=[];
		var i;
		for(i=0;i<3;i++)
		{
			x=2048-(334+60)*(i+1);
			y=layout.split_y-76;
			w=334;
			h=132;
			layout.tab[i]=Hybrid.createBox(layout.high,x,y,w,h);
			if(high.selected_tab==i)
			{
				Hybrid.setBoxColor(layout.tab[i],palet.green); // this should be set to cover all, but that's for later!
			}else
			{
				Hybrid.setBoxColor(layout.tab[i],palet.pale_green); // this should be set to cover all, but that's for later!
			}
			Hybrid.setBoxRounded(layout.tab[i],50);
			Hybrid.makeButton(layout.tab[i],"button_tab"+i,handleButtonshigh);
			// highscores Title
			x=0;
			y=15;
			w=334;
			h=132;
			string="Twee meerminnen";
			layout.title=Hybrid.createTextBox(layout.tab[i],x,y,w,h,fonts.head,"#fff","center",fontsz.highscores_mid,high.tabs[i]);
		}
	
		// green box over tabs
		x=0;
		y=layout.split_y; 
		w=2048;
		h=150;
		layout.tabs_over=Hybrid.createBox(layout.high,x,y,w,h);
		Hybrid.setBoxColor(layout.tabs_over,palet.green); // this should be set to cover all, but that's for later!

		// stuff in the bar
		layout.user_name=Hybrid.createTextBox(layout.high,60,20,450,100,fonts.head,"#fff","left",fontsz.head,user.data.naam);
		layout.vraag_nr=Hybrid.createTextBox(layout.high,440,25,350,100,fonts.body,"#fff","right",fontsz.menu,"Vraag x/x");
		layout.score_label=Hybrid.createTextBox(layout.high,1340,25,600,100,fonts.body,"#fff","right",fontsz.menu,"Score <em>"+user.data.punten+"</em> punten / <em>"+user.data.stenen+"</em> stenen");

		// Question Progress
		w=412;
		h=30;
		x=(2048-w)/2;
		y=(high.bar_height-h)/2+5;
		layout.progress_total=Hybrid.createBox(layout.high,x,y,w,h);
		Hybrid.setBoxColor(layout.progress_total,"#fff"); 
		layout.progress=Hybrid.createBox(layout.high,x,y,w*(12/30),h);
		Hybrid.setBoxColor(layout.progress,palet.pale_yellow); 

		// SET Question Progress
		var show_vraag_nr=(parseInt(user.data.progress)+1);
		if(show_vraag_nr>quiz.questions.length) show_vraag_nr=quiz.questions.length;
		Hybrid.setText(layout.vraag_nr,"Vraag "+show_vraag_nr+"/"+quiz.questions.length );
		var w=412;
		w=w*( parseInt( user.data.progress )/parseInt( quiz.questions.length ) );
		var h=30;
		Hybrid.sizeBox(layout.progress,w,h);		
		
		
		// highscores Title
		x=88;
		y=243;
		w=854;
		h=86;
		layout.title=Hybrid.createTextBox(layout.high,x,y,w,h,fonts.head,"#fff","left",fontsz.highscores_big,"Highscores");

		
		// variable placing, but this is the placing when rank>=10
		x=0;
		y=960;
		w=2048;
		h=135;
		layout.own_score=Hybrid.createCanvas(layout.high,x,y,w,h-1);
		// fill with the right colors.. // this should be shifted to the same hieight as score of person watching..
		var ctx=layout.own_score.context;
		var blur_colors=["96c577","94c376","92c174","8fbd71","8bb96d","86b368","80ad62","7eab61"];// licht naar donker!
		var i;
		var start_dist=12;
		for(i=0;i<blur_colors.length;i++)
		{
			var dist=start_dist+i*3;
			ctx.strokeStyle="#"+blur_colors[blur_colors.length-i-1];
			ctx.lineWidth=dist+1;
			x=40+dist;
			y=5+dist;
			w=2048-80-dist*2;
			h=120-dist*2;
			ctx.beginPath();
				Hybrid.drawRoundedRect(ctx,x, y, w, h,60-dist);
			ctx.stroke();
		}
		
		// then a white line!
		ctx.strokeStyle="#FFFFFF";
		ctx.lineWidth=10;
		x=40;
		y=5;
		w=2048-80;
		h=120;
		ctx.beginPath();
		Hybrid.drawRoundedRect(ctx,x, y, w, h,61);
		ctx.stroke();
		
		// create canvasses for highscore DATA!
		layout.score=[];
		for(i=0;i<10;i++)
		{
			x=148;
			h=52;
			y=405+i*h;
			w=1840;
			layout.score[i]={};
			layout.score[i].canvas=Hybrid.createCanvas(layout.high,x,y,w,h-1);
			// just create, don't fill!
		}
		
		// we might need an extra canvas, to display a score outside of the rank..
		y=998; // def pos!
		layout.score_outside_rank=Hybrid.createCanvas(layout.high,x,y,w,h-1);

	
		// create menubutton high
		w=Hybrid.graphics_manifest['buttons'].ss['stop'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['stop'][0][3];
		Hybrid.debugmessage("distance from border: "+(300-w));
		x=2048-64-w;
		y=137;
		Hybrid.createSpriteButton(layout.high,x,y,w,h,'buttons',"stop","button_stop",handleButtonshigh);

		w=Hybrid.graphics_manifest['buttons'].ss['city'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['city'][0][3];
		x=2048-64-32-Hybrid.graphics_manifest['buttons'].ss['stop'][0][2]-Hybrid.graphics_manifest['buttons'].ss['city'][0][2];
		y=137;
		Hybrid.createSpriteButton(layout.high,x,y,w,h,'buttons',"city","button_city",handleButtonshigh);

		// create button answer
		w=Hybrid.graphics_manifest['buttons'].ss['continue'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['continue'][0][3];
		x=2048-60-w;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.high,x,y,w,h,'buttons',"continue","button_continue",handleButtonshigh);
	}
	function formatScore(nr)
	{
		nr=parseInt(nr);
		return nr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
	function formatSchool(nr)
	{
		var i;
		for(i=0;i<new_game.cms_data.school.length;i++)
		{
			if(new_game.cms_data.school[i].id==nr)
			{
				return new_game.cms_data.school[i].label;
			}
		}
		return "onbekende school"+nr;
	}
	function formatPlace(nr)
	{
		var city_names=["none","Steenbergen","De Heen","Nieuw-Vossemeer","Kruisland","Dinteloord","Welberg"];
		if(parseInt(nr)>=0 && parseInt(nr)<city_names.length)
		{
			return city_names[nr];
		}else
		{
			return "---"
		}
	}
	function drawScoreItem(ctx,nr,naam,score,school,plaats)
	{
		ctx.fillStyle="#FFFFFF";
		// set letters as canvas filltext, because it's easier to aim that way.
		
		//nr
		x=0;
		y=40;
		ctx.font=fontsz.highscores_small+"px "+fonts.body;
		ctx.textAlign="left";
		ctx.fillText(nr,x,y);

		// name
		x=90;// was 70, but we need the space!
		y=40;
		ctx.font=fontsz.highscores_mid+"px "+fonts.head;
		ctx.textAlign="left";
		ctx.fillText(naam,x,y);
			
		// line under!
		var line_width=ctx.measureText(naam).width;
		ctx.beginPath();
		ctx.strokeStyle="#FFFFFF";
		ctx.lineWidth=2;
		ctx.moveTo(x,y+5);
		ctx.lineTo(x+line_width,y+5);
		ctx.stroke();

		// score
		x=704;
		y=40;
		ctx.font=fontsz.highscores_mid+"px "+fonts.head;
		ctx.textAlign="right";
		ctx.fillText(formatScore(score),x,y);

		// pnt
		x=720;
		y=40;
		ctx.font=fontsz.highscores_small+"px "+fonts.body;
		ctx.textAlign="left";
		ctx.fillText("pnt",x,y);

		// school
		x=898;
		y=40;
		ctx.font=fontsz.highscores_small+"px "+fonts.body;
		ctx.textAlign="left";
		ctx.fillText(formatSchool(school),x,y);

		// plaats
		x=1412;
		y=40;
		ctx.font=fontsz.highscores_small+"px "+fonts.body;
		ctx.textAlign="left";
		ctx.fillText(formatPlace(plaats),x,y);
	}
	function high_showHighscores()
	{
		// show highscores entry!
		var i;
		for(i=0;i<10;i++)
		{
			// erase the canvas!
			Hybrid.clearCanvas(layout.score[i].canvas);
			var ctx=layout.score[i].canvas.context;
			if(i<high.data.length)
				drawScoreItem(ctx,(i+1),high.data[i].naam,high.data[i].punten,high.data[i].school,high.data[i].plaats);
		}
		// now render the own score on a seperate canvas..
		
		Hybrid.clearCanvas(layout.score_outside_rank);
		Hybrid.debugmessage("high.rank="+high.rank);
		if(high.rank!=-1)
		{
			ctx=layout.score_outside_rank.context;
			drawScoreItem(ctx,(high.rank+1),user.data.naam,user.data.punten,user.data.school,user.data.plaats);
		}
		
		// now that everything is drawn..
		// we might want to swap the order of the indicator of YOU
		var x,y,h;
		if(high.rank>9)
		{
			// set to default position and visible!
			Hybrid.setVisible(layout.score_outside_rank,true);
			x=0;
			y=960;
			Hybrid.moveBox(layout.own_score,x,y);
			
			h=52;
			x=148;
			y=405
			for(i=0;i<10;i++)
			{
				Hybrid.moveBox(layout.score[i].canvas,x,y);
				y=y+h;
			}
		}else
		{
			// set to position inside list (and doesn't need to be visible!)
			Hybrid.setVisible(layout.score_outside_rank,false);
			h=52;
			x=148;
			y=405
			for(i=0;i<10;i++)
			{
				Hybrid.moveBox(layout.score[i].canvas,x,y);
				y=y+h;
				if((i+1)==high.rank) y=y+50;// extra space!
				if(i==high.rank)
				{
					Hybrid.debugmessage("i==high.rank.. "+i+"=="+high.rank+" so more space needed here!");
					y=y+50;// extra space!
					Hybrid.moveBox(layout.own_score,0,y-145);
				}				
			}
		}
		Hybrid.setVisible(layout.own_score,true); // always true, but turned off for loading..
	}
	function highSelectTab(nr)
	{
		Hybrid.debugmessage("highSelectTab"+nr);
		high.selected_tab=nr;
		// color the tabs
		var i;
		for(i=0;i<3;i++)
		{
			if(high.selected_tab==i)
			{
				Hybrid.setBoxColor(layout.tab[i],palet.green); // this should be set to cover all, but that's for later!
			}else
			{
				Hybrid.setBoxColor(layout.tab[i],palet.pale_green); // this should be set to cover all, but that's for later!
			}
		}
		// we should also show the right data!
		switch(high.selected_tab)
		{
			case 1:
				high.label="school"; // starts on all_all!
				high.id=user.data.school;
			break;
			case 0:
				high.label="plaats"; // starts on all_all!
				high.id=user.data.plaats;
			break;
			default:
				high.label="all"; // starts on all_all!
				high.id="all";
		}
		high.rank=-1;
		high.data=empty_list;
		// erase canvases
		var i;
		for(i=0;i<10;i++)
		{
			Hybrid.clearCanvas(layout.score[i].canvas);
		}
		Hybrid.clearCanvas(layout.score_outside_rank);
		Hybrid.setVisible(layout.own_score,false); // erase all!
	
		// now reload the highscores
		var data={};
		data.label=high.label;
		data.id=high.id;
		data.naam=user.data.naam;
		Hybrid.debugmessage("get_highscores.php?naam="+data.naam+"&id="+data.id+"&label="+data.label);
		Hybrid.getVars("get_highscores.php",data,high_LoadSucces,high_LoadFail);// we don't want to know about any stuff.
		
	}
	function handleButtonshigh(label)
	{
		switch(label)
		{
			case "button_tab0":
			case "button_tab1":
			case "button_tab2":
				var nr=label.substr(10,1);
				highSelectTab(parseInt(nr));
			break;				
			case "button_continue":
				var nr=parseInt(user.data.progress);
				if(nr<quiz.questions.length)
				{
					quiz.init();
				}else
				{
					map.init();
				}
			break;				
			case "button_city":
				map.init();
			break;				
			case "button_highscores":
				high.init();
			break;				
			case "button_stop":
				start.init();
			break;				
			default:
				Hybrid.debugmessage("handleButtonshigh: "+label);
		}
	}
	

