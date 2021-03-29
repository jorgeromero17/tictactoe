const playername1 = document.querySelector('#player1');
const playername2 = document.querySelector('#player2');
const sectionmain = document.querySelector('.section-main');
const sectiongame = document.querySelector('.section-game');
const startgame = document.querySelector('.btnstartgame');
const tableGame = document.querySelector('.table-game');
const pWinner = document.querySelector('.winner');
pWinner.style.visibility = "hidden";
const divButtons = document.querySelector('.div-buttons');
divButtons.style.visibility = "hidden";
turnPlayer = document.querySelector('.turn-player');
let turn = 1;
let cont = 0;

let matrix = new Array(3);
for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(3);
}

initializeMatrix();

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

function drawMove(elementTD){
    let x = elementTD.dataset.col;
    let y = elementTD.dataset.row;
    let move = 0;

    if(turn===1){
        elementTD.style.backgroundImage = "url('assets/icons/equis.svg')";
        //elementTD.onclick=null;
        elementTD.style.pointerEvents = 'none';
        turn = 2;
        move = 1;
    }
    else{
        elementTD.style.backgroundImage = "url('assets/icons/cero.svg')";
        //elementTD.onclick=null;
        elementTD.style.pointerEvents = 'none';
        turn = 1;
        move = 2;
    }
    writeturn(turn);
    fillMatrix(x,y,move);
}

function fillMatrix(x,y,move){

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if(i==x && j==y){
                matrix[i][j]=move;
            }
        }    
    }
    evaluateMatrix(matrix);
}

function evaluateMatrix(m){
    let fl = false;
    let winner = "";
    for (let i = 0; i < m.length; i++) {
        let j = 0;
        if(m[i][j]==1 && m[i][j+1]==1 && m[i][j+2]==1){
            //console.log("gana player 1 por fila");
            fl = true;
            winner = playername1.value;
        }
        else if(m[i][j]==2 && m[i][j+1]==2 && m[i][j+2]==2){
           // console.log("gana player 2 por fila");
            fl = true;
            winner = playername2.value;
        }
        else if(m[j][i]==1 && m[j+1][i]==1 && m[j+2][i]==1){
            //console.log("gana player 1 por columna");
            fl = true;
            winner = playername1.value;
        }
        else if(m[j][i]==2 && m[j+1][i]==2 && m[j+2][i]==2){
            //console.log("gana player 2 por columna");
            fl = true;
            winner = playername2.value;
        }
        else {
            if(i==0){
                if(m[0][0]==1 && m[1][1]==1 && m[2][2]==1){
                   // console.log("gana player 1 por diagonal principal");
                    fl = true;
                    winner = playername1.value;
                }
                else if(m[0][2]==1 && m[1][1]==1 && m[2][0]==1){
                   // console.log("gana player 1 por diagonal secundaria");
                    fl = true;
                    winner = playername1.value;
                }
                else if(m[0][0]==2 && m[1][1]==2 && m[2][2]==2){
                   // console.log("gana player 2 por diagonal principal");
                    fl = true;
                    winner = playername2.value;
                }
                else if(m[0][2]==2 && m[1][1]==2 && m[2][0]==2){
                   // console.log("gana player 2 por diagonal secundaria");
                    fl = true;
                    winner = playername2.value;
                }   
            }
        }
        
    }
    cont++;
    if(!fl && cont==9){
        winner = "none";
    }
    showWinner(winner);
}

function showWinner(winner){
    const noclicktds = document.querySelectorAll('.table-game td');

    if(winner==="none"){
        pWinner.style.visibility = "visible";
        pWinner.textContent = `Tie`;
        turnPlayer.textContent = ' ';
        divButtons.style.visibility = "visible";

        for (let i = 0 ; i < noclicktds.length ; i++) {
            noclicktds[i].style.pointerEvents = 'none';
        }
        
    }
    if(winner!=="none" && winner.length>1){
        pWinner.style.visibility = "visible";
        pWinner.textContent = `${winner} wins`;
        turnPlayer.textContent = ' ';
        divButtons.style.visibility = "visible";

        for (let i = 0 ; i < noclicktds.length ; i++) {
            noclicktds[i].style.pointerEvents = 'none';
        }
    }
}

function resetGame(){
    divButtons.style.visibility = "hidden";
    pWinner.style.visibility = "hidden";

    turn = 1;
    cont = 0;
    initializeMatrix();

    const resetTD = document.querySelectorAll('.table-game td');
    for (let i = 0 ; i < resetTD.length ; i++) {
        resetTD[i].style.backgroundImage = 'none';
        resetTD[i].style.pointerEvents = 'auto';
    }
    writeturn(turn);
}

function goBack(){
    location.reload();
}

function initializeMatrix(){
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix.length; j++){
            matrix[i][j] = 0;
        }      
    }
}