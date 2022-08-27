const bodyWrapper = document.querySelector("#bodyWrapper");

let grid = document.createElement('div');
bodyWrapper.appendChild(grid);

for(i = 0; i < 16; i++) {
    let gridDiv = document.createElement('div');
    grid.appendChild(gridDiv);
}



