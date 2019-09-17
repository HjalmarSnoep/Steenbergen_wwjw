# Steenbergen_wwjw
Weet waar je woont spel Steenbergen op basis van Hybrid Game engine.

# bugs melden
Bugs kun je melden in issues.

# source code
Alle source code voor de game is in deze repo aanwezig (PHP/js/html/css)
Voor compilatie is static/lib/snoep_hybrid_v1_2_2_2 nodig, deze is NIET bijgevoegd.
De Hybrid gameEngine is copyright SnoepGames.
I.v.m. met de update van 2018 zijn ook een aantal deprecated files opgenomen. (De repo is gestart in 2018)
Wel is voor een volledige werkende game ook de MGCMS (copyright SnoepGames) PHP repo nodig (en natuurlijk de data files)

# Data backup
De data voor de game kan worden gebackupped door de data files te backuppen. Alle data wordt
opgeslagen in JSON files in data directories met htaccess protocol "deny from all"
Deze zijn dus niet toegankelijk voor gebruikers, behalve via de game Interface.
Dit maakt het makkelijk om op een reguliere computer (zonder database) data te backuppen en zelfs te editen, aangezien de JSON formaten zoveel mogelijk plain-tekst zijn.

