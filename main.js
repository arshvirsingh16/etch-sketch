//Temporary Constants
const tColor = "black";


//CONSTANTS
const bodyWrapper = document.querySelector("#bodyWrapper");
const gridMain = document.querySelector("#gridMain");
const gridPieces = document.querySelectorAll("#gridPiece"); 

//GRID
for(i = 0; i < 16; i++){
    let gridPiece = document.createElement('div');
    gridPiece.className = "gridPiece"; 
    gridPiece.addEventListener('mouseover', colorGridPiece);
    gridPiece.addEventListener('mousedown', colorGridPiece);
    gridMain.appendChild(gridPiece);
}



//Drawing Function

function colorGridPiece(e) {
    if(e.type == 'mouseover' && e.type != 'mousedown') {
        return;
    }

    if(tColor == 'black') {
        e.target.style.backgroundColor = "black";
    }
}






