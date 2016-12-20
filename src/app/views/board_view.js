import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import Board from 'app/models/board';
// import SpaceView from 'app/views/space_view';

var BoardView = Backbone.View.extend({
  initialize: function() {
    console.log("BoardView created");
    // this.template = _.template(Backbone.$('#tmpl-trip-card').html());
    // this.render();
  },

  events: {
    'click td': 'cellClick',
  },

  cellClick: function(e) {
    // console.log(e.currentTarget.id);

    //logic for translating e.id to coordinates for game function
    var row = parseInt(e.currentTarget.id[0]);
    var column = parseInt(e.currentTarget.id[2]);
    // console.log(this.model.emptySpace(row,column));


    // Add class associated with player's number to determine marker color
    // if (this.model.players[0] === this.model.currentPlayer) {
    //
    // }
      $(e.currentTarget).addClass('clicked');
    //
    // }


    this.trigger('turn', [row, column]);
    // We return false to tell jQuery not to run any more event handlers.
    return false;
  },
});

export default BoardView;
