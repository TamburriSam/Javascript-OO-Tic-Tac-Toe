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
  gameboard[0].textContent = "X";
  gameboard[1].textContent = "X";
  gameboard[2].textContent = "X";
  gameboard[3].textContent = "X";
  gameboard[4].textContent = "X";
  gameboard[5].textContent = "X";
  gameboard[6].textContent = "X";
  gameboard[7].textContent = "X";
  gameboard[8].textContent = "X";
}



//showGame(Gameboard);


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
        Player1 = Player('X')
        return Player1 + count++

    }else if(count === 1){
        Player2 = Player('0')
        return Player2 + ' ' + count++

    }else if(count === 2){
        Player1 = Player('X')
        return Player1 + ' ' + count++

    }else if(count === 3){
        Player2 = Player('0')
        return Player2 + ' ' + count++

    }else if(count === 4){
        Player1 = Player('X')
        return Player1 + ' ' + count++

    }else if(count === 5){
        Player2 = Player('0')
        return Player2 + ' ' + count++

    }else if(count === 6){
        Player1 = Player('X')
        return Player1 + ' ' + count++

    }else if(count === 7){
        Player2 = Player('0')
        return Player2 + ' ' + count++

    }else if(count === 8){
        Player1 = Player('X')
        return Player1 + ' ' + count++

  }
})

 const actualTurn = (function(){

    if(count % 2 === 0){

    }
 })

 const makeMove = (function(){
    for(let i = 0 ; i < Gameboard.length; i++){
        Gameboard[i].addEventListener('click', function(){
            Gameboard[i].innerHTML = getTurn()
        })
    }
 })


    const validMove = (function(){

    })





  return {getTurn, makeMove};
})();


