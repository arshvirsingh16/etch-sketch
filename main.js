//Temporary Constants
const tColor = "black";

//Variables
let currentButton = 'default';
let defaultColor = 'white';
let chosenColor = '';

//CONSTANTS
const bodyWrapper = document.querySelector("#bodyWrapper");
const gridMain = document.querySelector("#gridMain");
const gridPieces = document.querySelectorAll("#gridPiece");
const colorButton = document.querySelector("#pen-color"); 
const eraserButton = document.querySelector("#eraser");
const gridButton = document.querySelector("#grid-size");
const clearButton = document.querySelector("clear");

//GRID
for(i = 0; i < 16; i++){
    let gridPiece = document.createElement('div');
    gridPiece.className = "gridPiece"; 
    gridPiece.addEventListener('mouseover', colorGridPiece);
    gridPiece.addEventListener('mousedown', colorGridPiece);
    gridMain.appendChild(gridPiece);
}

//Buttons Functions
colorButton.addEventListener('click', pickColor);
function pickColor() {
    currentButton = 'bColor';
    let color = window.prompt("Which color?");
    let newColor = color.toLowerCase();
    console.log(newColor);
    chosenColor = newColor;
}

eraserButton.addEventListener('click', eraseColor);
function eraseColor() {
    currentButton = 'eColor';
    chosenColor = 'white';
    console.log(currentButton);
}

clearButton.addEventListener('click', clearAll);
function clearAll() {
    gridPieces.target.style.backgroundColor = "yellow";
}



//Drawing Function

function colorGridPiece(e) {
    if(e.type == 'mouseover' && e.type != 'mousedown') {
        return;
    }

    else if(currentButton == 'default'){
        e.target.style.backgroundColor = defaultColor;
    }

    else if(currentButton == 'bColor') {
        e.target.style.backgroundColor = chosenColor;
    }

    else if(currentButton == 'eColor') {
        e.target.stylebackgroundColor = chosenColor;
    }
}










