function Player(playerName, mark) {
  this.playerName = playerName;
  this.mark = mark;
}

const gameBoard = (() => {
  const playerOne = new Player("", "X");
  const playerTwo = new Player("", "O");

  let currentRound = 0;
  let gameBlocks = []; //Array for store players marks

  const playerTurnText = document.querySelector(".player");

  const switchCurrentPlayer = () => {
    if (currentRound % 2 === 0) {
      playerTurnText.textContent = `${playerOne.playerName} turn`;
      return "X";
    } else if (currentRound % 2 !== 0) {
      playerTurnText.textContent = `${playerTwo.playerName} turn`;
      return "O";
    }
  };

  const checkWinner = () => {
    //check rows
    for (let i = 0; i < gameBlocks.length; i = i + 3) {
      if (
        gameBlocks[i] !== undefined &&
        gameBlocks[i] === gameBlocks[i + 1] &&
        gameBlocks[i] === gameBlocks[i + 2]
      ) {
        return gameBlocks[i];
      }
    }

    //check columns
    for (let i = 0; i < gameBlocks.length; i++) {
      if (
        gameBlocks[i] !== undefined &&
        gameBlocks[i] === gameBlocks[i + 3] &&
        gameBlocks[i] === gameBlocks[i + 6]
      ) {
        return gameBlocks[i];
      }
    }

    //Check diagonal
    if (
      gameBlocks[4] !== undefined &&
      gameBlocks[4] === gameBlocks[4 - 4] &&
      gameBlocks[4] === gameBlocks[4 + 4]
    ) {
      return gameBlocks[4];
    } else if (
      gameBlocks[4] !== undefined &&
      gameBlocks[4] === gameBlocks[4 - 2] &&
      gameBlocks[4] === gameBlocks[4 + 2]
    ) {
      return gameBlocks[4];
    }

    //Tie
    if (currentRound === 9) {
      return 2;
    }

    return 0;
  };

  //Renders the content of the gameBlocks array
  const fillBoard = () => {
    for (let i = 0; i < blockSelector.length; i++) {
      blockSelector[i].textContent = gameBlocks[i];
    }
  };

  const checkFilledBlock = (blockNumber) => {
    if (gameBlocks[blockNumber] === undefined) {
      return true;
    } else {
      return false;
    }
  };

  const scoreBoard = (playerMark) => {
    if (playerMark === 2) {
      alert("Tie");
    } else if (playerMark === playerOne.mark) {
      alert(playerOne.playerName + " wins");
    } else if (playerMark === playerTwo.mark) {
      alert(playerTwo.playerName + " wins");
    }
  };

  //Play 1 round when player sets a mark
  const playRound = (blockNumber) => {
    currentRound++;
    gameBlocks[blockNumber] = switchCurrentPlayer();
    fillBoard();
    if (typeof checkWinner() === "string") {
      scoreBoard(checkWinner());
    } else if (checkWinner() === 2) {
      scoreBoard(checkWinner());
    }
  };

  const blockSelector = document.querySelectorAll(".block");
  for (let i = 0; i < blockSelector.length; i++) {
    blockSelector[i].addEventListener("click", () => {
      //Prevents to set a mark on filled block
      if (checkFilledBlock(i)) {
        playRound(i);
      }
    });
  }

  //GameUI
  const modal = document.getElementById("myModal");
  const btnModal = document.getElementById("btn-modal");
  const span = document.getElementsByClassName("close")[0];

  btnModal.addEventListener("click", () => {
    modal.style.display = "block";
  });

  span.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });

  const beginBtn = document.querySelector(".btn-submit");

  beginBtn.addEventListener("click", () => {
    playerOne.playerName = document.getElementById("playerName").value;
    playerTwo.playerName = document.getElementById("playerName2").value;
    modal.style.display = "none";
    playerTurnText.textContent = `${playerOne.playerName} turn`;
  });

  const resetBtn = document.getElementById("btn-reset");
  resetBtn.addEventListener("click", () => {
    currentRound = 0;
    gameBlocks = [];
    fillBoard();
    playerTurnText.textContent = `${playerOne.playerName} turn`;
  });
})();
