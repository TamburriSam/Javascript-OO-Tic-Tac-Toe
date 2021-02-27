let countbox = document.querySelector('.counter')

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


//showgame
function showGame(gameboard) {
 let newGameArray = [];
  for(let i = 0; i < Gameboard.length; i++){
      newGameArray.push(Gameboard[i].textContent)
  }
  return newGameArray
}


//Player
const Player = (token) => {
  const getToken = () => token;
  return getToken();
}



//Game
const Game = (function () {

 let Player1 = Player('X')
 let Player2 = Player('O')
 let count = 0;

  

  const getTurn = (function(){
    if(count === 0){
        Player1 = Player('X');
        count++;
        countbox.innerHTML = count;
        return Player1 

    }else if(count === 1){
        Player2 = Player('O')
        count++;
        countbox.innerHTML = count;
        return Player2

    }else if(count === 2){
        Player1 = Player('X')
        count++;
        countbox.innerHTML = count;
        return Player1

    }else if(count === 3){
        Player2 = Player('O')
        count++;
        countbox.innerHTML = count;
        return Player2

    }else if(count === 4){
        Player1 = Player('X')
        count++;
        countbox.innerHTML = count;
        return Player1

    }else if(count === 5){
        Player2 = Player('O')
        count++;
        countbox.innerHTML = count;
        return Player2

    }else if(count === 6){
        Player1 = Player('X')
        count++;
        countbox.innerHTML = count;
        return Player1

    }else if(count === 7){
        Player2 = Player('O')
        count++;
        countbox.innerHTML = count;
        return Player2

    }else if(count === 8){
        Player1 = Player('X')
        count++;
        countbox.innerHTML = count;
        return Player1 

  }
})


const makeMove = (function(){
    for(let i = 0 ; i < Gameboard.length; i++){
        Gameboard[i].addEventListener('click', function(){
            if(Gameboard[i].innerHTML === ""){
            Gameboard[i].innerHTML += getTurn();
            }
        })
    }
 })


 const wonGame = (function(){
     let gamePiece = showGame(Gameboard);
//top row - 1
if(gamePiece[0] && gamePiece[1] && gamePiece[2] === 'X'){
    return console.log('X WON')}

if(gamePiece[0] && gamePiece[1] && gamePiece[2] === 'O'){
    return console.log('O WON')}

//left side - 2
if(gamePiece[0] && gamePiece[3] && gamePiece[6] === 'X'){
    return console.log('X WON')}

if(gamePiece[0] && gamePiece[3] && gamePiece[6] === 'O'){
    return console.log('O WON')
}

 //bottom row - 3
if(gamePiece[6] && gamePiece[7] && gamePiece[8] === 'X'){
    return console.log('X WON')
}else if(gamePiece[6] && gamePiece[7] && gamePiece[8] === 'O'){
    return console.log('O WON')
}

//right side - 4
if(gamePiece[2] && gamePiece[5] && gamePiece[8] === 'X'){
    return console.log('X WON')
}else if(gamePiece[2] && gamePiece[5] && gamePiece[8] === 'O'){
    return console.log('O WON')
}

//diagonal left top corner - 5
if(gamePiece[0] && gamePiece[4] && gamePiece[8] === 'X'){
    return console.log('X WON')
}else if(gamePiece[0] && gamePiece[4] && gamePiece[8] === 'O'){
    console.log('O WON')
}

//diagonal right top corner - 6
if(gamePiece[2] && gamePiece[4] && gamePiece[6] === 'X'){
    return console.log('X WON')
}else if(gamePiece[2] && gamePiece[4] && gamePiece[6] === 'O'){
    return console.log('O WON')
} 

//down the middle horizontal - 7
if(gamePiece[3] && gamePiece[4] && gamePiece[5] === 'X'){
    return console.log('X WON')
}else if(gamePiece[3] && gamePiece[4] && gamePiece[5] === 'O'){
    return console.log('O WON')
}

//down the middle vertical - 8
if(gamePiece[1] && gamePiece[4] && gamePiece[7] === 'X'){
    return console.log('X WON')
}else if(gamePiece[1] && gamePiece[4] && gamePiece[7] === 'O'){
    return console.log('O WON')
}

})

  return {getTurn, makeMove, wonGame};
})();

