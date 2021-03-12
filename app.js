const GameBoard = (function () {
  let one = document.querySelector("#boxone");
  let two = document.querySelector("#boxtwo");
  let three = document.querySelector("#boxthree");
  let four = document.querySelector("#boxfour");
  let five = document.querySelector("#boxfive");
  let six = document.querySelector("#boxsix");
  let seven = document.querySelector("#boxseven");
  let eight = document.querySelector("#boxeight");
  let nine = document.querySelector("#boxnine");
  let gameArray = [one, two, three, four, five, six, seven, eight, nine];

  return gameArray;
})();


function _showGame(GameBoard) {
  let newGameArray = [];
  for (let i = 0; i < GameBoard.length; i++) {
    newGameArray.push(GameBoard[i].textContent);
  }
  return newGameArray;
}

//Player
const Player = (token) => {
  const getToken = () => token;
  return getToken();
};

//Game
const Game = (function () {
  let Player1 = "";
  let Player2 = "";
  let count = 0;
  var playerName1 = document.querySelector(".player1name");
  var playerName2 = document.querySelector(".player2name");
  let won = [];

  const _getTurn = function () {
    /////////////////////////////////
    /////////////////////////////////
    //////////////////////////////////
    //turn_count(board) % 2 == 0 ? "X" : "O"

    if (count % 2 === 0) {
      Player1 = Player("X");
      count++;
      return Player1;
    } else {
      Player2 = Player("O");
      count++;
      return Player2;
    }
  };

  const showName = function () {
    var lets = document.querySelector(".lets");
    var play = document.querySelector(".play");
    var ready1 = document.querySelector(".name1");
    var ready2 = document.querySelector(".name2");
    var player1card = document.querySelector(".playeronecard");
    var player2card = document.querySelector(".playertwocard");
    var TicTacToe = document.querySelector(".othercontainer");
    var tttGameBoard = document.querySelector(".container");
    var vs = document.querySelector(".vs");
    let popUp = document.querySelector(".popup");

    ready1.addEventListener("click", function () {
      if (playerName1.value !== "") {
        lets.innerHTML = playerName1.value + " ";
        lets.style.color = "#22A2F2";
        lets.appendChild(vs);
        vs.style.display = "inline";
        play.innerHTML = "";
        player1card.style.display = "none";
        ready2.disabled = false;
      } else {
        popUp.style.display = "block";
        player1card.appendChild(popUp);

        setTimeout(function () {
          popUp.style.display = "none";
        }, 2000);

        player1card.style.display = "block";
        lets.style.display = "block";
        lets.innerHTML = `Lets` + `&nbsp`;
        play.style.display = "block";
        play.innerHTML = "Play";
      }
    });

    ready2.addEventListener("click", function () {
      if (playerName2.value !== "") {
        play.innerHTML = "&nbsp" + playerName2.value;
        play.style.color = "orange";
        player2card.style.display = "none";
        TicTacToe.style.gridColumn = "1";
        tttGameBoard.style.display = "grid";
      } else {
        popUp.style.display = "block";
        player2card.appendChild(popUp);

        setTimeout(function () {
          popUp.style.display = "none";
        }, 2000);
      }
    });
  };

  const _draw = function () {
    var lets = document.querySelector(".lets");
    var play = document.querySelector(".play");
    let gamePiece = _showGame(GameBoard);
    let gameSpace = gamePiece.filter((game) => game === "");
    if (gameSpace.length === 0) {
      lets.innerHTML = "Tied";
      play.innerHTML = "Game";
    }
    return false;
  };

  const makeMove = function () {
    for (let i = 0; i < GameBoard.length; i++) {
      GameBoard[i].addEventListener("mousedown", function () {
        if (GameBoard[i].innerHTML === "") {
          GameBoard[i].innerHTML += _getTurn();
          _draw();
          return winCombo();
        }
      });
    }
  };

  const _renderWinner = function () {
    var lets = document.querySelector(".lets");
    var play = document.querySelector(".play");
    let winnerBox = document.querySelector(".winnerbox");

    lets.innerHTML = "";
    winnerBox.style.display = "flex";
    play.innerHTML = `${won[won.length - 1]} wins!`;
    console.log(won);

    return _refreshGame();
  };

  function _refreshGame() {
    let playAgain = document.querySelector(".yes");
    let winnerBox = document.querySelector(".winnerbox");
    var lets = document.querySelector(".lets");
    var play = document.querySelector(".play");

    playAgain.addEventListener("click", function () {
      winnerBox.style.display = "none";
      for (i = 0; i < _showGame(GameBoard).length; i++) {
        GameBoard[i].innerHTML = "";
        //huhhhhhhhhhhhhh
        lets.innerHTML = playerName1.value + "&nbspvs&nbsp ";
        play.innerHTML = " " + playerName2.value;
      }
    });
  }

  const winCombo = function () {
    let gamePiece = _showGame(GameBoard);

    if (
      (gamePiece[0] === "X" && gamePiece[1] === "X" && gamePiece[2] === "X") ||
      (gamePiece[3] === "X" && gamePiece[4] === "X" && gamePiece[5] === "X") ||
      (gamePiece[6] === "X" && gamePiece[7] === "X" && gamePiece[8] === "X") ||
      (gamePiece[0] === "X" && gamePiece[3] === "X" && gamePiece[6] === "X") ||
      (gamePiece[1] === "X" && gamePiece[4] === "X" && gamePiece[7] === "X") ||
      (gamePiece[2] === "X" && gamePiece[5] === "X" && gamePiece[8] === "X") ||
      (gamePiece[0] === "X" && gamePiece[4] === "X" && gamePiece[8] === "X") ||
      (gamePiece[2] === "X" && gamePiece[4] === "X" && gamePiece[6] === "X")
    ) {
      won.push("X");
      _renderWinner();

      return true;
    }

    if (
      (gamePiece[0] === "O" && gamePiece[1] === "O" && gamePiece[2] === "O") ||
      (gamePiece[3] === "O" && gamePiece[4] === "O" && gamePiece[5] === "O") ||
      (gamePiece[6] === "O" && gamePiece[7] === "O" && gamePiece[8] === "O") ||
      (gamePiece[0] === "O" && gamePiece[3] === "O" && gamePiece[6] === "O") ||
      (gamePiece[1] === "O" && gamePiece[4] === "O" && gamePiece[7] === "O") ||
      (gamePiece[2] === "O" && gamePiece[5] === "O" && gamePiece[8] === "O") ||
      (gamePiece[0] === "O" && gamePiece[4] === "O" && gamePiece[8] === "O") ||
      (gamePiece[2] === "O" && gamePiece[4] === "O" && gamePiece[6] === "O")
    ) {
      won.push("O");
      _renderWinner();

      return true;
    } else {
      return false;
    }
  };

  const fullGame = function () {
    showName(), makeMove(), winCombo();
  };

  return fullGame();
})();

