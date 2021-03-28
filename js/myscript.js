const playername1 = document.querySelector('#player1');
const playername2 = document.querySelector('#player2');

const sectionmain = document.querySelector('.section-main');
const sectiongame = document.querySelector('.section-game');

const startgame = document.querySelector('.btnstartgame');


function checknames(){
    let name1 = playername1.value;
    let name2 = playername2.value;
    
   if(name1.length < 1 || name2.length < 1){
        alert("Enter the name of the players");
    }
    else{
        // console.log(` ${name1} ${name2}`)
        sectionmain.style.visibility = "hidden";
        sectiongame.style.visibility = "visible";
    }
}


startgame.addEventListener('click', checknames);