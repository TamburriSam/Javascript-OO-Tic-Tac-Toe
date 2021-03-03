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
  let Player1 = '';
  let Player2 = '';
  let count = 0;
  var playerName1 = document.querySelector(".player1name");
  var playerName2 = document.querySelector(".player2name");

  const _getTurn = function () {
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
    var tictactoe = document.querySelector(".othercontainer");
    var tttgameboard = document.querySelector(".container");
    var vs = document.querySelector(".vs");

    ready1.addEventListener("click", function () {
      lets.innerHTML = playerName1.value+' ';
      lets.style.color = "#22A2F2";
      lets.appendChild(vs);
      vs.style.display = "inline";
      play.innerHTML = "";
      player1card.style.display = "none";
    });

    ready2.addEventListener("click", function () {
      play.innerHTML = '&nbsp' + playerName2.value;
      play.style.color = "orange";
      player2card.style.display = "none";
      tictactoe.style.position = "relative";
      tictactoe.style.bottom = "230px";
      tictactoe.style.display = "block";
      tictactoe.style.fontSize = "12px";
      tictactoe.style.position = "absolute";
      tttgameboard.style.display = "grid";
    });
  };

  const _draw = function () {
    var lets = document.querySelector(".lets");
    var play = document.querySelector(".play");
    let gamePiece = _showGame(Gameboard);
    let gameSpace = gamePiece.filter((game) => game === "");
    if (gameSpace.length === 0) {
      lets.innerHTML = "Tied";
      play.innerHTML = "Game";
    }
    return false;
  };

  const makeMove = function () {
    for (let i = 0; i < Gameboard.length; i++) {
      Gameboard[i].addEventListener("mousedown", function (e) {
        if (Gameboard[i].innerHTML === "") {
          Gameboard[i].innerHTML += _getTurn();
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
    let winner = document.querySelector(".box");
    let playAgain = document.querySelector('.yes')

    lets.innerHTML=''
    winnerBox.style.display = "block";

    if(winner.textContent != 'X'){
      play.innerHTML = 'O wins'
    }else {
      play.innerHTML = 'X wins'
    }


    return _refreshGame(); 
  };

  function _refreshGame(){
    let playAgain = document.querySelector('.yes')
    let winnerBox = document.querySelector(".winnerbox");
    var lets = document.querySelector(".lets");
    var play = document.querySelector(".play");

    playAgain.addEventListener('click',function(){
      winnerBox.style.display="none"
      for(i = 0 ; i < _showGame(Gameboard).length; i++){
        Gameboard[i].innerHTML = '';
        lets.innerHTML = playerName1.value + ' vs ';
        play.innerHTML = ' ' + playerName2.value;
      }
    })
  }

 
  /*maybe return the persons player token lit up or something but something to return or modal */
  //look into returning true or false
  //god u gotta look at returns in general youre not v good w that yet
  // look into what index parameter does in chain method
  //@param
  /*   return false
  }; */

   const winCombo = function () {
    let gamepiece = _showGame(Gameboard)


    if(gamepiece[0] === 'X' && gamepiece[1] === 'X' && gamepiece[2] === 'X'
      || gamepiece[3] === 'X' && gamepiece[4] === 'X' && gamepiece[5] === 'X'
      || gamepiece[6] === 'X' && gamepiece[7] === 'X' && gamepiece[8] === 'X'
      || gamepiece[0] === 'X' && gamepiece[3] === 'X' && gamepiece[6] === 'X'
      || gamepiece[1] === 'X' && gamepiece[4] === 'X' && gamepiece[7] === 'X'
      || gamepiece[2] === 'X' && gamepiece[5] === 'X' && gamepiece[8] === 'X'
      || gamepiece[0] === 'X' && gamepiece[4] === 'X' && gamepiece[8] === 'X'
      || gamepiece[2] === 'X' && gamepiece[4] === 'X' && gamepiece[6] === 'X'){
        _renderWinner()
      return true
      }

      if(gamepiece[0] === 'O' && gamepiece[1] === 'O' && gamepiece[2] === 'O'
      || gamepiece[3] === 'O' && gamepiece[4] === 'O' && gamepiece[5] === 'O'
      || gamepiece[6] === 'O' && gamepiece[7] === 'O' && gamepiece[8] === 'O'
      || gamepiece[0] === 'O' && gamepiece[3] === 'O' && gamepiece[6] === 'O'
      || gamepiece[1] === 'O' && gamepiece[4] === 'O' && gamepiece[7] === 'O'
      || gamepiece[2] === 'O' && gamepiece[5] === 'O' && gamepiece[8] === 'O'
      || gamepiece[0] === 'O' && gamepiece[4] === 'O' && gamepiece[8] === 'O'
      || gamepiece[2] === 'O' && gamepiece[4] === 'O' && gamepiece[6] === 'O'){
        _renderWinner()
      return true
      }else{
      return false}
};  

  const fullGame = function () {
    showName(), makeMove(), winCombo();
  };

  return fullGame();
})();
