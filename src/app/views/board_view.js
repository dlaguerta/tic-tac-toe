import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import Board from 'app/models/board';
// import SpaceView from 'app/views/space_view';
import Player from 'app/models/player';

var BoardView = Backbone.View.extend({
  initialize: function() {
    console.log("BoardView created");

    // this.render();
  },

  events: {
    'click td': 'cellClick',
  },

  cellClick: function(e) {
    //logic for translating e.id to coordinates for game function
    var row = parseInt(e.currentTarget.id[0]);
    var column = parseInt(e.currentTarget.id[2]);


    this.trigger('turn', [row, column]);

    // Add class associated with player's number to determine marker color
    if (this.model.playingField[row][column] === 1) { $(e.currentTarget).addClass('player_one');
    } else if (this.model.playingField[row][column] === 5) {
      $(e.currentTarget).addClass('player_two');
    }

    //custom event for checking a winner
    this.trigger('checkwinner', [this.model]);
    // We return false to tell jQuery not to run any more event handlers.
    return false;
  },

  render: function(){

  }
});

export default BoardView;
