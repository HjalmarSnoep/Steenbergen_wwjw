	//disclaimer----------------------------------
	var disclaimer={};
	disclaimer.init=initdisclaimer;
	disclaimer.framecounter=0;
	disclaimer.buttons_Alpha=0;
	disclaimer.state="just_started";
	disclaimer.hasPopup=false;
	
	function initdisclaimer()
	{
		var data={};
		data.page="disclaimer";
		data.stat="page";
		Hybrid.setVars("add_stat.php", data);
		Hybrid.debugmessage("DISCLAIMER called!");
		Hybrid.resizeFunction=handleResizedisclaimer;
		handleResizedisclaimer(); // this builds the page 
	}
	function handleResizedisclaimer()
	{
		Hybrid.debugmessage("pagedisclaimer build up:"+Hybrid.width+"x"+Hybrid.height);
		Hybrid.erasePage();
		layout={}; // erase any old layout!
		helpers_createStartSchermBack(); // cerateas a layer layout.back!

		
		// now create all buttons and elements
		layout.buttons=Hybrid.createLayer();
		
		var w,h,x,y,f,tx,ty,string;
		w=1800;
		h=1200;
		x=100;
		y=Hybrid.height-h;
		layout.wit_vlak=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.wit_vlak,"rgba(195,228,173,0.8)"); // this should be set to cover all, but that's for later!
		//Hybrid.setBoxAlpha(layout.wit_vlak,0.80); // alpha added		


		x=100;
		y=100;
		w=w-100;
		h=200;
		Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,fonts.head,palet.head,"center",fontsz.quiz_big,"Cookies & Disclaimer");
		
		x=100;
		y=200;
		w=w-100;
		h=500;
		string="";
		string+="<h1>COOKIEWETGEVING</h1>";
		string+="<h3>Verplichting tot weergeven cookies</h3>";
		string+="<p>De Nederlandse Telecommunicatiewet schrijft voor dat gebruikers van websites toestemming moeten geven voor het plaatsen en gebruiken van cookies. ";
		string+="Cookies zijn kleine tekstbestanden die bij een bezoek aan een website naar uw computer worden gestuurd en worden uitgelezen door de browser bij ";
		string+="het openen van een internetpagina. Door middel van het plaatsen van cookies kunnen internetgebruikers worden geïdentificeerd, voorkeursinstellingen ";
		string+="behouden blijven en kan uiteenlopende informatie verzameld worden. Er bestaan directe en indirecte cookies, ook wel first- en third party cookies genoemd.";
		string+="</p>";

		string+="<h2>Weet Waar Je Woont -Statistieken</h2>";
		string+="<p>Via deze website worden cookies geplaatst om statistieken van de website te verzamelen en de beheerder van de website een duidelijk beeld";
		string+="te geven van de bezoekersstromen op de website.";
		string+="Aan de hand van deze informatie kan de maker de website verbeteren en het gebruiksgemak verhogen.";
		string+="</p>";

		string+="<h2>Weet Waar Je Woont -Inloggegevens</h2>";
		string+="<p>Deze website plaatst een cookie om het onthouden van uw inloggegevens mogelijk te maken. ";
		string+="Deze wordt niet verwijderd aan het einde van een sessie zodat de gebruiker bij het volgende bezoek aan de website niet ";
		string+="opnieuw zijn accountgegevens hoeft in te typen.";
		string+="</p>";

		string+="<h1>BEPERKING AANSPRAKELIJKHEID</h1>";
		string+="<h3>Gebruik van deze toepassing (Weet Waar Je Woont)</h3>";
		string+="<p>Door gebruik te maken van deze software, gaat u akkoord met deze voorwaarden. </p><p>";
		string+="De informatie op deze website is uitsluitend bedoeld als vermaak en wordt u aangeboden als service. ";
		string+="Er kunnen geen rechten aan de informatie/diensten op deze website worden ontleend.";
		string+="Hoewel de maker zorgvuldigheid in acht neemt bij het samenstellen en onderhouden van deze toepassing en de";
		string+="daarop aangesloten website en daarbij gebruik maakt van bronnen die betrouwbaar geacht worden, kan ";
		string+="hij niet instaan voor de juistheid, volledigheid en actualiteit van de geboden informatie.";
		string+="</p><p>";
		string+="De makers garanderen evenmin dat deze website foutloos of ononderbroken zal functioneren. ";
		string+="De makers wijzen iedere aansprakelijkheid ten aanzien van de juistheid, volledigheid, actualiteit van de geboden informatie en ";
		string+="het (ongestoord) gebruik van deze website uitdrukkelijk van de hand.";
		string+="</p>";

		string+="<h3>Informatie van derden</h3>";
		string+="<p>";
		string+="De maker van deze website heeft geen invloed op omstandigheden op de server, zoals hosting en geïnstalleerde versies van gebruikte software (bijvoorbeeld: GD, PHP, APACHE etc). ";
		string+="De maker heeft geen invloed op externe links. Wanneer de makers links naar websites van derden (bijv jquery- javascript library of youtube) ";
		string+="weergeven of gebruiken, betekent dit niet dat de op of via deze websites aangeboden producten of diensten door hem worden aanbevolen. ";
		string+="Deze informatie is door zijn aard aan verandering onderhevig. ";
		string+="</p><p>";
		string+="De makers aanvaarden geen aansprakelijkheid en geen enkele verantwoordelijkheid voor de inhoud, ";
		string+="het gebruik of de beschikbaarheid van websites waarnaar wordt verwezen of die verwijzen naar deze";
		string+="website. Het gebruik van dergelijke links (als aanwezig op deze websiteis voor eigen risico.";
		string+="De informatie op dergelijke websites is door de makers niet nader beoordeeld op juistheid, redelijkheid, actualiteit, aanstootgevendheid of volledigheid.";
		string+="</p>";

		string+="<h1>Verantwoordelijkheden gebruiker</h1>";
		string+="<h3>Veilig en schoon</h3>";
		string+="<p><ul>";
		string+="<li>Hou wachtwoorden en accounts prive.</li>";
		string+="<li>Gebruik geen onbetamelijke taal.</li>";
		string+="<li>Speel niet vals.</li>";
		string+="<li>Gebruik een virusscanner.</li>";
		string+="</ul>";
		string+="</p>";

		string+="<h3>Beperkingen gebruik van deze software (licentie)</h3>";
		string+="<p>";
		string+="De maker behoudt zich alle intellectuele eigendomsrechten en andere rechten voor met betrekking tot de software nodig ";
		string+="voor het functioneren van deze website. Het is niet toegestaan deze software te kopiëren, te downloaden of op enigerlei wijze openbaar ";
		string+="te maken, te verspreiden of te verveelvoudigen zonder voorafgaande schriftelijke toestemming van de makers of de rechtmatige toestemming ";
		string+="van de rechthebbende. ";
		string+="</p><p>";
		string+="U mag informatie op deze website wel afdrukken en/of downloaden voor eigen persoonlijk gebruik.";
		string+="</p>";

		string+="<h3>Beperkingen gebruik van de services</h3>";
		string+="<p>";
		string+="U mag niet proberen in te breken in het systeem (de server-backend).";
		string+="Gedetecteerde pogingen daartoe kunnen leiden tot onmiddelijke verbanning van het systeem en verwijdering van het account zonder opgaaf van reden.";
		string+="</p>";

		string+="<h3>Wijzigingen</h3>";
		string+="<p>";
		string+="De makers behouden zich het recht voor de op of via deze website aangeboden informatie, met inbegrip van de tekst van deze disclaimer, te allen tijde te wijzigen zonder hiervan nadere aankondiging te doen. Het verdient aanbeveling periodiek na te gaan of de op of via deze website aangeboden informatie, met inbegrip van de tekst van deze disclaimer, is gewijzigd.";
		string+="Voor inzendingen geldt, dat de makers geen garantie geven voor de beschikbaarheid van de inzendingen, een nieuwe versie van de software kan de inzending wellicht vernietigen.";
		string+="</p>";

		string+="<h3>Toepasselijk recht</h3>";
		string+="<p>";
		string+="Op deze website en de disclaimer is het Nederlands recht van toepassing. Alle geschillen uit hoofde van of in verband met deze disclaimer zullen bij uitsluiting worden voorgelegd aan de bevoegde rechter in Nederland.";
		string+="</p>";

		layout.disclaim_text=Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);
		Hybrid.makeScrollable(layout.disclaim_text,true);
		Hybrid.setPadding(layout.disclaim_text,0,30,30,30);
		Hybrid.setBoxColor(layout.disclaim_text,palet.pale_green);
		 
		
		string="<p>Door via deze website aangeboden service te gebruiken, verklaart u zich akkoord met de toepasselijkheid van deze disclaimer en ons cookiebeleid.</p>";
		string+="<br>";
		string+="<p>Ik heb bovenstaande informatie goed gelezen en ga akkoord</p>";

		y+=h+70;
		x+=30;
		h=180;
		w-=30;
		Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);

		
		
		// create menubutton disclaimer
		//w=Hybrid.graphics_manifest['buttons'].ss['disclaimer'][0][2];
		//h=Hybrid.graphics_manifest['buttons'].ss['disclaimer'][0][3];
		//x=Hybrid.width-w-60;
		//y=60;
		//Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"disclaimer","button_disclaimer",handleButtonsdisclaimer);

		// create button akkoord
		w=Hybrid.graphics_manifest['buttons'].ss['akkoord'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['akkoord'][0][3];
		x=700;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"akkoord","button_akkoord",handleButtonsdisclaimer);
		
		// create button stoppen
		w=Hybrid.graphics_manifest['buttons'].ss['back'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['back'][0][3];
		x=Hybrid.width-w-60;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"back","button_back",handleButtonsdisclaimer);
		// create button new_game 
		//w=Hybrid.graphics_manifest['buttons'].ss['new_game'][0][2];
		//h=Hybrid.graphics_manifest['buttons'].ss['new_game'][0][3];
		//x=60;
		//y=Hybrid.height-h-60;
		//Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"new_game","button_new_game",handleButtonsdisclaimer);

		x=162;
		y=50; // position to left.
		w=405;
		h=301; 
		layout.logo=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxImage(layout.logo,"start_logo"); // this should be set to cover all, but that's for later!
		Hybrid.setBoxAlpha(layout.logo,0.85); // alpha added
		
	
	}
	function handleButtonsdisclaimer(label)
	{
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		switch(label)
		{
			case "button_back":
				start.init();
			break;				
			case "button_akkoord":
				Hybrid.setCookie("wwjw_disclaimer","1");
				switch(user.refer_to)
				{
					case "new":
						new_game.init();
					break;
					case "resume":
						resume_game.init();
					break;
				}
			break;				
			default:
				Hybrid.debugmessage("handleButtonsdisclaimer: "+label);
		}
	}
	

