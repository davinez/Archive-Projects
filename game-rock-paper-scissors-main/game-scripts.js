//Functions declaration

//Generate computer choice
function computerPlay() {
    let randomPlay = Math.floor(Math.random() * 3) + 1;
    if (randomPlay === 1) {
        return "rock";
    } else if (randomPlay === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
//Return player selection
function playerPlay(buttonId) {
    if (buttonId === "rock") {
        return "rock";
    } else if (buttonId === "paper") {
        return "paper";
    } else if (buttonId === "scissors") {
        return "scissors";
    }
}

//Game rules
function gameRound(computer, player) {

    switch (true) {
        case player === "rock":
            if (computer === "rock") {
                return "tie";
            }
            if (computer === "paper") {
                return "lose";
            }
            if (computer === "scissors") {
                return "win";
            }

        case player === "paper":
            if (computer === "rock") {
                return "win";
            }
            if (computer === "paper") {
                return "tie";
            }
            if (computer === "scissors") {
                return "lose";
            }

        case player === "scissors":
            if (computer === "rock") {
                return "lose";
            }
            if (computer === "paper") {
                return "win";
            }
            if (computer === "scissors") {
                return "tie";
            }

    }
}

//DOM manipulation for display winner elements
function winnerBoard() {
    const scoreboard = document.querySelector("body");
    const hiddenScores = document.querySelector("#container-general");
    const hiddenbuttons = document.querySelector("#container");
    hiddenScores.style.display = "none";
    hiddenbuttons.style.display = "none";

    winner = document.createElement("div");
    winner.setAttribute("id", "winnerDiv");
    playAgain = document.createElement("button");
    playAgain.setAttribute("id", "playAgain");
    playAgain.textContent = "Play Again";

    if (parseInt(playerWins.textContent) >= parseInt(computerWins.textContent)) {
        winner.textContent = "You Win!";
    } else if (parseInt(playerWins.textContent) <= parseInt(computerWins.textContent)) {
        winner.textContent = "You Lose! Try again";
    } else {
        winner.textContent = "It's a Tie";
    }

    scoreboard.appendChild(winner);
    scoreboard.appendChild(playAgain);
    
    playAgain.addEventListener("click", function (e) {
        hiddenScores.style.display = "block";
        hiddenbuttons.style.display = "block";
        roundCounter = 0;
        tieWins.textContent = "0";
        playerWins.textContent = "0";
        computerWins.textContent = "0";
        displaySelections.textContent = "Make a choice";
        scoreboard.removeChild(winner);
        scoreboard.removeChild(playAgain);
    });
}

// Play 1 round and declare a winner at round 5
function game() {

    let computerSelection = computerPlay();
    let playerSelection = playerPlay(this.getAttribute("id")); //this. refers tu actual "button" element
    let result = gameRound(computerSelection, playerSelection);
    let stringCounter;

    displaySelections.textContent = "You played " + playerSelection + " and " +
        " the computer played " + computerSelection;
    if (result === "tie") {
        stringCounter = parseInt(tieWins.textContent) + 1;
        tieWins.textContent = stringCounter.toString();
    } else if (result === "win") {
        stringCounter = parseInt(playerWins.textContent) + 1;
        playerWins.textContent = stringCounter.toString();
    } else if (result === "lose") {
        stringCounter = parseInt(computerWins.textContent) + 1;
        computerWins.textContent = stringCounter.toString();
    }
    roundCounter++;
    if (roundCounter === 5) {  //reset scores
        winnerBoard();
    }



}
//End of functions declaration

const playerWins = document.querySelector("#playerWins");
const computerWins = document.querySelector("#computerWins");
const tieWins = document.querySelector("#tieWins");
const displaySelections = document.querySelector("#selections");
let roundCounter = 0;

const buttons = document.querySelectorAll(".playButtons");
buttons.forEach((button) => {
    button.addEventListener("click", game);
});


















