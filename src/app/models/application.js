import Backbone from 'backbone';
import Board from 'app/models/board';
import Player from 'app/models/player';

const TicTacToe = Backbone.Model.extend({
  initialize: function(){
    this.MAX_TURNS = 9;
    this.totalTurns = 0;
    this.board = new Board();
    this.players = [
      new Player({
      num: 1
    }),
    new Player({
      num: 5
    })
    ];
    this.currentPlayer = this.players[0];
    this.turnCount = 0;
  },

  placeMarker: function(row, column, player) {
    this.board.playingField[row][column] = player.marker;
  },

  checkWin: function() {

    var leftDiagonalSum = 0;
    var rightDiagonalSum = 0;

    for (var i = 0; i< 3; i++) {
      var rowSum = 0;
      var columnSum = 0;

      for (var x = 0; x < 3; x++){
        rowSum += this.board.playingField[i][x];
        columnSum += this.board.playingField[x][i];
      }

      leftDiagonalSum += this.board.playingField[i][i];
      rightDiagonalSum += this.board.playingField[i][2-i];

      if (rowSum === 3 || columnSum === 3|| leftDiagonalSum === 3 || rightDiagonalSum === 3) {
        return this.players[0];
      } else if (rowSum === 15 || columnSum === 15 || leftDiagonalSum === 15 || rightDiagonalSum === 15) {
        return this.players[1];
      }
    }


    return false;
  },

  turn:
  function(row, column) {
    if (this.turnCount >= 9 || this.checkWin() !== false) {
      //tell person to start new game
      this.trigger("finished", this);
      throw new Error('Game is over! Please clear your board for a new game.');
    }

    // if space is empty, placeMarker
    // if not, throw error and start turn over
    if (this.board.emptySpace(row, column) === true) {
      this.placeMarker(row, column, this.currentPlayer);
    } else {
      this.trigger("occupied", this);
      throw new Error('Space is occupied. Pick an empty space.');
    }

    this.turnCount += 1;

    //note: moved this outside of this turn
    // if turnCount >=5, check for winner
    // if (this.turnCount >= 5) {
    //   if (this.checkWin() !== false) {
    //     throw new Error("Player" + this.checkWin().marker + ' is the winner!');
    //   }
    //   else if (this.turnCount === 9) {
    //     throw new Error("It's a tie!");
    //   }
    // }

    //this toggles the player at the end of the turn
    if (this.currentPlayer=== this.players[0]) {
      this.currentPlayer = this.players[1];
    } else {
      this.currentPlayer = this.players[0];
    }
  },


});


export default TicTacToe;

// export default Application;
