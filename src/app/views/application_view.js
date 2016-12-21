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
    this.listenTo(boardView, "checkwinner", this.checkWinner);
  },

  checkWinner: function(boardView) {
    if (this.model.turnCount >= 5) {
      this.model.checkWin();
      console.log(this.model.checkWin());
    }
  },

  makeTurn: function(boardView) {
    this.model.turn(boardView[0], boardView[1]);

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
