console.log("scheppen");

var h2El = document.querySelector("h2");
var panEl = document.querySelector("#pan");
var volgendeKnop = document.querySelector("#laterverschijnen");

//sleepbare/klikbare elementen
var komBeslagEl = document.querySelector("#kombeslag");
var lepelEl = document.querySelector("#lepel");
var lepelBeslag = document.querySelector("#lepelbeslag");

//audiofragmenten
var bakAudio = document.querySelector("#bak");
var plopAudio = document.querySelector("#plop");
var achtergrondAudio = document.querySelector("#achtergrondmuziek");

//ongekookte pannenkoeken - verstopt
var ongekookt1 = document.querySelector("#ongekooktepannenkoek1");
var ongekookt2 = document.querySelector("#ongekooktepannenkoek2");
var ongekookt3 = document.querySelector("#ongekooktepannenkoek3");

//muziek-knop
var buttonEl = document.querySelector("#button");
var knopStatus = 'uit';

var score = 0;


//functie om de muziek aan of uit te zetten
function muziekKnop(){
    console.log("muziekKnop");

    console.log("knopStatus");

    if (knopStatus == 'uit'){
        console.log("De muziek staat aan");
        achtergrondAudio.play();
        knopStatus='aan';
    } else {
        console.log("De muziek blijft uit");
        achtergrondAudio.pause();
        knopStatus='uit';
    }
}
buttonEl.addEventListener("click", muziekKnop);

//functie voor bakgeluid in de pan
function bakgeluid(){
    bakAudio.play();
}
panEl.addEventListener("mouseover",bakgeluid);



//functie beslag scheppen op lepel
function lepelSlepen(){
    lepelEl.src = "images/lepelbeslag.png"
    console.log("lepel");
    plopAudio.play();  
}

komBeslagEl.addEventListener("click", lepelSlepen);


//functie voor het tonen van de pannenkoeken op de pan (puntentelling)
function toonPannenkoeken(){
    score = score + 1;
    console.log(score);
    h2El.textContent = score;

    if (score == 1){
        console.log("pannenkoek1")
        ongekookt1.hidden = false;
        plopAudio.play();
    }
    if (score == 2){
        console.log("pannenkoek2")
        ongekookt2.hidden = false;
        plopAudio.play();
    }
    if (score == 3){
        console.log("pannenkoek2")
        ongekookt3.hidden = false;
        plopAudio.play();
        volgendeKnop.hidden = false;
    }

    if (score > 2){
        score = 2;
    }
}
lepelEl.addEventListener ("dragend",toonPannenkoeken);
