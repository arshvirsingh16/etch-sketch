//Variables
let currentButton = 'default';
let defaultColor = 'white';
let chosenColor = '';
let defaultSize = 4;
let newSize;

//CONSTANTS
const bodyWrapper = document.getElementById("bodyWrapper");
const gridMain = document.getElementById("gridMain");
const colorButton = document.getElementById("pen-color"); 
const eraserButton = document.getElementById("eraser");
const gridButton = document.getElementById("grid-size");
const clearButton = document.getElementById("clear");
const slider = document.getElementById("gridSlider");

//GRID
for(i = 0; i < 64; i++){
    let gridPiece = document.createElement('div');
    gridPiece.className = "gridPiece"; 
    gridPiece.addEventListener('mouseover', colorGridPiece);
    gridPiece.addEventListener('mousedown', colorGridPiece);
    gridMain.appendChild(gridPiece);
}

const gridPieces = document.querySelectorAll(".gridPiece");

//Grid Size Slider Function

var userOutput = document.getElementById("value");

function changeGridSize(newSize) {
    gridMain.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    gridMain.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
}

changeGridSize(slider.value);
userOutput.innerHTML = slider.value + ' x ' + slider.value;
//To show the value when the user slides
slider.oninput = function() {
    userOutput.innerHTML = this.value +' x '+ this.value;
    newSize = this.value;
    console.log(newSize);
    changeGridSize(newSize);
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


    chosenColor = "#2f333a";
    // console.log(currentButton);
    // console.log(eraserColor);
}

clearButton.addEventListener('click', clearAll);
function clearAll() {
    gridPieces.forEach(gridPiece => {
        gridPiece.style.backgroundColor = "#2f333a";
    });
}

console.log(gridPieces);


//Drawing Function

//This will allow the user to click and drag to draw
// let mousedown = false;
// document.body.onmousedown = () => (mouseDown = true);
// document.body.onmouseup = () => (mouseDown = false);

function colorGridPiece(e) {
    if(e.type === 'mouseover' && !mousedown) return
    

    if(currentButton === 'default'){
        e.target.style.backgroundColor = defaultColor;
    }

    else if(currentButton === 'bColor') {
        e.target.style.backgroundColor = chosenColor;
    }

    else if(currentButton === 'eColor') {
        e.target.style.backgroundColor = chosenColor;
    }

}














