//Global functions declaration
function createSquares(squareInput) {
    for (let i = 0; i < (squareInput * squareInput); i++) {   //Set the numbers of squares to fill the grid
        let squareDivs = document.createElement("div");
        squareDivs.classList.add("squaresOff");
        container.appendChild(squareDivs);
    }
    container.style.gridTemplateColumns = "repeat(" + squareInput + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + squareInput + ", 1fr)";
}

function changeGrid() {
    const gridSize = document.querySelector("#gridSize");
    gridSize.textContent = "Size: " + this.value + "x" + this.value; //Change "p" element
    removeOldSquares();
    newInput = parseInt(this.value);
    createSquares(newInput);
    mouseOver();
}

function removeOldSquares() {
    const oldSquares = document.querySelectorAll(".squaresOff, .squaresOn");
    oldSquares.forEach((oldSquare) => {
        container.removeChild(oldSquare);
    });
}

function mouseOver() {
    const squares = document.querySelectorAll(".squaresOff");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {  // highlight the mouseover target 
            square.classList.remove("squaresOff");
            square.classList.add("squaresOn");
        });
    });
}

function reset() {
    const squares = document.querySelectorAll(".squaresOff, .squaresOn");
    squares.forEach((square) => {
        if (square.getAttribute("class") === "squaresOn") {
            square.classList.remove("squaresOn");
            square.classList.add("squaresOff");
        }
    });
}
//end of global functions declaration


const container = document.querySelector("#container");
const initialInput = 16;
createSquares(initialInput);  //Initial program setup
mouseOver();

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset);

const rangeInput = document.querySelector("#range");
rangeInput.addEventListener("input", changeGrid);

