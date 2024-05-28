console.log("versieren");

var pEl = document.querySelector("#naam");
var vraagteken = document.querySelector("#vraagteken");
var verassingKnop = document.querySelector("#verassing");

// versieringen - verstopt
var aardbeisaus = document.querySelector("#aardbeisaus");
var aardbeien = document.querySelector("#aardbeien");
var plakjeBoter = document.querySelector("#plakjeboter");
var stroop = document.querySelector("#stroop");
var chocoladesaus = document.querySelector("#chocoladesaus");
var discodip = document.querySelector("#discodip");
var banaan = document.querySelector("#banaan");
var blauwebessen  = document.querySelector("#blauwebessen");

// versieringen om uit te kiezen - sleepbaar
var aardbeisausKeuze = document.querySelector("#aardbeisauskeuze");
var aardbeiKeuze = document.querySelector("#aardbeikeuze");
var boterKeuze = document.querySelector("#boter2")
var stroopKeuze = document.querySelector("#stroopkeuze");

//versieringen in de verassing
var chocoladesausKeuze = document.querySelector("#chocoladesauskeuze");
var banaanKeuze = document.querySelector("#banaankeuze");
var discodipKeuze = document.querySelector("#discodipkeuze");
var blauwebessenKeuze = document.querySelector("#blauwebessenkeuze");

//audiofragmenten
var plopAudio = document.querySelector("#plop");
var achtergrondAudio = document.querySelector("#achtergrondmuziek");

//muziek-knop
var buttonEl = document.querySelector("#button");
var knopStatus = 'uit';

//array met verassing elementen
var verassing = ["chocoladesauskeuze","banaankeuze", "discodipkeuze", "blauwebessenkeuze"];

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


//functie om aardbeisaus te vertonen op de pannenkoek
function toonAardbeisaus(){
    aardbeisaus.hidden = false;
    plopAudio.play();
    console.log (aardbeisaus);
}

aardbeisauskeuze.addEventListener("dragend", toonAardbeisaus);

//functie om aardbeien te vertonen op de pannenkoek
function toonAardbeien(){
    aardbeien.hidden = false;
    plopAudio.play();
    console.log (aardbeien);
}

aardbeikeuze.addEventListener("dragend", toonAardbeien);

//functie om een plakje boter te vertonen op de pannenkoek
function toonPlakjeboter(){
    plakjeBoter.hidden = false;
    plopAudio.play();
    console.log (plakjeBoter);
}

boterKeuze.addEventListener("dragend", toonPlakjeboter);

//functie om stroop te vertonen op de pannenkoek
function toonStroop(){
    stroop.hidden = false;
    plopAudio.play();
    console.log (stroop);
}

stroopKeuze.addEventListener("dragend", toonStroop);


//functie om willekeurig een versiering te vertonen op de pannenkoek
function doeRandom(){
    var randomKeuze = Math.random()*4;
    randomKeuze = Math.floor(randomKeuze);
    pEl.textContent = verassing[randomKeuze];

    if (randomKeuze == 0){
        vraagteken.src = "images/chocoladesauskeuze.png";
        pEl.textContent = "Chocoladesaus";
        chocoladesaus.hidden = false;
        plopAudio.play();
        console.log (chocoladesaus);
    }

    if (randomKeuze == 1){
        vraagteken.src = "images/banaankeuze.png";
        pEl.textContent = "Banaan";
        banaan.hidden = false;
        plopAudio.play();
        console.log (banaan);
    }

    if (randomKeuze == 2){
        vraagteken.src = "images/discodipkeuze.png";
        pEl.textContent = "Discodip";
        discodip.hidden = false;
        plopAudio.play();
        console.log (discodip);

    }
    if (randomKeuze == 3){
        vraagteken.src = "images/blauwebessenkeuze.png";
        pEl.textContent = "Blauwebessen";
        blauwebessen.hidden = false;
        plopAudio.play();
        console.log (blauwebessen);
    }
}
    
verassingKnop.addEventListener("click", doeRandom);

