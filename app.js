let countbox = document.querySelector(".counter");

const Gameboard = (function () {
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








function _showGame(gameboard) {
    let newGameArray = [];
    for (let i = 0; i < Gameboard.length; i++) {
      newGameArray.push(Gameboard[i].textContent);
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
  let Player1 = Player("X");
  let Player2 = Player("O");
  let count = 0;
  var nameSpace1 = document.querySelector('.namediv1');
  var nameSpace2 = document.querySelector('.namediv2');



  function _showGame(gameboard) {
    let newGameArray = [];
    for (let i = 0; i < Gameboard.length; i++) {
      newGameArray.push(Gameboard[i].textContent);
    }
    return newGameArray;
  }

  const _getTurn = function () {
    if (count === 0) {
      Player1 = Player("X");
      count++;
      countbox.innerHTML = count;
      return Player1;
    } else if (count === 1) {
      Player2 = Player("O");
      count++;
      countbox.innerHTML = count;
      return Player2;
    } else if (count === 2) {
      Player1 = Player("X");
      count++;
      countbox.innerHTML = count;
      return Player1;
    } else if (count === 3) {
      Player2 = Player("O");
      count++;
      countbox.innerHTML = count;
      return Player2;
    } else if (count === 4) {
      Player1 = Player("X");
      count++;
      countbox.innerHTML = count;
      return Player1;
    } else if (count === 5) {
      Player2 = Player("O");
      count++;
      countbox.innerHTML = count;
      return Player2;
    } else if (count === 6) {
      Player1 = Player("X");
      count++;
      countbox.innerHTML = count;
      return Player1;
    } else if (count === 7) {
      Player2 = Player("O");
      count++;
      countbox.innerHTML = count;
      return Player2;
    } else if (count === 8) {
      Player1 = Player("X");
      count++;
      countbox.innerHTML = count;
      return Player1;
    }
  };

  const showName = function () {
      var playerName1 = document.querySelector('.player1name');
      var playerName2 = document.querySelector('.player2name');
      var ready1 = document.querySelector('.name1');
      var ready2 = document.querySelector('.name2');
      var nameSpace1 = document.querySelector('.namediv1');
      var nameSpace2 = document.querySelector('.namediv2');


      ready1.addEventListener('click', function(){
          nameSpace1.innerHTML = playerName1.value + ' VS';
          playerName1.style.display ="none";
          ready1.style.display="none"
      })

      ready2.addEventListener('click', function(){
        nameSpace2.innerHTML = playerName2.value;
        playerName2.style.display ="none";
        ready2.style.display="none"
    })
  }

  const makeMove = function () {
    for (let i = 0; i < Gameboard.length; i++) {
      Gameboard[i].addEventListener("mousedown", function (e) {
          winCombo();
        if (Gameboard[i].innerHTML === "") {
           Gameboard[i].innerHTML += _getTurn();
           return winCombo();
        };
      });
    };
  };



  const winCombo = function () {
    let gamePiece = _showGame(Gameboard);
    let winner = '';
    //top row - 1
    if (Gameboard[0].textContent === 'X' && Gameboard[1].textContent === 'X' && Gameboard[2].textContent === 'X'){
        alert('x wins')
    }
    }

   /*  if (gamePiece[0] && gamePiece[1] && gamePiece[2] === "O") {
      return console.log("O WON");
    };

    //left side - 2
    if (gamePiece[0] && gamePiece[3] && gamePiece[6] === "X") {
      return console.log("X WON");
    };

    if (gamePiece[0] && gamePiece[3] && gamePiece[6] === "O") {
      return console.log("O WON");
    };

    //bottom row - 3
    if (gamePiece[6] && gamePiece[7] && gamePiece[8] === "X") {
      return console.log("X WON");
    } else if (gamePiece[6] && gamePiece[7] && gamePiece[8] === "O") {
      return console.log("O WON");
    };

    //right side - 4
    if (gamePiece[2] && gamePiece[5] && gamePiece[8] === "X") {
      return console.log("X WON");
    } else if (gamePiece[2] && gamePiece[5] && gamePiece[8] === "O") {
      return console.log("O WON");
    };

    //diagonal left top corner - 5
    if (gamePiece[0] && gamePiece[4] && gamePiece[8] === "X") {
      return console.log("X WON");
    } else if (gamePiece[0] && gamePiece[4] && gamePiece[8] === "O") {
      console.log("O WON");
    };

    //diagonal right top corner - 6
    if (gamePiece[2] && gamePiece[4] && gamePiece[6] === "X") {
      return console.log("X WON");
    } else if (gamePiece[2] && gamePiece[4] && gamePiece[6] === "O") {
      return console.log("O WON");
    };

    //down the middle horizontal - 7
    if (gamePiece[3] && gamePiece[4] && gamePiece[5] === "X") {
      return console.log("X WON");
    } else if (gamePiece[3] && gamePiece[4] && gamePiece[5] === "O") {
      return console.log("O WON");
    };

    //down the middle vertical - 8
    if (gamePiece[1] && gamePiece[4] && gamePiece[7] === "X") {
      return console.log("X WON");
    } else if (gamePiece[1] && gamePiece[4] && gamePiece[7] === "O") {
      return console.log("O WON");
    }; */
    /*maybe return the persons player token lit up or something but something to return or modal */
    //look into returning true or false
    // look into what index parameter does in chain method 
    //private public properties _function
    //@param 
    //make function that holds make move tied into wonGame
  /*   return false
  }; */

  const showWinner = function () {

  }


  const fullGame = function () {
    showName(),
    makeMove(),
    winCombo()
  }

  return fullGame() 
})();



