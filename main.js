//Variables
let currentButton = 'default';
let defaultColor = 'white';
let chosenColor = '';
let defaultSize = 4;
let newSize;
let activeButton = '';

//CONSTANTS
const bodyWrapper = document.getElementById("bodyWrapper");
const gridMain = document.getElementById("gridMain");
const colorIndicator = document.getElementById('color-indicator');
const colorButton = document.getElementById("pen-color"); 
const eraserButton = document.getElementById("eraser");
const gridButton = document.getElementById("grid-size");
const clearButton = document.getElementById("clear");
const rainbowButton = document.getElementById("rainbow");
const slider = document.getElementById("gridSlider");
const btns = document.querySelectorAll(".button");

//Color Picker Wheel
const colorPicker = new iro.ColorPicker("#color-picker", {
    width:135, color: "#ffff"
})
colorPicker.on('color:change', function(color) {
    colorIndicator.style.backgroundColor = color.hexString;
    console.log(color.hexSting);
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
        gridPiece.addEventListener('mouseover', colorGridPiece);
        gridPiece.addEventListener('mousedown', colorGridPiece);
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
console.log(gridPieces);





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
}

clearButton.addEventListener('click', clearAll);
function clearAll() {
    gridPieces.forEach(gridPiece => {
        gridPiece.style.backgroundColor = "#2f333a";
    });
}




//Drawing Function
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

// This will allow the user to click and drag to draw
let mousedown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

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
        let clrBtn = colorButton.classList;
        clrBtn.add("active");
        deactivateButton(activeButton);
    }
        
    else if(activeButton == "eraser-button") {
        let ersrBtn = eraserButton.classList;
        ersrBtn.add("active");
        deactivateButton(activeButton);
    }

    // else if(activeButton == "clear-button") {
    //     let clearBtn = clearButton.classList;
    //     clearBtn.add("active");
    //     deactivateButton(activeButton);
    // }
}

function deactivateButton(activeButton) {
    if(activeButton == "color-button") {
        let ersrBtn = eraserButton.classList;
        ersrBtn.remove("active");
        let clearBtn = clearButton.classList;
        clearBtn.remove("active");
    }
        
    else if(activeButton == "eraser-button") {
        let clrBtn = colorButton.classList;
        clrBtn.remove("active");
        let clearBtn = clearButton.classList;
        clearBtn.remove("active");
    }

    // else if(activeButton == "clear-button") {
    //     let clrBtn = colorButton.classList;
    //     clrBtn.remove("active");
    //     let ersrBtn = eraserButton.classList;
    //     ersrBtn.remove("active");
    // }
}















