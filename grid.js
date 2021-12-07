//grid functions

function createGridArray() {
    //create and return grid array
    return [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
}

function createDivGrid() {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
          // create a div for each element in 2d grid
          let divEl = document.createElement("div");

            //add an id to each divEl
            divEl.id = "cell" + row + "-" + col;000

          //add appropriate class to each divEl
          if (grid[row][col] == 1) {
              divEl.classList.add("grey");
          } else if (grid[row][col] == 2) {
              divEl.classList.add("player");
          }

          //add dataset values for row and col
          divEl.dataset.row = row;
          divEl.dataset.col = col;
          
          //add event lsitener to each div element
          divEl. addEventListener("click", cellClicked)

          //add div to container
          document.getElementById("container").append(divEl);
        }
    }
}

function cellClicked(event) {
    // set  the color of the clicked cell

    //get value of select color element
    let color = document.getElementById("cell-color").value;

    //get row and col of the clicked cell
    let row = event.target.dataset.row;
    let col = event.target.dataset.col;


    //update clicked cell based on selected color
    event.target.classList = ""; //empty cell class list
    grid[row][col] = 0; //set grid to white
    if (color == "grey") {
        event.target.classList.add("grey")
        grid[row][col] = 1;
    }
}