import Backbone from 'backbone';
import BoardView from 'app/views/board_view';

var ApplicationView = Backbone.View.extend({
  initialize: function(){
    console.log("ApplicationView created");
    // this.render();
    var boardView = new BoardView({
      el: this.$('#board'),
      model: board
    });
    this.listenTo(boardView, "mark", this.addMark);
  },
 //add mark should change the  board model
  addMark: function(boardView) {
  console.log("adding a mark");
  console.log(boardView.model.get('mark'));
},

  render: function(){
    console.log("rendering within appView");
    // var boardView = new BoardView({
    //   // model:
    //   el: this.$('#board')
    // });
    // boardView.render();
    //
    // return this;
  }
});

export default ApplicationView;
