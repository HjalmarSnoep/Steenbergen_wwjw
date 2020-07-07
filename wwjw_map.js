	//map----------------------------------
	var map = {};
	map.init = initMap;
	map.mouse = {};
	map.framecounter = 0;
	map.bar_height = 80;
	map.menu_width = 530;
	map.button_height = 428; // 424
	map.menu_offset = 0;
	map.menu_speed = 0;
	map.state = "init";
	map.menu_height = Hybrid.height;
	map.dragging = -1; // no item being dragged!
	map.drag_object = {}; // store stuff here
	map.houses = [];
	map.current_map = -1; // meaning, your own choice.., set in init directly!
	map.shop = []; // we want to fill this ONLY once!
	map.plaats = ["null", "Steenbergen", "De Heen", "Nieuw Vossemeer", "Kruisland", "Dinteloord", "Welberg"]; // op volgorde!

	function initMap() {
	    var data = {};
	    data.page = "map";
	    data.user = user.data.naam;
	    data.stat = "page";
	    Hybrid.setVars("add_stat.php", data);

	    if (map.current_map == -1) {
	        map.current_map = user.data.plaats; // make sure we show the current map of the user!
	    }

	    Hybrid.playSound("next_question");
	    Hybrid.debugmessage("START map called! Plaats:" + map.current_map);
	    Hybrid.setCookie("lastpage", "map");
	    Hybrid.resizeFunction = handleResizemap;

	    // set the location, can be 6 different ones!
	    map.back_index = 'location' + map.current_map;
	    //		Hybrid.debugmessage("Hybrid.graphics_manifest['"+map.back_index+"']: ");
	    //Hybrid.debugmessage(Hybrid.graphics_manifest[map.back_index]); // this way it prints the internal structure as well!


	    if (!Hybrid.graphics_manifest.hasOwnProperty(map.back_index)) {
	        Hybrid.throwError(map.back_index + " not defined in graphics_manifest");
	    }
	    map.back_w = Hybrid.graphics_manifest[map.back_index].w; // all we need to do is
	    map.back_h = Hybrid.graphics_manifest[map.back_index].h;
	    // center it, kind of..
	    map.offset = {
	        x: Hybrid.graphics_manifest[map.back_index].w / 2 - Hybrid.width / 2,
	        y: Hybrid.graphics_manifest[map.back_index].h / 2 - Hybrid.height / 2
	    };


	    // fix old user.data.bought_per_city[map.current_map]
	    Hybrid.debugmessage("user.data.bought_per_city[map.current_map]: " + JSON.stringify(user.data.bought_per_city));
	    //user.data.bought_per_city[map.current_map]

	    map.houses = [];
	    // default houses will be placed in map_fillShop!
	    // place the user houses from the server (user.data.bought_per_city[map.current_map])!
	    var i = 0;
	    for (i = 0; i < user.data.bought_per_city[map.current_map].length; i++) {
	        //			Hybrid.debugmessage("plaats gekochte huizen: "+user.data.bought_per_city[map.current_map][i].id+" ->"+user.data.bought_per_city[map.current_map][i].lx+","+user.data.bought_per_city[map.current_map][i].ly);
	        map.houses.push({
	            id: "hous_" + user.data.bought_per_city[map.current_map][i].id,
	            lx: parseInt(user.data.bought_per_city[map.current_map][i].lx),
	            ly: parseInt(user.data.bought_per_city[map.current_map][i].ly),
	            moveable: true
	        });
	    }

	    console.log("map.current_map: " + map.current_map);
	    console.log("user houses in this city: " + JSON.stringify(map.houses));


	    // generate some random houses for testing..
	    //var i;
	    //for(i=0;i<25;i++)
	    //{
	    //	map.houses.push({id:"house",lx:Math.random()*map.back_w,ly:Math.random()*map.back_h});
	    //}
	    // now we need to sort th	em in Y!
	    map.houses.sort(map_sortOnY);

	    handleResizemap(); // this builds the page and sets the loop
	    if (1) //map.shop.length==0)  // we always need to do this, because we also get the default houses!
	        map_fillShop(); // only call this once it dynamically loads all you need!
	    else {
	        Hybrid.debugmessage("No need to load " + map.shop.length);
	        map.state = "displaying";
	        handleResizemap();
	        map_UpdateScrollbar(); // so this don't happen!
	    }
	}

	function map_sortOnY(a, b) {
	    if (a.ly > b.ly) return 1;
	    if (a.ly < b.ly) return -1;
	    return 0;
	}

	function map_fillShop() {
	    var data = {};
	    map.state = "loading";
	    //if(layout.ismap==true) Hybrid.setVisible(layout.loading_anim, true); // index, you get it from the graphics manifest!

	    data.city = map.current_map;
	    //Hybrid.debugmessage("call get_map_images_per_city.php?city="+data.city);
	    Hybrid.getVars("get_map_images_per_city.php?ck=" + (new Date).getTime(), data, map_ServerCallback, map_ServerFail); // cachekiller, this is kind of important!
	}

	function map_ServerCallback(response) {
	    Hybrid.debugmessage("map_fillShop got data!" + JSON.stringify(response));
	    var id;
	    var default_houses_need_to_be_placed = "";
	    if (response.succes == "1") {
	        Hybrid.debugmessage("Got back couple images object: " + response.images);
	        for (id in response.images) {
	            Hybrid.debugmessage("------------" + id);
	            var im = response.images[id];
	            for (var b in im) {
	                if (b != "src")
	                    Hybrid.debugmessage(b + "=" + im[b]);
	            }
	            /*
			 "images": {
				"hous_fOC1afuLwj": {
					"src": "data: ;base64-Csdfry4",
					"w": "287",
					"h": "221",
					"rx": "160",
					"ry": "216",
					"lx": "0",
					"ly": "0",
					"preload": true,
					"city": "7",
					"prijs": "250",
					"naam": "stadion.png",
					"kind": "sprite"
				}
				*/
	            // always add it to the manifest, it will only REALLY add it to the manifest if it's not already got an equivalent!!!
	            var o = {};
	            o.src = im.src;
	            o.id = id;
	            o.naam = im.naam;
	            o.w = parseInt(im.w);
	            o.h = parseInt(im.h);
	            o.rx = parseInt(im.rx);
	            o.ry = parseInt(im.ry);
	            if (o.rx > o.w || o.rx < o.w) o.rx = o.w / 2; // default is in the middle under!
	            if (o.ry > o.h || o.ry < o.h) o.ry = o.h;
	            o.lx = parseInt(im.lx);
	            o.ly = parseInt(im.ly);
	            o.preload = true;
	            o.kind = "sprite";
	            o.ss = {};
	            o.ss.house = [
	                [0, 0, o.w, o.h, 0, o.rx, o.ry]
	            ];


	            Hybrid.addToManifest(o, id, "dataURL", map_ImageLoadedCallback);
	            // this will automatically load the image, use
	            // Hybrid.checkAllImagesLoaded to see if you can continue safely.

	            if (parseInt(im.city) == 7) {
	                // check if this naam is allready in the shop.
	                var i;
	                var in_shop = false;
	                for (i = 0; i < map.shop.length; i++) {
	                    //						Hybrid.debugmessage("getPriceFromId  "+map.shop[i].img+"=="+id);
	                    if (map.shop[i].img == id) in_shop = true;
	                }
	                if (in_shop == false) {
	                    // add this to the shop!
	                    // if not present yet!
	                    Hybrid.debugmessage("add House to shop: " + im.naam);
	                    var o = {};
	                    o.naam = im.naam;
	                    o.prijs = parseInt(im.prijs);
	                    o.unlock = parseInt(im.unlock);
	                    o.unlocked = false; // (except if you HAVE more points allready.
	                    if (user.data.punten >= o.unlock) {
	                        o.unlocked = true; // we need to know the status, so we can see if something NEW is unlocked in the game!
	                    }
	                    o.img = id;
	                    map.shop.push(o);
	                }
	            } else {
	                if (o.lx == 0 && o.ly == 0) {
	                    // add to shop as a ONCE placeable house..
	                    // this is an exception ONLY to benefit the CMS!
	                    Hybrid.debugmessage("House " + o.naam + " needs to be placed");
	                    default_houses_need_to_be_placed += "'" + o.naam + "' ";
	                    var o = {};
	                    o.naam = im.naam;
	                    o.prijs = 0;
	                    o.img = id;
	                    o.setpos = true; // this will be detected on drop!
	                    map.shop.push(o);
	                } else {
	                    // this is a default house!
	                    Hybrid.debugmessage("add default House " + o.naam + " to map at " + o.lx + ", " + o.ly);
	                    o.moveable = false;
	                    map.houses.push(o);
	                    // we need to sort the houses on y!
	                }
	            }
	        }
	        Hybrid.debugmessage("End of add houses!");

	        // now we sort the houses according to price!
	        map.shop.sort(byUnlock);
	        // after this it might be handy to redraw the shop???

	        map.houses.sort(map_sortOnY); // sort the on map houses as well!
	        // we need to redraw the map??

	        // we need to update the scrollbar!!



	        if (default_houses_need_to_be_placed != "") {
	            Hybrid.showWarning("Some default houses need to be placed:\n" + default_houses_need_to_be_placed + "\nYou can find these in the shop until you place them.");
	        }
	    } else {
	        var all;
	        for (all in response)
	            Hybrid.debugmessage(all + "=" + response[all]);
	    }
	    if (layout.ismap == true) {
	        //Hybrid.setVisible(layout.loading_anim, true); // index, you get it from the graphics manifest!
	        map_drawHouses(); // to show the new sorting, even if it wasn't the first visit!
	    }
	}

	function byUnlock(a, b) {
	    if (a.unlock > b.unlock) return 1;
	    if (a.unlock < b.unlock) return -1;
	    return 0;
	}

	function map_ImageLoadedCallback() {
	    // this can be called from the map, OR ANY other page.
	    // if the last page wasn't map, we shouldn't resize and rebuild!)
	    if (layout.ismap == true) {
	        Hybrid.debugmessage("extra image just preloaded, jeee!");
	        if (Hybrid.checkAllImagesLoaded() == true) {
	            Hybrid.debugmessage("all images loaded");
	            map.state = "displaying";
	            // we need to refresh the shop and the map, the loop takes care of the map, but
	            // we need to manually refresh the shop.
	            // we should post a timeout loop that will only handleResize ONCE!
	            // because else. wowowowowo!
	            map_drawHouses();
	            handleResizemap();
	            map_UpdateScrollbar();
	        }
	    } else {
	        if (Hybrid.checkAllImagesLoaded() == true) {
	            // in chrome this is all I get, but I need to follow protocol!
	            Hybrid.debugmessage("DONE quietly filling the shop.." + map.shop.length);
	        } else {
	            Hybrid.debugmessage("shhh, quietly filling the shop.." + map.shop.length);
	        }
	    }
	}

	function map_ServerFail(response) {
	    //if(layout.ismap==true) Hybrid.setVisible(layout.loading_anim, false); // index, you get it from the graphics manifest!
	    //window.alert("Communication with the server interupted, try again later.");
	    Hybrid.debugmessage("Request failed..");

	}

	function mapLoop() {
	    var refreshMenu = false;

	    if (Math.abs(map.menu_speed) > 1) {
	        //Hybrid.debugmessage("map.menu_speed"+map.menu_speed);
	        map.menu_offset -= map.menu_speed;
	        map.menu_speed *= 0.9;
	        refreshMenu = true;
	    }
	    if (map.menu_offset < 0) {
	        map.menu_offset *= 0.9;
	        map.menu_speed = 0;
	        refreshMenu = true;
	    }
	    if (map.menu_offset > (map.menu_height - layout.menu_viewport)) {
	        map.menu_offset = (map.menu_height - layout.menu_viewport) * 0.1 + 0.9 * map.menu_offset; // soft bounce
	        map.menu_speed = 0;
	        refreshMenu = true;
	    }
	    if (refreshMenu) {
	        Hybrid.moveBox(layout.menu_inside, 0, -map.menu_offset);
	    }
	    // do the map!
	    var refreshMap = false;
	    if (map.just_changed) {
	        refreshMap = true;
	        map.just_changed = false; // once!
	    }
	    if (Math.abs(map.offset.dx) > 1 || Math.abs(map.offset.dy) > 1) {
	        map.offset.x -= map.offset.dx;
	        map.offset.y -= map.offset.dy;
	        map.offset.dx *= 0.9;
	        map.offset.dy *= 0.9;
	        refreshMap = true;
	    }

	    if (map.offset.x < 0) {
	        map.offset.x *= 0.9;
	        map.offset.dx = 0;
	        refreshMap = true;
	    }
	    if (map.offset.x > (map.back_w - layout.map.w)) {
	        map.offset.x = 0.9 * map.offset.x + 0.1 * (map.back_w - layout.map.w);
	        map.offset.dx = 0;
	        refreshMap = true;
	    }
	    if (map.offset.y < 0) {
	        map.offset.y *= 0.9;
	        map.offset.dy = 0;
	        refreshMap = true;
	    }
	    if (map.offset.y > (map.back_h - layout.map.h)) {
	        map.offset.y = 0.9 * map.offset.y + 0.1 * (map.back_h - layout.map.h);
	        map.offset.dy = 0;
	        refreshMap = true;
	    }

	    switch (map.state) {
	        case "loading":
	            // we need to periodically check if all images in the manifest are loaded.
	            // if so, we need to update the shop, and the map!
	            refreshMap = false;
	            break;
	    }

	    if (refreshMap) {
	        Hybrid.moveBox(layout.map_inside, -map.offset.x, -map.offset.y);
	        // we ALSO need to move everything on the canvas and check what needs to be drawn!
	        map_drawHouses();
	        map_drawScrollbar();
	    }
	}

	function map_drawHouses() {
	    var i;
	    if (typeof(layout.map_canvas.context) === "undefined") {
	        // sorry this happens somehow on safari!
	        Hybrid.debugmessage("safari crash prevention.");
	        return;
	    }
	    var ctx = layout.map_canvas.context;
	    Hybrid.clearCanvas(layout.map_canvas);
	    //		console.log("redrawing: "+map.houses.length+ " houses");
	    for (i = 0; i < map.houses.length; i++) {
	        if (map.houses[i].id == "house") {
	            ctx.fillStyle = "#f00";
	            ctx.fillRect(map.houses[i].lx - map.offset.x - 10, map.houses[i].ly - map.offset.y - 10, 20, 20);
	        } else {
	            if (typeof(map.houses[i]) !== "undefined") {
	                // draw a REAL house 
	                Hybrid.drawSprite(layout.map_canvas, map.houses[i].id, "house", map.houses[i].lx - map.offset.x, map.houses[i].ly - map.offset.y, 0, 0, 1);
	            } else {
	                Hybrid.debugmessage("house " + i + " not loaded, so cannot draw! ");
	            }
	        }
	        // draw the registration marker to show where to click for relocating.
	        //	ctx.fillStyle="#fff";
	        //	ctx.fillRect(map.houses[i].lx-map.offset.x-5,map.houses[i].ly-map.offset.y-5,10,10);

	    }
	}

	function handleResizemap() {
	    // we shouldn't do this too soon in a row, that's sillyness.
	    // the allimagesloaded creates false positives and fast repetitions!.
	    var pass_test = false;
	    if (typeof(layout.last_resize) === "undefined") {
	        pass_test = true;
	    } else {
	        var dt = layout.last_resize - (new Date()).getTime();
	        if (dt > 100) {
	            pass_test = true;
	        }
	    }
	    if (pass_test == false) {
	        Hybrid.debugmessage("too soon!");
	        return;
	    } else {
	        // keep time for next visit!
	        layout.last_resize = (new Date()).getTime();
	    }

	    Hybrid.debugmessage("page map build up:" + Hybrid.width + "x" + Hybrid.height);
	    Hybrid.erasePage(); // this would remove the old canvas.

	    layout = {}; // erase any old layout!
	    layout.ismap = true; // this makes it possible to determin if we have to draw on loading the houses, dirty hack, but will work!


	    //		layout.scrollwidth=Hybrid.getScrollbarWidth(); // get's the scrollbar width by experimenting!
	    // we are going to do it the HARD way, using a top hotspot.

	    layout.back = Hybrid.createLayer();
	    Hybrid.setBoxColor(layout.back, palet.pale_green); // this should be set to cover all, but that's for later!

	    var w, h, x, y, f, tx, ty, string;
	    w = Hybrid.width;
	    h = map.bar_height;
	    x = 0;
	    y = 0;
	    layout.bar = Hybrid.createBox(layout.back, x, y, w, h);
	    Hybrid.setBoxColor(layout.bar, palet.pale_blue); // this should be set to cover all, but that's for later!

	    // stuff in the bar
	    var city = map.plaats[map.current_map];
	    layout.user_name = Hybrid.createTextBox(layout.bar, 100, 20, 550, 100, fonts.head, "#fff", "left", fontsz.head, city); // Hybrid.getCookie("user_naam")+":"



	    // Question Progress
	    w = 412;
	    h = 30;
	    x = (Hybrid.width - 1000);
	    y = (quiz.bar_height - h) / 2 + 5;
	    Hybrid.debugmessage("create progress boxes.");
	    layout.progress_total = Hybrid.createBox(layout.bar, x, y, w, h);
	    Hybrid.setBoxColor(layout.progress_total, "#fff");
	    Hybrid.debugmessage("create progress box2");
	    layout.progress = Hybrid.createBox(layout.bar, x, y, w * (parseInt(user.data.progress) / 30), h);
	    Hybrid.setBoxColor(layout.progress, palet.pale_yellow);

	    Hybrid.debugmessage("create progress text");
	    layout.vraag_nr = Hybrid.createTextBox(layout.bar, x - 400, 25, 350, 100, fonts.body, "#fff", "right", fontsz.menu, "Vraag x/x");



	    // SET Question Progress
	    var show_vraag_nr = (parseInt(user.data.progress) + 1);
	    if (show_vraag_nr > quiz.questions.length) show_vraag_nr = quiz.question_order.length;
	    Hybrid.setText(layout.vraag_nr, "Vraag " + show_vraag_nr + "/" + quiz.question_order.length);
	    var w = 412;
	    w = w * (parseInt(user.data.progress) / parseInt(quiz.question_order.length));
	    var h = 30;
	    Hybrid.sizeBox(layout.progress, w, h);

	    layout.score_label = Hybrid.createTextBox(layout.bar, Hybrid.width - 680, 25, 600, 100, fonts.body, "#fff", "right", fontsz.menu, "Score <em>" + parseInt(user.data.punten) + "</em> punten / <em>" + parseInt(user.data.stenen) + "</em> stenen");



	    // make the switch city control!


	    //		w=Hybrid.graphics_manifest['buttons'].ss['high'][0][2];
	    //		h=Hybrid.graphics_manifest['buttons'].ss['high'][0][3];
	    //		x=x-w-30;
	    //		Hybrid.createSpriteButton(layout.hotspot,x,y,w,h,'buttons',"high","button_high",handleButtonsMap);



	    // background and scrollbox of menu buttons
	    w = map.menu_width; //+layout.scrollwidth
	    h = Hybrid.height - map.bar_height;
	    x = 0;
	    y = map.bar_height;
	    layout.menu_viewport = h;
	    layout.menu = Hybrid.createBox(layout.back, x, y, w, h);
	    Hybrid.setBoxColor(layout.menu, palet.grey_blue); // this should be set to cover all, but that's for later!
	    //Hybrid.setBoxScrollable(layout.menu,false,true);

	    // build a bunch of content to test easiest scrolling!		
	    map.menu_height = map.shop.length * map.button_height + 10;
	    Hybrid.debugmessage("map.menu_height: " + map.menu_height);
	    Hybrid.debugmessage("set Shop Height to: " + map.menu_height);
	    w = map.menu_width;
	    h = map.menu_height;
	    x = 0;
	    y = -map.menu_offset;
	    layout.menu_inside = Hybrid.createBox(layout.menu, x, y, w, h);
	    var i, temp;
	    Hybrid.debugmessage("map.shop.length: " + map.shop.length);
	    for (i = 0; i < map.shop.length; i++) {
	        w = map.menu_width; //-layout.scrollwidth
	        h = map.button_height;
	        x = 0;
	        y = map.button_height * i;
	        map.shop[i].canv = Hybrid.createCanvas(layout.menu_inside, x, y, w, h);
	        drawShopItem(i);
	    }

	    // background and map!
	    w = Hybrid.width - map.menu_width; //-layout.scrollwidth
	    h = Hybrid.height - map.bar_height;
	    x = map.menu_width; //+layout.scrollwidth
	    y = map.bar_height;
	    layout.map = Hybrid.createBox(layout.back, x, y, w, h);
	    layout.map.x = x; // save for future ref!
	    layout.map.y = y;
	    layout.map.w = w; // save for future ref!
	    layout.map.h = h;

	    // inside this map we open a HUGE layer and set the location as background
	    w = Hybrid.graphics_manifest[map.back_index].w;
	    h = Hybrid.graphics_manifest[map.back_index].h;
	    x = -map.offset.x; //+layout.scrollwidth
	    y = -map.offset.y;
	    map.offset.dx = 0;
	    map.offset.dy = 0; // set scroll speeds to zero!
	    layout.map_inside = Hybrid.createBox(layout.map, x, y, w, h);
	    Hybrid.setBoxColor(layout.map_inside, palet.map_orange); // this should be set to cover all, but that's for later!
	    Hybrid.setBoxImage(layout.map_inside, map.back_index); // this should be set to cover all, but that's for later!

	    // on top of THAT we create a full size CANVAS!
	    w = Hybrid.width - map.menu_width; //-layout.scrollwidth
	    h = Hybrid.height - map.bar_height;
	    x = map.menu_width; //+layout.scrollwidth
	    y = map.bar_height;
	    layout.map_canvas = Hybrid.createCanvas(layout.back, x, y, w, h);
	    // draw the canvas for the first time.
	    map_drawHouses();

	    // create the scrollbar!
	    layout.scroll = {};
	    layout.scroll.back = {};
	    layout.scroll.back.x = map.menu_width;
	    layout.scroll.back.y = map.bar_height;
	    layout.scroll.back.w = 50;
	    layout.scroll.back.h = Hybrid.height - map.bar_height;
	    layout.scroll.track = {};
	    layout.scroll.track.x = 10; // 10 margin!
	    layout.scroll.track.y = 55; // 55 for each button!
	    layout.scroll.track.w = layout.scroll.back.w - 20; // 55 for each button!
	    layout.scroll.track.h = layout.scroll.back.h - 110; // 55 for each button!
	    layout.scroll.size = layout.scroll.track.h; // must be initialised by a loaded shop!
	    layout.scroll.y = 0;
	    layout.scroll_canvas = Hybrid.createCanvas(layout.back, layout.scroll.back.x, layout.scroll.back.y, layout.scroll.back.w, layout.scroll.back.h);
	    map_drawScrollbar();
	    // draw the scrollbar for the first time.

	    // we create a hotspot HERE!
	    layout.hotspot = Hybrid.createLayer();
	    Hybrid.makeDraggable(layout.hotspot, map_HandleDown, map_HandleUp, handleDrag); // this should be set to cover all, but that's for later!
	    // create a box for the drag Item..
	    w = map.menu_width; //-layout.scrollwidth
	    h = 700; //map.button_height;
	    x = 200; //+layout.scrollwidth // inivisble position.
	    y = 200;
	    layout.dragitem = Hybrid.createCanvas(layout.hotspot, x, y, w, h);
	    //Hybrid.setBoxColor(layout.dragitem,"#fff"); // this should be set to cover all, but that's for later!
	    Hybrid.setVisible(layout.dragitem, false); // this should be set to cover all, but that's for later!

	    // put the buttons ON the hotspot to make sure they work!

	    // buttons (stoppen) on top of map!
	    w = Hybrid.graphics_manifest['buttons'].ss['stop'][0][2];
	    h = Hybrid.graphics_manifest['buttons'].ss['stop'][0][3];
	    x = Hybrid.width - w - 60;
	    y = 60 + map.bar_height;
	    Hybrid.createSpriteButton(layout.hotspot, x, y, w, h, 'buttons', "stop", "button_stop", handleButtonsMap);
	    // buttons (highscores) on top of map!
	    w = Hybrid.graphics_manifest['buttons'].ss['high'][0][2];
	    h = Hybrid.graphics_manifest['buttons'].ss['high'][0][3];
	    x = x - w - 30;
	    y = 60 + map.bar_height;
	    Hybrid.createSpriteButton(layout.hotspot, x, y, w, h, 'buttons', "high", "button_high", handleButtonsMap);
	    // buttons (verder) on top of map!
	    // if progress is not total!
	    // so check that!
	    var nr = parseInt(user.data.progress);
	    //if(nr<quiz.questions.length)
	    //{
	    w = Hybrid.graphics_manifest['buttons'].ss['continue'][0][2];
	    h = Hybrid.graphics_manifest['buttons'].ss['continue'][0][3];
	    x = Hybrid.width - w - 60;
	    y = Hybrid.height - h - 60;
	    Hybrid.createSpriteButton(layout.hotspot, x, y, w, h, 'buttons', "continue", "button_continue", handleButtonsMap);
	    //}


	    // show the popup?
	    if (wwjw.page_extras == "show_welcome") {
	        //wwjw.page_extras=""; // we do this when we depart! If a resize is in effect, the popup should still be there.
	        // show the popup!
	        Hybrid.setCookie("lastpage", "welcome"); // virtual page, but you can return to it..
	        Hybrid.debugmessage("show the popup and go from there!");
	        layout.popup = Hybrid.createLayer();
	        Hybrid.setBoxColor(layout.popup, "rgba(0,0,0,0.5)");

	        var x, y, w, h;
	        w = 985;
	        h = 799;
	        x = Hybrid.width / 2 - w / 2;
	        y = Hybrid.height / 2 - h / 2;
	        layout.popup_window = Hybrid.createBox(layout.popup, x, y, w, h);
	        Hybrid.setBoxColor(layout.popup_window, palet.popup_back);
	        Hybrid.setBoxShadow(layout.popup_window, 0, 0, 50, "#000");

	        x = 88;
	        y = 80;
	        w = 985 - x * 2;
	        h = 460;
	        var str = "";
	        str += "<h1><center>Welkom thuis</center></h1>";
	        str += "Wat gaat het worden vandaag? Een achtbaan achter de kerk of een manege op de markt? Is jouw voetbalvereniging hoognodig aan een stadion toe? Het is allemaal geen probleem. Je moet alleen de vragen in de game goed beantwoorden. Voor ieder goed antwoord krijg je punten. Heb je genoeg punten verzameld, dan kun je een keuze maken uit een van de gebouwen, attracties of voorzieningen. Een stadion is natuurlijk wel wat duurder dan een speeltuin. Sleep jouw aankoop naar de plek die jij er voor in gedachten hebt en hoppa: het is in één keer een heel stuk prettiger wonen in jouw woonplaats. Succes!";
	        layout.popup_text = Hybrid.createTextBox(layout.popup_window, x, y, w, h, "sans-serif", "#2f2f2f", "left", fontsz.body, str);
	        //Hybrid.setBoxColor(layout.popup_text,palet.dark_blue);

	        // create button spelen
	        w = Hybrid.graphics_manifest['buttons'].ss['play'][0][2];
	        h = Hybrid.graphics_manifest['buttons'].ss['play'][0][3];
	        x = 985 / 2 - w / 2;
	        y = 548;
	        Hybrid.createSpriteButton(layout.popup_window, x, y, w, h, 'buttons', "play", "button_play", handleButtonsMap);

	    }
	    // resize the scrollbar!

	    //layout.loading_anim=Hybrid.createBox(layout.hotspot,Hybrid.width/2-265/2,Hybrid.height/2-200/2,265,200);
	    //Hybrid.setBoxImage(layout.loading_anim, "loading_anim"); // index, you get it from the graphics manifest!
	    //Hybrid.setVisible(layout.loading_anim, false); // index, you get it from the graphics manifest!


	    // prev/next button
	    x = 10;
	    y = 5;
	    w = Hybrid.graphics_manifest['buttons'].ss['prev'][0][2];
	    h = Hybrid.graphics_manifest['buttons'].ss['prev'][0][3];
	    Hybrid.createSpriteButton(layout.hotspot, x, y, w, h, 'buttons', "prev", "button_prev", handleButtonsMap);

	    x = 520;
	    y = 5;
	    w = Hybrid.graphics_manifest['buttons'].ss['next'][0][2];
	    h = Hybrid.graphics_manifest['buttons'].ss['next'][0][3];
	    Hybrid.createSpriteButton(layout.hotspot, x, y, w, h, 'buttons', "next", "button_next", handleButtonsMap);


	    Hybrid.startLoop(mapLoop, 20);


	}

	function drawShopItem(nr) {
	    var w = map.menu_width,
	        h = map.button_height;
	    Hybrid.clearCanvas(map.shop[nr].canv);
	    var ctx = map.shop[nr].canv.context;
	    // setText naam
	    ctx.font = fontsz.menu + 'px ' + fonts.head;
	    ctx.textAlign = 'left';
	    ctx.fillStyle = "#fff";
	    ctx.fillText((nr + 1) + ") " + map.shop[nr].naam, 34, 400); // "+map.shop[nr].img+"  for debug handy!
	    // setText stenen
	    ctx.font = fontsz.body + 'px ' + fonts.body;
	    ctx.textAlign = 'right';
	    ctx.fillStyle = "#fff";
	    ctx.fillText(map.shop[nr].prijs + " stenen", 494, 400);
	    // also draw the image..
	    ctx.fillStyle = "#fff";
	    ctx.fillRect(35, 35, map.menu_width - 70, 320);

	    // get the scale factor!
	    var fx = (map.menu_width - 70) / Hybrid.graphics_manifest[map.shop[nr].img].w;
	    var fy = 320 / Hybrid.graphics_manifest[map.shop[nr].img].h;
	    var f = fx;
	    if (fy < fx) f = fy;
	    if (f > 0.9 && f < 1.1) f = 1;
	    else f *= 0.9;

	    // this drawImage sometimes fails.. Don't know why
	    // image is HIAuD1bArm (Dolfinarium) which is reported to be: 589x303 
	    // _hybridDrawImage: [object Object],hous_HIAuD1bArm,265,195,0,0.702886247877759
	    // _hybridDrawImage2: [object Object],hous_HIAuD1bArm,589,303
	    // Hybrid.debugmessage("_hybridDrawImage2: "+hbc+","+img_nr+","+bw+","+bh);
	    // hbc.context.drawImage(image, 0,0,bw,bh,-bw/2,-bh/2,bw,bh);
	    Hybrid.drawImage(map.shop[nr].canv, map.shop[nr].img, 35 + (map.menu_width - 70) / 2, 35 + 320 / 2, 0, f);

	    // check if we can actually afford this and if not grey it!
	    //Hybrid.debugmessage(map.shop[nr].prijs+" > "+parseInt(user.data.stenen) );
	    console.log(map.shop[nr].unlock + ">" + parseInt(user.data.punten))
	    if (map.shop[nr].unlock > parseInt(user.data.punten)) {
	        // grey the item
	        ctx.save();
	        ctx.globalCompositeOperation = "xor";
	        Hybrid.drawImage(map.shop[nr].canv, map.shop[nr].img, 35 + (w - 70) / 2, 35 + 320 / 2, 0, f);
	        ctx.restore();
	        ctx.fillStyle = "rgba(87,118,135,0.9)";
	        ctx.fillRect(0, 35, map.menu_width, 330);
	        ctx.strokeStyle = "#fff";
	        ctx.lineWidth = 2;
	        ctx.strokeRect(35, 35, w - 70, 320); // omcirkel waar plaatje normaal staat..
	        ctx.strokeRect(35, h - 92, w - 70, 20);
	        ctx.fillStyle = "#fff";
	        ctx.font = fontsz.head + 'px ' + fonts.head;
	        ctx.textAlign = 'center';
	        var pct = user.data.punten / map.shop[nr].unlock;
	        ctx.fillRect(37, h - 90, (w - 74) * pct, 16);
	        ctx.fillText("beschikbaar bij", w / 2, h / 2 - 40);
	        ctx.fillText(map.shop[nr].unlock + " punten", w / 2, h / 2);
	        // show when you can get it!
	    } else {
	        if (map.shop[nr].prijs > parseInt(user.data.stenen)) {
	            // grey the item
	            ctx.fillStyle = "rgba(87,118,135,0.5)";
	            ctx.fillRect(0, 35, map.menu_width, 420);
	            ctx.fillStyle = "#fff";
	            ctx.font = fontsz.head + 'px ' + fonts.head;
	            ctx.textAlign = 'center';
	            ctx.fillText("Stenen nodig: " + (map.shop[nr].prijs - user.data.stenen), w / 2, h / 2);
	        }
	    }

	    // and the little stripe underneath
	    ctx.fillStyle = "#fff";
	    ctx.fillRect(35, map.button_height - 3, map.menu_width - 70, 3);
	    Hybrid.mouseWheelCallback = map_HandleMousewheel; // Hybrid.listenToMouseWheel..
	}
	// scrollbar functions!
	//----------------------------------------------------------------------------------------
	function map_drawScrollbar() {
	    var i;
	    Hybrid.clearCanvas(layout.scroll_canvas);
	    var ctx = layout.scroll_canvas.context;
	    // draw Back
	    ctx.fillStyle = "rgba(255,255,255,0.6)";
	    ctx.fillRect(0, 0, layout.scroll.back.w, layout.scroll.back.h);
	    // draw track
	    ctx.fillStyle = "rgba(255,255,255,0.6)";
	    ctx.fillRect(layout.scroll.track.x, layout.scroll.track.y, layout.scroll.track.w, layout.scroll.track.h);

	    // draw Blue thing..
	    ctx.fillStyle = palet.pale_blue;
	    ctx.fillRect(layout.scroll.track.x, layout.scroll.track.y + layout.scroll.y, layout.scroll.track.w, layout.scroll.size);
	    // draw triangles on top!
	    ctx.beginPath();
	    ctx.moveTo(10, 35);
	    ctx.lineTo(25, 12);
	    ctx.lineTo(40, 35);
	    ctx.closePath();
	    ctx.fill();
	    // draw triangles on bottom!
	    ctx.beginPath();
	    ctx.moveTo(10, layout.scroll.back.h - 35);
	    ctx.lineTo(25, layout.scroll.back.h - 12);
	    ctx.lineTo(40, layout.scroll.back.h - 35);
	    ctx.closePath();
	    ctx.fill();

	}

	function map_HandleMousewheel(d) {
	    // scroll the scrollbar;
	    layout.scroll.y -= d;
	    map_userControlledScrollbar();
	}

	function map_UpdateScrollbar() {
	    // the menu changed somehow, let's reflect the changes in the scrollbar!
	    //		layout.scroll.size=layout.scroll.track.h*layout.menu_viewport/(map.menu_height-layout.menu_viewport);
	    Hybrid.debugmessage("layout.menu_viewport: " + layout.menu_viewport); // this get's a NaN..
	    Hybrid.debugmessage("map.menu_height: " + map.menu_height); // this get's a NaN..
	    layout.scroll.size = layout.scroll.track.h * layout.menu_viewport / (map.menu_height + layout.menu_viewport);

	    Hybrid.debugmessage("layout.menu_viewport: " + layout.menu_viewport); // this get's a NaN..
	    Hybrid.debugmessage("map.menu_height: " + map.menu_height); // this get's a NaN..
	    Hybrid.debugmessage("map.menu_offset: " + map.menu_offset); // this get's a NaN..
	    Hybrid.debugmessage("layout.scroll.size: " + layout.scroll.size); // this get's a NaN..
	    Hybrid.debugmessage("layout.scroll.track.h: " + layout.scroll.track.h); // this get's a NaN..
	    layout.scroll.y = (layout.scroll.track.h - layout.scroll.size) * map.menu_offset / (map.menu_height - layout.menu_viewport);
	    Hybrid.debugmessage("layout.scroll.y: " + layout.scroll.y); // this get's a NaN..
	    map_clampScrollbar();
	    map_drawScrollbar();
	}

	function map_clampScrollbar() {
	    if (layout.scroll.y < 0) layout.scroll.y = 0;
	    if (layout.scroll.y > (layout.scroll.track.h - layout.scroll.size)) layout.scroll.y = (layout.scroll.track.h - layout.scroll.size);
	}

	function map_userControlledScrollbar() {
	    map_clampScrollbar();
	    map_drawScrollbar();
	    // move the menu box as well!
	    map.menu_offset = (map.menu_height - layout.menu_viewport) * layout.scroll.y / (layout.scroll.track.h - layout.scroll.size);
	    map.menu_speed = 1.1; // this makes it display, but the next time speed has dropped enough not to move!
	}
	//----------------------------------------------------------------------------------------
	// scrollbar functions!

	function map_HandleDown(id, x, y) {
	    console.log("map_HandleDown");
	    if (y > map.bar_height) {
	        if (x < map.menu_width) {
	            // controlling menu
	            map.menudragdir = ""; // needs to be determined when first dragging!
	            Hybrid.debugmessage("Menu Down id:" + id + "->" + x + "," + y);
	            map.down = {
	                x: x,
	                y: y
	            };
	            map.button_clicked = Math.floor((y - map.bar_height + map.menu_offset) / map.button_height);
	            map.dragTarget = "menu";
	            Hybrid.debugmessage("Clicked button:" + map.button_clicked);
	            // if you have the money, that is!
	            var cost = getPriceFromId(map.shop[map.button_clicked].img);
	            var unlocked = getUnlockFromId(map.shop[map.button_clicked].img);
	            // IE 11 wist mij te melden: map.button_clicked= NaN (online!)
	            // ook deed de scrollbar het niet.

	            Hybrid.debugmessage("cost1" + map.shop[map.button_clicked].prijs);
	            Hybrid.debugmessage("Cost: " + cost);
	            Hybrid.debugmessage("Stones: " + user.data.stenen);
	            if (cost > user.data.stenen) {
	                map.button_clicked = -1;
	                Hybrid.debugmessage("Sorry, you don't have: " + cost);
	            }
	            if (unlocked > user.data.punten) {
	                map.button_clicked = -1;
	                Hybrid.debugmessage("not unlocked yet: " + unlocked);
	            }
	        } else {
	            // might be scrollbar!
	            if (x < (layout.scroll.back.x + layout.scroll.back.w)) {
	                map.down = {
	                    x: x,
	                    y: y
	                };
	                x = x - layout.scroll.back.x;
	                y = y - layout.scroll.back.y;
	                Hybrid.debugmessage("Click scroll at:" + x + "," + y);
	                // you clicked the scroll!
	                var handled = false;
	                // did you hit the box?
	                // an arrow?
	                if (handled == false && y < layout.scroll.track.y) {
	                    // top button!
	                    handled = true;
	                    Hybrid.debugmessage("you hit the top button of the scrollbar");
	                    layout.scroll.y -= 10;
	                    map_userControlledScrollbar();
	                    map.dragging = -1;
	                }
	                if (handled == false && y > (layout.scroll.back.h - layout.scroll.track.y)) {
	                    // bottom button!
	                    handled = true;
	                    Hybrid.debugmessage("you hit the bottom button of the scrollbar");
	                    layout.scroll.y += 10;
	                    map_userControlledScrollbar();
	                    map.dragging = -1;
	                }
	                y = y - layout.scroll.track.y;
	                if (handled == false && y < (layout.scroll.y)) {
	                    // bottom button!
	                    handled = true;
	                    Hybrid.debugmessage("you want the scroll thingy to shoot up");
	                    map.dragging = -1;
	                    layout.scroll.y -= 120;
	                    map_userControlledScrollbar();
	                }
	                if (handled == false && y > (layout.scroll.y + layout.scroll.size)) {
	                    // bottom button!
	                    handled = true;
	                    Hybrid.debugmessage("you want the scroll thingy to shoot down");
	                    map.dragging = -1;
	                    layout.scroll.y += 120;
	                    map_userControlledScrollbar();
	                }
	                if (handled == false && y >= (layout.scroll.y) && y <= (layout.scroll.y + layout.scroll.size)) {
	                    // bottom button!
	                    handled = true;
	                    Hybrid.debugmessage("you started dragging the scroll thingy");
	                    map.dragging = 1; // tell up and move there is something to drop!
	                    layout.scroll.down = {
	                        x: x,
	                        y: y - layout.scroll.y
	                    };
	                    map.dragTarget = "scroll";

	                }


	            } else {

	                // controlling map
	                //Hybrid.debugmessage("Map Down id:"+id+"->"+x+","+y);
	                // we might be hitting a moveable house, check for that!
	                // we want to check the kader, not the dist to rx, ry!
	                var hit_house = -1;
	                var min_dist = 10000000; // this becomes top house!!
	                var max_y = -10000000; // this becomes top house!!
	                Hybrid.debugmessage("DOWN ON MAP " + (x - map.menu_width) + "," + (y - map.bar_height));
	                for (i = 0; i < map.houses.length; i++) {
	                    if (map.houses[i].id != "house") {
	                        Hybrid.debugmessage("checking houses for move(" + i + "): " + map.houses[i].id);
	                        if (map.houses[i].moveable) {
	                            var im = map.houses[i].id;
	                            var kader = {};
	                            kader.x = Math.floor(map.houses[i].lx - map.offset.x - Hybrid.graphics_manifest[im].rx);
	                            kader.y = Math.floor(map.houses[i].ly - map.offset.y - Hybrid.graphics_manifest[im].ry);
	                            kader.w = Hybrid.graphics_manifest[im].w;
	                            kader.h = Hybrid.graphics_manifest[im].h;

	                            // check a kader, but we have to get this kader from the graphics manifest
	                            // so we need an id!
	                            Hybrid.debugmessage("check kaders" + i + ": " + kader.x + "," + kader.y + " " + kader.w + "," + kader.h);
	                            if ((x - map.menu_width) > kader.x && (x - map.menu_width) < (kader.x + kader.w) && (y - map.bar_height) > kader.y && (y - map.bar_height) < (kader.y + kader.h)) {
	                                // unless it's MUCH smaller and closer!!
	                                var dx = (map.houses[i].lx - map.offset.x) - (x - map.menu_width);
	                                var dy = (map.houses[i].ly - map.offset.y) - (y - map.bar_height);
	                                var len = Math.sqrt(dx * dx + dy * dy);

	                                if (max_y < map.houses[i].ly && len < min_dist) {
	                                    // if there is more than one, grab the top one!
	                                    max_y = map.houses[i].ly;
	                                    min_dist = len;
	                                    hit_house = i;
	                                }
	                            }
	                        }
	                    } else {
	                        Hybrid.debugmessage("old test house (dot) is in there somewhere at place: " + i);
	                    }
	                }
	                if (hit_house != -1 && map.houses[hit_house].moveable) {
	                    Hybrid.debugmessage("probably hit moveable house:" + hit_house + " at " + min_dist);
	                    for (var all in map.houses[hit_house]) {
	                        Hybrid.debugmessage(all + ":" + map.houses[hit_house][all])
	                    }
	                    map.dragTarget = "moveHouse";
	                    // we need to erase it temporarily from the map!
	                    map.drag_object = map.houses.splice(hit_house, 1)[0]; // the whole object, including position and stuff.
	                    refreshMap = false; // show it's gone and re-sort!!
	                    map_drawHouses();
	                    // draw the thing on the layout.dragitem canvas
	                    Hybrid.clearCanvas(layout.dragitem);
	                    layout.dragitem.context.globalAlpha = 0.7;
	                    map.dragging = 1; // tell up there is something to drop!
	                    var im = map.drag_object.id;
	                    Hybrid.debugmessage("SetHouseMoving: " + im);
	                    map.drag_object.ox = map.drag_object.lx; // we need to save the old position!!!
	                    map.drag_object.oy = map.drag_object.ly; // we need to save the old position!!!
	                    map.drag_object.w = Hybrid.graphics_manifest[im].w;
	                    map.drag_object.h = Hybrid.graphics_manifest[im].h;
	                    //
	                    //map.drag_object.gx=-map.drag_object.w/2; // grab x for movebox!
	                    //map.drag_object.gy=-map.drag_object.h/2;
	                    //map.drag_object.gx=-Hybrid.graphics_manifest[im].rx;
	                    //map.drag_object.gy=-Hybrid.graphics_manifest[im].ry;
	                    //map.drag_object.gx=(x-map.menu_width+map.offset.x)-(map.drag_object.ox-Hybrid.graphics_manifest[im].rx);
	                    //map.drag_object.gy=(y-map.bar_height+map.offset.y)-(map.drag_object.oy-Hybrid.graphics_manifest[im].ry);
	                    map.drag_object.gx = (map.drag_object.ox - Hybrid.graphics_manifest[im].rx) - (x - map.menu_width + map.offset.x);
	                    map.drag_object.gy = (map.drag_object.oy - Hybrid.graphics_manifest[im].ry) - (y - map.bar_height + map.offset.y);

	                    Hybrid.drawImage(layout.dragitem, im, map.drag_object.w / 2, map.drag_object.h / 2, 0, 1);

	                    Hybrid.moveBox(layout.dragitem, x + map.drag_object.gx, y + map.drag_object.gy);
	                    Hybrid.setVisible(layout.dragitem, true); // this should be set to cover all, but that's for later!
	                    map.button_clicked = -1;

	                    // now show the draggable item!
	                } else {
	                    map.down = {
	                        x: x,
	                        y: y
	                    };
	                    map.dragTarget = "map";
	                }
	            } // end control map!
	        }
	    } else {
	        // you clicked in the bar, so:
	        map.dragTarget = "bar";
	        map.dragging = -1;
	    }
	}

	function map_HandleUp(id, x, y) {
	    //Hybrid.debugmessage("UP: "+map.dragTarget);
	    switch (map.dragTarget) {
	        case "scroll":
	            map.dragging = -1;
	            Hybrid.debugmessage("you dropped the scroll thingy: " + map.dragging);
	            break;
	        case "moveHouse":
	            // convert it!
	            Hybrid.debugmessage("were we dragging anything?: " + map.dragging);
	            if (map.dragging != -1) {
	                // we were dragging an house moved from somewhere else, place it now and hide the dragItem.
	                // then adjust the position in the cookie AND on the server!
	                Hybrid.debugmessage("drop moved house at: " + parseInt(x) + "," + parseInt(y));
	                Hybrid.playSound("place");

	                // correct x and y to be a place inside the map.
	                var map_x = Math.floor(x) + map.offset.x - map.menu_width;
	                var map_y = Math.floor(y) + map.offset.y - map.bar_height;

	                // compensate for this particular grab_x and grab_y AND rx and ry
	                map_x = map_x + map.drag_object.gx + Hybrid.graphics_manifest[map.drag_object.id].rx;
	                map_y = map_y + map.drag_object.gy + Hybrid.graphics_manifest[map.drag_object.id].ry;

	                // create a house at this place;
	                map.houses.push({
	                    id: map.drag_object.id,
	                    lx: map_x,
	                    ly: map_y,
	                    moveable: true
	                }); // you dropped it, you can move it
	                map.just_changed = true;

	                // we need to sort houses on y!
	                map.houses.sort(map_sortOnY);
	                map_drawHouses();

	                // now we need to save this to the server
	                // moved house
	                var data = {};
	                data.id = map.drag_object.id.split("_")[1];
	                data.lx = Math.floor(map_x);
	                data.ly = Math.floor(map_y);
	                data.ox = Math.floor(map.drag_object.ox);
	                data.oy = Math.floor(map.drag_object.oy);
	                data.naam = Hybrid.getCookie("user_naam");
	                data.map = map.current_map;
	                data.wachtwoord = Hybrid.getCookie("user_wachtwoord");
	                Hybrid.debugmessage("move_house.php?naam=" + data.naam + "&wachtwoord=" + data.wachtwoord + "&id=" + data.id + "&map=" + data.map + "&lx=" + data.lx + "&ly=" + data.ly + "&ly=" + data.id + "&ox=" + data.ox + "&oy=" + data.oy);
	                Hybrid.getVars("move_house.php", data, map_BuyCallback, map_BuyFail); // we don't want to know about any stuff.

	                // remove drag item
	                Hybrid.setVisible(layout.dragitem, false); // this should be set to cover all, but that's for later!
	                map.dragging = -1;
	            }

	            // DEBUG: should't there be a break here????????	
	        case "menu":

	            Hybrid.debugmessage("were we dragging anything?: " + map.dragging);
	            if (map.dragging != -1) {
	                // we were dragging an item, place it now and hide the dragItem.
	                Hybrid.debugmessage("drop something at: " + parseInt(x) + "," + parseInt(y));
	                Hybrid.playSound("place");

	                // correct x and y to be a place inside the map.
	                var map_x = Math.floor(x) + map.offset.x - map.menu_width;
	                var map_y = Math.floor(y) + map.offset.y - map.bar_height;

	                // compensate for this particular grab_x and grab_y AND rx and ry
	                map_x = map_x + map.drag_object.gx + Hybrid.graphics_manifest[map.drag_object.id].rx;
	                map_y = map_y + map.drag_object.gy + Hybrid.graphics_manifest[map.drag_object.id].ry;

	                // create a house at this place;
	                map.houses.push({
	                    id: map.drag_object.id,
	                    lx: map_x,
	                    ly: map_y,
	                    moveable: true
	                }); // you dropped it, you can move it
	                map.just_changed = true;

	                // we need to sort houses on y!
	                map.houses.sort(map_sortOnY);

	                if (map.drag_object.setpos == true) {
	                    // we need to tell the server the new default position of this house!
	                    Hybrid.debugmessage("set default position");
	                    Hybrid.debugmessage("house id: " + map.drag_object.id.split("_")[1]);
	                    Hybrid.debugmessage("set lx:" + map_x);
	                    Hybrid.debugmessage("set ly:" + map_y);
	                    var data = {};
	                    data.id = map.drag_object.id.split("_")[1];
	                    data.lx = Math.floor(map_x);
	                    data.ly = Math.floor(map_y);
	                    Hybrid.getVars("set_default_pos.php", data, map_PositionCallback, map_PositionFail); // we don't want to know about any stuff.
	                } else {
	                    // now we need to save this to the server
	                    // regular house
	                    var data = {};
	                    data.id = map.drag_object.id.split("_")[1];
	                    data.lx = Math.floor(map_x);
	                    data.ly = Math.floor(map_y);
	                    data.prijs = getPriceFromId(map.drag_object.id);
	                    data.naam = Hybrid.getCookie("user_naam");
	                    data.map = map.current_map;
	                    data.wachtwoord = Hybrid.getCookie("user_wachtwoord");
	                    //Hybrid.debugmessage("buy_house.php?naam="+data.naam+"&wachtwoord="+data.wachtwoord+"&id="+data.id+"&lx="+data.lx+"&ly="+data.ly+"&ly="+data.id+"&prijs="+data.prijs);// we don't want to know about any stuff.
	                    //data.prijs=0; // so you can buy infinite houses.
	                    Hybrid.getVars("buy_house.php", data, map_BuyCallback, map_BuyFail); // we don't want to know about any stuff.

	                    // also add to local for rebuilds
	                    user.data.bought_per_city[map.current_map].push({
	                        id: data.id,
	                        lx: data.lx,
	                        ly: data.ly
	                    });

	                    // subtract the stones
	                    user.data.stenen -= parseInt(data.prijs);
	                    // show it
	                    Hybrid.setText(layout.score_label, "Score <em>" + parseInt(user.data.punten) + "</em> punten / <em>" + parseInt(user.data.stenen) + "</em> stenen");
	                    // we redraw the shop, cause maybe we have a new greyed item!
	                    var i;
	                    for (i = 0; i < map.shop.length; i++) {
	                        drawShopItem(i);
	                    }

	                    var data = {};
	                    data.stat = "house";
	                    data.id = map.drag_object.id.split("_")[1];
	                    data.user = user.data.naam;
	                    Hybrid.setVars("add_stat.php", data);
	                }


	                // remove drag item
	                Hybrid.setVisible(layout.dragitem, false); // this should be set to cover all, but that's for later!
	                map.dragging = -1;
	            }
	            break;
	    }
	}

	function getPriceFromId(id) {
	    var i;
	    for (i = 0; i < map.shop.length; i++) {
	        //			Hybrid.debugmessage("getPriceFromId  "+map.shop[i].img+"=="+id);
	        if (map.shop[i].img == id) return map.shop[i].prijs;
	    }
	    return -1;
	}

	function getUnlockFromId(id) {
	    var i;
	    for (i = 0; i < map.shop.length; i++) {
	        //			Hybrid.debugmessage("getUnlockFromId  "+map.shop[i].img+"=="+id);
	        if (map.shop[i].img == id) return map.shop[i].unlock;
	    }
	    return -1;
	}

	function map_BuyCallback(response) {
	    var id;
	    if (parseInt(response.succes) == 1) {
	        Hybrid.debugmessage("position saved");
	        // we do have to show the house, as well, somehow that doesn't happen.. Why?
	    } else {
	        Hybrid.debugmessage("position NOT saved: " + response.error_message);
	    }
	}

	function map_BuyFail(response) {
	    //window.alert("Communication with the server interupted, try again later.");
	    Hybrid.debugmessage("Request failed..");
	}

	function map_PositionCallback(response) {
	    var id;
	    if (parseInt(response.succes) == 1) {
	        Hybrid.debugmessage("position saved");
	    } else {
	        Hybrid.debugmessage("position NOT saved: " + response.error_message);
	    }
	}

	function map_PositionFail(response) {
	    //window.alert("Communication with the server interupted, try again later.");
	    Hybrid.debugmessage("Request failed..");
	}

	function handleDrag(id, x, y, dx, dy) {
	    console.log("handleDrag " + map.dragTarget);
	    switch (map.dragTarget) {
	        case "scroll":
	            if (map.dragging != -1) {
	                // we are scrolling!
	                x = x - layout.scroll.back.x;
	                y = y - layout.scroll.back.y;
	                y = y - layout.scroll.track.y;
	                layout.scroll.y = (y - layout.scroll.down.y);
	                map_userControlledScrollbar();
	            }
	            break;
	        case "moveHouse":
	            if (map.dragging != -1) {
	                // show the dragItem in the right position!
	                Hybrid.moveBox(layout.dragitem, x + map.drag_object.gx, y + map.drag_object.gy);
	            }
	            break;
	        case "menu":
	            if (map.dragging != -1) {
	                // show the dragItem in the right position!
	                Hybrid.moveBox(layout.dragitem, x + map.drag_object.gx, y + map.drag_object.gy);
	                Hybrid.debugmessage("move the drag item!");
	            } else {
	                var swipe_dx = map.down.x - x;
	                var swipe_dy = map.down.y - y;
	                var swipe_len = Math.sqrt(swipe_dx * swipe_dx + swipe_dy * swipe_dy);
	                //Hybrid.debugmessage(" drag id:"+id+"->"+x+","+y+" "+dx+","+dy+" swipe_len:"+swipe_len);
	                if (swipe_len > 10 || map.menudragdir != "") // if determined swipe direction OR swipe_len is long enough to actually determine the swipe direction!
	                {
	                    if (map.menudragdir == "") {

	                        // check the direction of the swipe.
	                        var swipe_dx = map.down.x - x;
	                        var swipe_dy = map.down.y - y;
	                        if (Math.abs(dx) > Math.abs(dy)) {
	                            // trying to rip something from menu.
	                            map.menudragdir = "hori";
	                        } else {
	                            // trying to shift menu!
	                            map.menudragdir = "verti";
	                        }
	                        // if this happens, it was one, you couldn't pickup, so only one direction possible.
	                        if (map.button_clicked == -1)
	                            map.menudragdir = "verti";

	                    }
	                    // we know which way to go!
	                    Hybrid.debugmessage("map.menudragdir=" + map.menudragdir + " " + swipe_dx + "," + swipe_dy);
	                    if (map.menudragdir == "verti") {
	                        // shift the menu
	                        map.menu_speed = dy; // this will be carried out by the loop!
	                        map_UpdateScrollbar();
	                    } else {
	                        // show the ripping!
	                        Hybrid.debugmessage("picking up some object from list on side" + map.button_clicked);
	                        //Hybrid.playSound("buy_house"); // don't play this sound, I had to remove it for android.. Don't know why..
	                        map.dragging = map.button_clicked;
	                        // draw the thing on the layout.dragitem canvas
	                        Hybrid.clearCanvas(layout.dragitem);
	                        layout.dragitem.context.globalAlpha = 0.7;
	                        var im = map.shop[map.dragging].img; // if you JUST placed a house AND change the map, you get here and map.dragging =-1?
	                        map.drag_object.w = Hybrid.graphics_manifest[im].w;
	                        map.drag_object.h = Hybrid.graphics_manifest[im].h;
	                        map.drag_object.gx = -map.drag_object.w / 2; // grab x for movebox!
	                        map.drag_object.gy = -map.drag_object.h / 2;
	                        map.drag_object.id = im;
	                        map.drag_object.setpos = map.shop[map.dragging].setpos;
	                        Hybrid.drawImage(layout.dragitem, im, map.drag_object.w / 2, map.drag_object.h / 2, 0, 1);


	                        Hybrid.moveBox(layout.dragitem, x + map.drag_object.gx, y + map.drag_object.gy);
	                        Hybrid.setVisible(layout.dragitem, true); // this should be set to cover all, but that's for later!
	                        map.button_clicked = -1;
	                        // now show the draggable item!
	                    }
	                }
	            }
	            break;
	        case "map":
	            //				Hybrid.debugmessage("move map:"+id+"->"+x+","+y);
	            map.offset.dx = dx; // this will be carried out by the loop!
	            map.offset.dy = dy; // this will be carried out by the loop!
	            break;
	    }
	}

	function handleButtonsMap(label) {
	    //window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
	    switch (label) {
	        case "button_play":
	            Hybrid.stopLoop();
	            wwjw.page_extras = ""; // don't show the popup next time!
	            quiz.init();
	            break;
	        case "button_stop":
	            Hybrid.stopLoop();
	            start.init();
	            break;
	        case "button_continue":
	            // naar highscores als klaar, naar quiz als volgende vraag.
	            Hybrid.stopLoop();
	            var nr = parseInt(user.data.progress);
	            quiz.init();
	            break;
	        case "button_high":
	            Hybrid.stopLoop();
	            high.init();
	            break;
	        case "button_prev":
	            map.dragging = -1;
	            map.dragTarget = "none"; // make sure this doesn't count as a click!
	            map.current_map--;
	            if (map.current_map == 0) map.current_map = 6;
	            initMap();
	            break;
	        case "button_next":
	            map.dragging = -1;
	            map.dragTarget = "none"; // make sure this doesn't count as a click!
	            map.current_map++;
	            if (map.current_map == 7) map.current_map = 1;
	            initMap();
	            /*				var city=map.plaats[map.current_map];
	            				Hybrid.setText(layout.user_name,Hybrid.getCookie("user_naam")+":"+city);
	            				// set the location, can be 6 different ones!
	            				map.back_index='location'+map.current_map;
	            				Hybrid.debugmessage("Hybrid.graphics_manifest['"+map.back_index+"']: ");
	            				//Hybrid.debugmessage(Hybrid.graphics_manifest[map.back_index]); // this way it prints the internal structure as well!
	            				
	            				
	            				if(!Hybrid.graphics_manifest.hasOwnProperty(map.back_index))
	            				{
	            					Hybrid.throwError(map.back_index+" not defined in graphics_manifest");
	            				}
	            				map.back_w=Hybrid.graphics_manifest[map.back_index].w; // all we need to do is
	            				map.back_h=Hybrid.graphics_manifest[map.back_index].h;
	            				// center it, kind of..
	            				map.offset={x:Hybrid.graphics_manifest[map.back_index].w/2-Hybrid.width/2,y:Hybrid.graphics_manifest[map.back_index].h/2-Hybrid.height/2};*/

	            break;
	        default:
	            Hybrid.debugmessage("handleButtonsStart: " + label);
	    }
	}