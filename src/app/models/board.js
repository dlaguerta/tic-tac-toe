import Backbone from 'backbone';
import Application from 'app/models/application';


const Board = Backbone.Model.extend({
  initialize: function(){
    this.playingField =  [[0,0,0],[0,0,0],[0,0,0]];
    this.playerOneMarker = "&#128056;";
    this.playerTwoMarker = "&#128099;";
  },

  emptySpace: function(row, column) {
    if (this.playingField[row][column] === 0) {
      return true;
    } else {
      return false;
    }
  }

});

export default Board;
