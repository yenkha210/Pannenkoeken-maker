console.log("overscheppen");

//pannenkoeken in de pan
var pannenkoek1 = document.querySelector("#pannenkoek1");
var pannenkoek2 = document.querySelector("#pannenkoek2");
var pannenkoek3 = document.querySelector("#pannenkoek3");

var panEl = document.querySelector("#pan");
var bordEl = document.querySelector("#rozebord");


var volgendeKnop = document.querySelector("#laterverschijnen");
//pannenkoeken op het bord
var pannenkoek4 = document.querySelector("#pannenkoek4");
var pannenkoek5 = document.querySelector("#pannenkoek5");
var pannenkoek6 = document.querySelector("#pannenkoek6");


//audiofragmenten
var bakAudio = document.querySelector("#bak");
var plopAudio = document.querySelector("#plop");
var achtergrondAudio = document.querySelector("#achtergrondmuziek");

//muziek-knop
var buttonEl = document.querySelector("#button");
var knopStatus = 'uit';

// functie om de muziek aan of uit te zetten
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

//functie voor plop geluidseffect tijdens het overscheppen
function overschepGeluid(){
    plopAudio.play();
}
pannenkoek1.addEventListener("dragend", overschepGeluid);
pannenkoek2.addEventListener("dragend", overschepGeluid);
pannenkoek3.addEventListener("dragend", overschepGeluid);

//functie pannenkoek 1 overscheppen naar het bord
function opStapelen(){
    pannenkoek4.hidden = false;
    console.log (pannenkoek4);
    pannenkoek1.classList.add('hidden');
}

pannenkoek1.addEventListener("dragend", opStapelen);

//functie pannenkoek 2 overscheppen naar het bord
function opStapelen2(){
    pannenkoek5.hidden = false;
    console.log (pannenkoek5);
    pannenkoek2.classList.add('hidden');
}

pannenkoek2.addEventListener("dragend", opStapelen2);

//functie pannenkoek 3 overscheppen naar het bord
function opStapelen3(){
    pannenkoek6.hidden = false;
    console.log (pannenkoek6);
    pannenkoek3.classList.add('hidden');
    volgendeKnop.hidden = false;
}

pannenkoek3.addEventListener("dragend", opStapelen3);




