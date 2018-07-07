	//HELPER FUNCTIONS AND GLOBALS----------------------------------
	var layout={}; // will be set by each page.
	var palet={};
	var wwjw={};
	wwjw.page_extras="";
	
	palet.dark_blue="#01286f";
	palet.dark_red="#a92c29";
	palet.wrong_text="#951925";
	palet.right_text="#437a40";
	palet.pale_blue="#5594bf";
	palet.grey_blue="#597688";
	palet.pale_green="#c9e5b6";
	palet.green="#96c577";
	palet.map_orange="#df8d91";
	palet.pale_grey="#98a192";
	palet.popup_back="#dddddd";
	palet.pale_gray=palet.pale_grey; // this is a common typo I tend to make..
	
	palet.body="#2f2f2f";
	palet.head=palet.dark_blue;
	palet.pale_yellow="#ffec96";
	palet.back_green="#98c475";
	
	var fonts={body:"Tahoma, Verdana, Segoe, sans-serif", head: "Luckiest Guy"};
	var fontsz={};
	fontsz.highscores_big=75;
	fontsz.highscores_mid=50;
	fontsz.highscores_small=42;
	fontsz.quiz_big=75;
	fontsz.quiz_mid=50;
	fontsz.quiz_small=42;
	fontsz.quiz_very_small=35;
	fontsz.edit=68;
	fontsz.head=42;
	fontsz.menu=30;
	fontsz.body=26.5;
	
	function helpers_createStartSchermBack()
	{
		// must be the first function you call.
		// positions the background, work OVER it on a new layer.
		// now create and set the layer
		layout.back=Hybrid.createLayer();
	
		// we set the size SO, that the image centered box will display no matter WHAT!
		
		var container={}; // in this case the hybrid
		var box={}; // in this case the total map
		var content={}; // in this case part of the map!
		container.x=0;
		container.y=0;
		container.w=Hybrid.width;
		container.h=Hybrid.height;
		container.s=1;

		box.x=0;
		box.y=00;
		box.w=2048;
		box.h=1536;
		box.s=1; // we need to calculate THIS from content!
				
		content.x=158;
		content.y=450;
		content.w=1788;// expressed in pixels of box!
		content.h=824;
		content.s=1;
		
		// do calculation!
		var fx=container.w/content.w;
		var fy=container.h/content.h;
		var f=fx;
		if(fy<fx) f=fy;
		f=f*0.96; // keep some margin around!
		var sized={};
		sized.w=content.w*f;
		sized.h=content.h*f;
		sized.x=content.x*f;
		sized.y=content.y*f;
		// set position and scale of box so that content is centered in container!
		box.s=f;
		box.x=-sized.x+(container.w-sized.w)/2;//-sized.x;
		box.y=-sized.y+(container.h-sized.h)/2;

		var w,h,x,y;
		// previous (simple) formula
//		f=2048/w;
//		w=2048*f;
//		h=1536*f;
//		x=0;
//		y=h-Hybrid.width;

		w=2048*f;
		h=1536*f;
		x=-sized.x+(container.w-sized.w)/2;//-sized.x;
		y=-sized.y+(container.h-sized.h)/2;

		layout.back_image=Hybrid.createBox(layout.back,x,y,w,h);
		Hybrid.setBoxColor(layout.back,"#98c475"); // this should be set to cover all, but that's for later!
		
		Hybrid.setBoxImage(layout.back_image,"start_background"); // this should be set to cover all, but that's for later!

		
	}

	
