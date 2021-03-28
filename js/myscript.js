const playername1 = document.querySelector('#player1');
const playername2 = document.querySelector('#player2');

const sectionmain = document.querySelector('.section-main');
const sectiongame = document.querySelector('.section-game');

const startgame = document.querySelector('.btnstartgame');

/* const ZZ = document.querySelector('#ZZ');
const ZO = document.querySelector('#ZO');
const ZT = document.querySelector('#ZT');
const OZ = document.querySelector('#OZ');
const OO = document.querySelector('#OO');
const OT = document.querySelector('#OT');
const TZ = document.querySelector('#TZ');
const TO = document.querySelector('#TO');
const TT = document.querySelector('#TT'); */

turnPlayer = document.querySelector('.turn-player');
let turn = 1;

function checknames(){
    let name1 = playername1.value;
    let name2 = playername2.value;
    
    if(name1.length < 1 || name2.length < 1){
        alert("Enter the name of the players");
    }
    else{
        sectionmain.style.visibility = "hidden";
        sectiongame.style.visibility = "visible";
    }
    writeturn(turn);
}

function writeturn(turn){
    if(turn===1){
        turnPlayer.textContent = `${playername1.value}'s turn`;
    }else{
        turnPlayer.textContent = `${playername2.value}'s turn`;
    }
}

startgame.addEventListener('click', checknames);

function drawMove(element){
    if(turn===1){
        element.style.backgroundImage = "url('assets/icons/equis.svg')";
        turn = 2;
    }
    else{
        element.style.backgroundImage = "url('assets/icons/cero.svg')";
        turn = 1;
    }
    writeturn(turn);
}

