# Steenbergen_wwjw (CLOSED)
Weet waar je woont spel Steenbergen op basis van Hybrid Game engine.

# Dit spel wordt niet meer onderhouden sinds 08-07-2020
Je kunt bugs melden in issues, maar ik beloof niks.
Ook kun je daar vragen stellen, mocht jij degene zijn, die benaderd wordt om dit over te nemen.
Ik zou je aanraden, het front-end gedeelte te herschrijven, gebruik makende van de graphics die er al zijn. 
Dat zou feitelijk mijn koers zijn, bij verder onderhoud, maar ik stop met spellen maken (en onderhouden) om me te kunnen concentreren op animatie.
De oorspronkelijke functionaliteit van dit spel is flink wat keren gewijzigd (met weinig budget), waardoor een redesign ondertussen erg nodig is.
Of je de database en het CMS wilt herschrijven, moet je zelf weten. Voor de doeleinden van de game, doen deze het gewoon nog goed. Wel zal het anders
zijn dan je gewend bent om deze lokaal te installeren. 

# source code
Alle source code voor de game is in deze repo aanwezig (PHP/js/html/css)
Voor compilatie/webpack/minimizing is static/lib/snoep_hybrid_v1_2_2_2 nodig, deze is NIET bijgevoegd.
De Hybrid gameEngine is copyright SnoepGames.
I.v.m. met de update van 2018 zijn ook een aantal deprecated files opgenomen. (Deze repo is gestart in 2018)
Wel is voor een volledige werkende game ook de MGCMS (copyright SnoepGames) PHP repo nodig (en natuurlijk de data files, deze staan op de server)

# Data backup
De data voor de game kan worden gebackupped door de data files te backuppen. Alle data wordt
opgeslagen in JSON files in data directories met htaccess protocol "deny from all"
Deze zijn dus niet toegankelijk voor gebruikers, behalve via de game Interface.
Dit maakt het makkelijk om op een reguliere computer (zonder database) data te backuppen en zelfs te editen, aangezien de JSON formaten zoveel mogelijk plain-tekst zijn en user-readable. Ben je gewend met databases zoals MYSQL te werken, dan kun je vast wel een import maken vanaf JSONs. Zo niet, kijk naar de bijgevoegde PHP code, die doet in feite dit, maar met een andere (JSON) output. Voor mensen die gewend zijn te werken met MongoDB of MarkLogic ofzo, dan zal veel je bekend voorkomen, dit is mijn homebrew versie daarvan. In 2012 was MongoDB nog maar bij versie MongoDB 1.4 en niet echt bruikbaar, vandaar mijn boude aanpak.

