<!-- Vergeet je niet de comments uit te zetten voordat je begint met typen? 💬 -->

# Procesverslag

## Over
* **Naam:** `Lyn van Breen`
* **Klas:** `vid-1`
* **Minor:** `Visual Interface Design`
* **Favoriete dier:** `Kat`
* **Startniveau:** `Best wel noob`

## Concept

`Mijn concept is een sound visualiser. Ik ben namelijk dol op muziek, en in het bijzonder K-Pop. Het liedje dat ik heb gebruikt voor mijn visualiser is Gas Station van JUNE. Een nummer dat mij altijd goede vibes brengt, iets wat in deze tijd hard nodig is. Zeker nu in de tijd dat thuis werken de norm is, is het fijn om de stilte te vullen met muziek. Je kunt luisteren wat je wil en kan eigenlijk non-stop muziek aan hebben tijdens het werken (en dat is wat ik doe). De visualiser moet er een beetje retro uitzien en je laten denken aan de Windows Media Player van Windows XP. Dit werd gebruikt als screensaver als je muziek afspeelde zodat je scherm niet in zou branden, maar ik vond het visueel altijd erg interesssant.`

## Features

`Mijn sound visualiser heeft een play en pauze knop voor de muziek, en een slider voor het volume. Als je je muis beweegt ontstaan er cirkelvormige particles of bubbeltjes. Net hoe je het leuk vindt om te noemen. Deze bubbels krijgen een random paars/blauwtint en een random grootte, maar zijn hierin beperkt en blijven klein. Ze verdwijnen langzaam van het scherm zodat het nooit echt te vol wordt. Verder wordt de muis X en Y verwerkt in de visualiser zelf. Je kunt dus op en neer en heen en weer gaan met je muis over het scherm, en je zult zien dat er elementen van grootte veranderen. Als je de muziek afspeelt zul je zien dat die elementen ook pulseren en bewegen op de muziek. Hierbij zijn de blauwe cirkels de bass, de grote magenta spirograaf de middentonen en de kleine paarse cirkels de treble.`

## Onderzoek & inspiratie
`Schrijf wat over je onderzoek en je inspiratie voor het project. Hoe kwam je concept tot stand? Ik heb een hoop inspiratie gehaald uit de Windows Media Player van vroeger. Ook ben ik geinspireerd door iets waar Zuid Korea om bekend staat: karaoke. Daarom heb ik ook de songtekst toegevoegd van het liedje. Verder komt mijn inspiratie ook uit wat ik in de p5.js showcase heb gezien. Vooral dit project: https://showcase.p5js.org/#/2020-Sound/project-25/. Deze 3 kernpunten brachten mij tot mijn uiteindelijke concept en hoe het er uiteindelijk uit is komen te zien.`

## Voortang

### Week-1
`Wat heb je gedaan? Wat ging goed? Wat kon beter? Deze week heb ik nog niet heel erg veel voor elkaar gekregen, en ben ik vooral na gaan denken over mijn concept. Ik wist eigenlijk meteen dat ik iets met muziek wilde doen, aangezien ik daar dol op ben. Toen kwam al heel snel het hoofdidee: een soundvisualiser voor een van mijn favoriete nummers. Hoe het er precies uit moest gaan zien wist ik eerst niet, maar na wat rondkijken in de p5.js showcase wist ik wel een beetje wat er mogelijk was en heb ik een schets gemaakt in p5 met wat vormen en tekst om de compositie een beetje vast te stellen. Dit was gewoon een still wireframe en er was nog weinig te zien. Alleen wat cirkels op de achtergrond, 3 golven en een kort stukje songtekst stonden. Het idee was namelijk eerst om 3 golven te visualiseren per frequentiebereik. Basis P5 vond ik voor iemand die nog nooit Javascript had aangeraakt best oke te doen!`

### Week-2
`Deze week heb ik vooral veel video's gekeken van CodingTrain om uit te vogelen hoe ik in hemelsnaam verder kon komen na mijn schets. Ik wist ook niet zo goed waar ik nou eigenlijk moest beginnen en kreeg van docent Danny de gouden tip: maak een lijstje met functies die je wil toevoegen en werk die gewoon af. Mijn lijstje werd:`
* `Bokeh-achtige achtergrond met bewegende cirkels: cirkels maken --> animeren --> random`
* `Songtekst`
* `Waves op sound laten bewegen`
* `Sound importeren`

### Week-3
`In deze week heb ik de bokeh werkend gekregen, maar liep de boel vast omdat ik een blur effect heb gebruikt wat in draw teveel energie vraagt. Ook de animatie deed het nog niet goed. Na wat zoeken op internet heb ik code gevonden van iemand die de Windows 7 Bubbles screensaver had nagemaakt en uitlegde hoe je dit maakte. Hier had ik een hoop aan en aan de hand van die tutorial heb ik regenboog bubbels gemaakt die in het scherm blijven. In deze week merkte ik hoe effectief Googlen wel niet is, want met de reference kom je er lang niet altijd. Ik ben ook vast gaan zoeken naar sound visualisers en hoe die werken. Hier vond ik ook een handige link voor.`

### Week-4
`Deze week heb ik vrij weinig gedaan, ik heb enkel gespeeld met de bubbels en heel veel dingen gesloopt. Deze heb ik geen kleur gegeven, een random kleur in een bereik, de opacity en maat heb ik veranderd en ga zo maar door. Ik heb geprobeerd om geluid toe te voegen aan mijn project dus had ik de boel gemoved naar Visual Studio Code zodat ik het op de live server kan runnen omdat geluid anders niet werkt. Geluid deed het maar niet... Uiteindelijk dacht ik dat ik het opgelost had door de p5.sound.js te voorzien van een update maar de week erop werkte het weer zo goed als niet...`

### Week-5
`Ik kwam er dus achter dat het probleem helemaal niet opgelost was met het geluid, maar kon wel een beetje aan visualisatie werken met de 3 van de 10 keer dat geluid het besloot te doen. Ik heb hier geoefend met amp visualisatie in een golf maar was niet super tevreden met het resultaat. De lijn was niet mooi smooth te krijgen en als ik er 3 zou gaan krijgen met voor ieder frequentiebereik 1, zou het effect niet bepaald mooi zijn. Ik heb me hierdoor meer verdiept in de spirograaf visual en visualisatie in een cirkel. Dit vond ik een stuk mooier, maar wist niet hoe ik dit nu weer aan de praat zou moeten krijgen. Om verder te komen moest ik toch echt gaan vragen hoe ik het geluid 100% van de tijd kan laten werken. Beetje te lang gewacht met geluid toevoegen en door de issues die ik niet had verwacht liep ik nu last-minute vast.`

### Week-6
`Gelukkig wist Danny wat er aan de hand was met de muziek. Namelijk dat er gebruikersinteractie moet zijn tegenwoordig voordat de browser geluid toelaat. Het was daarom ook makkelijk op te lossen door een button toe te voegen om afspelen te starten. Deze heb ik gelijk toegevoegd en toen kon ik verder. Ik ben gelijk met de analyser aan de gang gegaan en wilde een mandala/spirograaf design maken. Aan de hand van de gevonden code op internet kon ik zoiets maken, en na heel veel tweaken en de boel 100x slopen, weer fixen en een hoop frustratie was ik dan toch tevreden. Ik heb ook een rotatie animatie toegevoegd die het ook doet als er geen muziek afspeelt. Dit maakte het een stuk minder statisch. De finishing touches waren de tekst vormgeven, de button vormgeven en kleur toevoegen. Ook heb ik uiteindelijk een slider toegevoegd voor volume, aangezien dit volume ook meespeelt in de visualisatie. Hoe harder, hoe groter de pulsaties. De kleuren zijn gebaseerd op een live perfomance van het liedje en de kleuren die ze voor het licht gebruikten (https://color.adobe.com/nl/Generative%20Art-color-theme-17764740). Ik heb de bokeh bubbels kleiner gemaakt omdat het al snel te druk werd en ook van het scherm laten verdwijnen, het scherm stond namelijk binnen de kortste keren veel te vol. Ook de bubbels hebben een kleurbereik gekregen om random iets uit te pakken, een laag minimum en maximum voor r, middelhoog minimum en maximum voor g en max waarde voor b zorgt voor de juiste kleuren die in het kleurenpalet passen. Paars, aqua en blauw.`
`Het resultaat is super gaaf geworden en voldoet aan het plaatje wat ik in mijn hoofd had. Het feit dat de golven niet werkten zit ik totaal niet mee, aangezien ik dit nog veel mooier vind en passender vind voor de retro visualiser stijl. Dingen die niet werken kunnen soms juist voor een betere oplossing zorgen. En nog iets wat ik geleerd heb: als je een miljoen keer een back-up maakt kun je de boel ook met een gerust hart een miljoen keer stuk maken!`


## Bronnenlijst

* `https://showcase.p5js.org/#/2020-Sound/project-25/`
* `https://fonts.google.com/specimen/Black+Han+Sans?subset=korean#standard-styles`
* `https://tympanus.net/codrops/2018/03/06/creative-audio-visualizers/`
* `http://onecompileman.com/blogs/1`
* `https://www.youtube.com/watch?v=oQ94OGxFUGs`