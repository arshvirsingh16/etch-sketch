//Variables
let currentButton = 'default';
let defaultColor = 'white';
let chosenColor = '';
let eraserColor = '';

//CONSTANTS
const bodyWrapper = document.getElementById("bodyWrapper");
const gridMain = document.getElementById("gridMain");
const gridPieces = document.querySelectorAll("#gridPiece");
const colorButton = document.getElementById("pen-color"); 
const eraserButton = document.getElementById("eraser");
const gridButton = document.getElementById("grid-size");
const clearButton = document.getElementById("clear");

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
    let color = window.prompt("Color");

    eraserColor = color.toLowerCase();
    console.log(currentButton);
    console.log(eraserColor);
}

clearButton.addEventListener('click', clearAll);
function clearAll() {
    gridPieces.forEach(gridPiece => {
        gridPiece.style.backgroundColor = "black";
    });
}



//Drawing Functions

function colorGridPiece(e) {
    if(e.type == 'mouseover' && e.type != 'mousedown') {
        return;
    }

    if(e.type == 'mousedown') {

    if(currentButton === 'default'){
        e.target.style.backgroundColor = defaultColor;
    }

    else if(currentButton === 'bColor') {
        e.target.style.backgroundColor = chosenColor;
    }

    else if(currentButton === 'eColor') {
        e.target.stylebackgroundColor = eraserColor;
    }
}

}










