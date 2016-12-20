import Backbone from 'backbone';
// import TicTacToe from 'app/models/application';
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';

var ApplicationView = Backbone.View.extend({
  initialize: function(){
    console.log("ApplicationView created");
    // this.render();
    // moving this boardView to render function
    var board = new Board();
    var boardView = new BoardView({
      el: this.$('#board'),
      model: board
    });
    this.listenTo(boardView, "turn", this.makeTurn);
  },
 //add mark should change the  board model
  makeTurn: function(boardView) {
  console.log("taking a turn");
  console.log("boardview has: " + boardView);
  this.model.turn(boardView[0], boardView[1]);
  // console.log(this.model.turn(boardView));
  // @TODO NEED TO PASS COORDINATES HERE

  // console.log(boardView.model.get('mark'));
},

  // render: function(){
  //   console.log("rendering within appView");
  //   var boardView = new BoardView({
  //     // model:this.model.board,
  //     el: this.$('#board')
  //   });
  //   boardView.render();
  //
  //   return this;
  // }
});

export default ApplicationView;
