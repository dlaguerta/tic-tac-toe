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
    //send a message to player when space is occupied
    this.listenTo(this.model, "occupied", this.invalidChoice);
    this.listenTo(this.model, "finished", this.reset);
  },

  events: {
  'click .btn-new-game': 'newGame'
  },

  invalidChoice: function(){
    var message = "Space taken. Please pick a different space!";
    $(".warning-message").append(message);
    $(".warning-message").show();
  },

  reset: function(){
    var message = "Game is over! Please clear your board for a new game.";
    //empty first to remove any previous warning message
    $(".warning-message").empty();

    $(".warning-message").append(message);
    $(".warning-message").show();

  },

  newGame: function(event){
    console.log("clicked new game button");
    // console.log(this.model.board);
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
      if ((this.model.checkWin() === false) && this.model.turnCount >=9 ) {
        var tiemessage = "We have a tie!";
        $(".winner-message").append(tiemessage);
        $(".winner-message").show();
      }
    if (this.model.checkWin() !== false) {
        var message = "We have a winner! It's ";
        var winner = this.model.checkWin();
        var winnerMarker = '';
        if ( winner.get("num") === 1) {
          winnerMarker = this.model.board.playerOneMarker;
        } else if (winner.get("num") === 5) {
          winnerMarker = this.model.board.playerTwoMarker;
        }

        $(".winner-message").append(message + winnerMarker);
        $(".winner").empty();
        $(".winner").append( winnerMarker);

        $(".winner-message").show();
      }

    }
  },

  makeTurn: function(boardView) {
    this.model.turn(boardView[0], boardView[1]);

    $(".warning-message").empty();

  },

  render: function(){
    console.log("rendering within appView");
    $('td').removeClass();
    $('td').empty();
    $(".winner-message").empty();
    $(".winner-message").hide();
    $(".warning-message").empty();
    return this;
  }
});

export default ApplicationView;
