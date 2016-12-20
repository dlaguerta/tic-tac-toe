import Backbone from 'backbone';
// import TicTacToe from 'app/models/application';
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';

var ApplicationView = Backbone.View.extend({
  initialize: function(){
    console.log("ApplicationView created");
    // this.render();
    // moving this boardView to render function
    // var board = new Board();
    var boardView = new BoardView({
      el: this.$('#board'),
      model: this.model.board
    });
    this.listenTo(boardView, "turn", this.makeTurn);
  },


  makeTurn: function(boardView) {
  console.log("taking a turn");
  console.log("a player: " + JSON.stringify(this.model.players[0]));
  console.log("this is the current player: " + this.model.currentPlayer.get("num"));

  this.model.turn(boardView[0], boardView[1]);
  //this shows you where the marker was placed in the playing field array
  console.log("the created board: " + this.model.board.playingField);


},

  render: function(){
    console.log("rendering within appView");
  //   var boardView = new BoardView({
  //     // model:this.model.board,
  //     el: this.$('#board')
  //   });
  //   boardView.render();
  //
    return this;
  }
});

export default ApplicationView;
