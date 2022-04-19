const View = require("./ttt-view.js");
const Game = require("../ttt_node/game");




document.addEventListener("DOMContentLoaded", () => {
  let ttt = document.getElementsByClassName("ttt")[0]; //container
  // console.log(ttt);
  
  ttt.addEventListener
  let newGame = new Game();
  let firstView = new View(newGame, ttt);
  // firstView.setupBoard(ttt);

  document.addEventListener("click", (e) => {

    firstView.handleClick(e)

  })

  console.log(ttt);
});
