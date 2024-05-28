console.log("begischerm");

//muziek-knop 
var achtergrondAudio = document.querySelector("#achtergrondmuziek");
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