const Game = require("../ttt_node/game.js")


class View {
  constructor(game, container) {
    this.game = game;
    this.container = container;
    this.setupBoard();
  }

//   bindEvents() {

// What is this??
//   }

  handleClick(e) {

    let cell = e.target;
    
    let pos = [];
    pos.push(Math.floor(parseInt(cell.id) / 3));
    pos.push(Math.floor(parseInt(cell.id) % 3));
    
    
    
    cell.append(this.game.currentPlayer);
    cell.classList.add(this.game.currentPlayer);
    this.game.playMove(pos);

    if(this.game.winner()) {
      setTimeout(() => {alert(this.game.winner() + " Wins")}, 2);
    }    
    

  }

  makeMove(square) {}

  setupBoard() {
    let grid = document.createElement("ul");
    grid.setAttribute("id", "grid")
    grid.style.display = `flex`
    
    this.container.appendChild(grid)

    for (let i = 0; i < 9; i++) {
      let el = document.createElement("li")
      el.setAttribute("id", `${i}`)
      
      grid.appendChild(el)
      
    }
  }

}

module.exports = View;
