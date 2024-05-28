console.log("check");

var h2El = document.querySelector("h2");
var komEl = document.querySelector("#kom");
var volgendeKnop = document.querySelector("#laterverschijnen");

//ingrediënten - sleepbaar
var bloemEl = document.querySelector("#bloem");
console.log(bloemEl);
var zoutEl = document.querySelector("#zout");
var melkEl = document.querySelector("#melk");
var eierenEl = document.querySelector("#eieren");
var boterEl = document.querySelector("#boter");

//ingrediënten - verstopt
var bloemBeslag = document.querySelector("#bloembeslag");
var melkBeslag = document.querySelector("#melkbeslag");
var eiBeslag = document.querySelector("#eibeslag");
var boterBeslag = document.querySelector("#boterbeslag");

//audiofragmenten
var korrelAudio = document.querySelector("#korrelgeluid");
var eiAudio = document.querySelector("#eigeluid");
var melkAudio = document.querySelector("#melkgeluid");
var boterAudio = document.querySelector("#botergeluid");
var achtergrondAudio = document.querySelector("#achtergrondmuziek");

//muziek-knop
var buttonEl = document.querySelector("#button");
var knopStatus = 'uit';

//voor conditie
var nextStep = 1 

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


//Alle functies voor het maken van het beslag
function bloemSlepen(){
    if( nextStep == 1 ) {
        bloemBeslag.hidden = false;
        bloemEl.classList.add("hidden");
        nextStep = 2;
        h2El.textContent = "Sleep de ingrediënten naar de kom"
        korrelAudio.play();
    } 
}
console.log(bloemEl);
bloemEl.addEventListener("dragend",bloemSlepen);

function zoutSlepen(){
    if( nextStep < 2 ){
        h2El.textContent = "Doe eerst de bloem in de kom" 
    }else{
        zoutEl.classList.add("hidden");
        nextStep = 3;
        h2El.textContent = "Sleep de ingrediënten naar de kom"
        korrelAudio.play();
    }
}

zoutEl.addEventListener("dragend",zoutSlepen);

function melkSlepen(){
    if( nextStep < 3 ){
        h2El.textContent = "Doe eerst de bloem en zout in de kom"
    }else{
        melkBeslag.hidden = false;
        melkEl.classList.add("hidden");
        nextStep = 4;
        h2El.textContent = "Sleep de ingrediënten naar de kom"
        melkAudio.play();
    }
}

melkEl.addEventListener("dragend",melkSlepen);

function eierenSlepen(){
    if( nextStep < 4 ){
        h2El.textContent = "Doe eerst de bloem , zout en melk in de kom"   
    }else{
    eiBeslag.hidden = false;
    eierenEl.classList.add("hidden");
    nextStep = 5;
    h2El.textContent = "Sleep de ingrediënten naar de kom"
    eiAudio.play();
    }
}

eierenEl.addEventListener("dragend",eierenSlepen);

function boterSlepen(){
    if( nextStep < 5 ){
        h2El.textContent = "Doe eerst de bloem , zout , melk en eieren in de kom"    
    }else{
    boterBeslag.hidden = false;
    boterEl.classList.add("hidden");
    h2El.textContent = "Het beslag is klaar!";
    boterAudio.play();
    volgendeKnop.hidden = false;
    }
}

boterEl.addEventListener("dragend",boterSlepen);