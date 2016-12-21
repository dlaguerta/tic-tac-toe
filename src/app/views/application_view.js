import Backbone from 'backbone';
import TicTacToe from 'app/models/application';
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';
import $ from 'jquery';

var ApplicationView = Backbone.View.extend({
  initialize: function(){
    console.log("ApplicationView created");
    this.boardView = new BoardView({
      el: this.$('#board'),
      model: this.model.board
    });

    this.listenTo(this.boardView, "turn", this.makeTurn);
    this.listenTo(this.boardView, "checkwinner", this.checkWinner);
  },

  events: {
  'click .btn-new-game': 'newGame'
  },

  newGame: function(event){
    console.log("clicked new game button");
    // console.log(this.model.board);
    // this.model.board.destroy();
    if (window.confirm("Are you sure you want to start a new game?")) {
          console.log("going to delete it!");
          this.model = new TicTacToe();
          this.boardView.model = this.model.board;
          this.render();
  }
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
    $('td').removeClass();
    $('td').empty();
    return this;
  }
});

export default ApplicationView;
