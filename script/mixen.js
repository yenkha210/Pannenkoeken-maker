console.log("check");

var h2El = document.querySelector("h2");
var mixEl = document.querySelector("#mix");
var volgendeKnop = document.querySelector("#laterverschijnen");

//audiofragmenten
var plopAudio = document.querySelector("#plop");
var trompetAudio = document.querySelector("#trompetgeluid");
var achtergrondAudio = document.querySelector("#achtergrondmuziek");

//muziek-knop
var buttonEl = document.querySelector("#button");
var knopStatus = 'uit';

//voor het meten van de "score"
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

//functie voor het mixen van het beslag (puntentelling)
function beslagMixen(){

    score = score + 1;
    console.log(score);
    h2El.textContent = score;

    if (score == 1){
        console.log("Het beslag is nog niet klaar")
        mixEl.src = "images/mix2.png"
        plopAudio.play();
    }
    if (score == 2){
        console.log("Het beslag is nog niet klaar")
        mixEl.src = "images/mix3.png"
        plopAudio.play();
    }
    if (score == 3){
        console.log("Het beslag is nog niet klaar")
        mixEl.src = "images/mix4.png"
        plopAudio.play();
    }
    if (score == 4){
        console.log("Het beslag is nog niet klaar")
        mixEl.src = "images/mix5.png"
        plopAudio.play();
    }
    if (score == 5){
        console.log("Het beslag is klaar")
        h2El.textContent = "Het beslag is klaar!";
        mixEl.src = "images/mix6.png"
        trompetAudio.play();
        volgendeKnop.hidden = false;
    }

    if (score > 4 ){
        score = 4
    }
}
mixEl.addEventListener ("dragend", beslagMixen);

