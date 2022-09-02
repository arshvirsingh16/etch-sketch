//Variables
let currentButton = 'bColor';
let defaultSize = 4;
let newSize;
let activeButton = 'color-button';
let chosenColor = '#ffff';
let hex = '#ffff';

//CONSTANTS
const bodyWrapper = document.getElementById("bodyWrapper");
const gridMain = document.getElementById("gridMain");
const colorIndicator = document.getElementById('color-indicator');
const colorButton = document.getElementById("pen-color");
const rainbowButton = document.getElementById("rainbow"); 
const eraserButton = document.getElementById("eraser");
const gridButton = document.getElementById("grid-size");
const clearButton = document.getElementById("clear");
const slider = document.getElementById("gridSlider");
const btns = document.querySelectorAll(".button");

//Variables dependent on constants
let clrBtn = colorButton.classList;
let ersrBtn = eraserButton.classList;
let rainBtn = rainbowButton.classList;

//Color Picker Wheel
const colorPicker = new iro.ColorPicker("#color-picker", {
    width: 135, color: "#ffff"
})

colorPicker.on('color:change', function(color) {
    colorIndicator.style.backgroundColor = color.hexString;
    hex = colorPicker.color.hexString;
    chosenColor = hex;
    console.log(chosenColor);
});


//Grid Size Slider Function
let userOutput = document.getElementById("value");

changeGridSize(slider.value);
userOutput.innerHTML = slider.value + ' x ' + slider.value;

//To show the value when the user slides
slider.oninput = function() {
    userOutput.innerHTML = this.value +' x '+ this.value;
    newSize = this.value;
    changeGrid(newSize);
}

function changeGridSize(newSize) {
    gridMain.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    gridMain.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;

    for(i = 0; i < newSize * newSize; i++){
        let gridPiece = document.createElement('div');
        gridPiece.className = "gridPiece"; 
        gridPiece.addEventListener('mousedown', colorGridPiece);
        gridPiece.addEventListener('mouseover', colorGridPiece);
        // gridPiece.style.border = "#121212 solid 1px"
        gridMain.appendChild(gridPiece);
    }
}

//Will clear the grid before changing to new sized grid
function changeGrid(newSize) {
    clearAll();
    changeGridSize(newSize);
}

const gridPieces = document.querySelectorAll(".gridPiece");

//Buttons Functions
colorButton.addEventListener('click', pickColor);
function pickColor() {
    currentButton = 'bColor';
    chosenColor = hex;
    console.log(chosenColor);
}

rainbowButton.addEventListener('click', rainbowColor);
function rainbowColor() {
    currentButton = 'rColor';
}

eraserButton.addEventListener('click', eraseColor);
function eraseColor() {
    currentButton = 'eColor';
    chosenColor = "#2f333a";
}

clearButton.addEventListener('click', clearAll);
function clearAll() {
    gridPieces.forEach(gridPiece => {
        gridPiece.style.backgroundColor = "#2f333a";
    });
}

//WINDOW ONLOAD
clrBtn.add("active");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
console.log(mouseDown);


//Drawing Function
function colorGridPiece(e) {
    if(e.type === 'mouseover' && !mouseDown) {
        return;
    }
    
    if(currentButton === 'bColor') {
        e.target.style.backgroundColor = chosenColor;
    }

    else if(currentButton == 'rColor') {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    else if(currentButton === 'eColor') {
        e.target.style.backgroundColor = chosenColor;
    }

}



//Button Active, Not Active function
btns.forEach(button => {
    button.addEventListener('click', (e) => {
        activeButton = button.value;
        console.log(activeButton);
        activateButton(activeButton);
    });
})

function activateButton(activeButton) {
    if(activeButton == "color-button") {
        clrBtn.add("active");
        deactivateButton(activeButton);
    }

    else if(activeButton == "rainbow-button") {
        rainBtn.add("active");
        deactivateButton(activeButton);
    }

    else if(activeButton == "eraser-button") {
        ersrBtn.add("active");
        deactivateButton(activeButton);
    }

    else if(activeButton == "clear-button") {
        deactivateButton(activeButton);
    }
}

function deactivateButton(activeButton) {
    if(activeButton == "color-button") {
        rainBtn.remove("active");
        ersrBtn.remove("active");
    }

    else if(activeButton == "rainbow-button") {
        clrBtn.remove("active");
        ersrBtn.remove("active");
    }

    else if(activeButton == "eraser-button") {
        clrBtn.remove("active");
        rainBtn.remove("active");
    }
}















