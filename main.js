// grid-maze designer

//global constants
const NUM_ROWS = 10;
const NUM_COLS = 10;


//create an array to represent a grid
let grid = createGridArray();

//add a player to the grid array
let player = {
    row: 5,
    col: 5
}

grid[player.row][player.col] = 2;

// create divs to model grid array
createDivGrid();

//player movement - key event listeners
document.addEventListener("keydown", movePlayer);

function movePlayer(event) {
    if(event.keyCode == 39) {//right arrow key
        updatePlayer(player.row, player.col + 1);
    }else if (event.keyCode == 37) { //left arrow key
        updatePlayer(player.row, player.col - 1);
    }else if (event.keyCode == 38) { //up arrow key
        updatePlayer(player.row - 1, player.col);
    }else if (event.keyCode == 40) { //down arrow key
        updatePlayer(player.row + 1, player.col);
    }
}

function updatePlayer(newRow, newCol) {
     //remove player class from current location
     let cellId = "cell" + player.row + "-" + player.col
     document.getElementById(cellId).classList.remove("player");
 
     //Set grid array to 0 for current location
     grid[player.row][player.col] = 0;
 
     //update player location
     player.row = newRow;
     player.col = newCol;
 
     //update class and grid
     cellId = "cell" + player.row + "-" + player.col
     document.getElementById(cellId).classList.add("player");
     grid[player.row][player.col] = 2;
}