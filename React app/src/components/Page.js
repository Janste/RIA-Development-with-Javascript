var React = require('react');
var Router = require('react-router');
var Content = require('./Content');
var Firebase = require('firebase');
var Notes = require('./Notes');

var Page = React.createClass({

  mixins: [Router.State, ReactFireMixin],

  getInitialState: function(){
    return {
      contents: ["key", "value"],
      notes: ["key", "value"]
    }
  },

  init: function(){
    var link = 'https://superwiki.firebaseio.com/dinosaurs/' + this.props.params.itemname + '/';
    var firebase = new Firebase(link);
    this.bindAsArray(firebase, 'contents');

    var childRef = firebase.child('notes');
    this.bindAsArray(childRef, 'notes');
  },

  addNewNote: function(newNote){
    var link = 'https://superwiki.firebaseio.com/dinosaurs/' + this.props.params.itemname + '/';
    var firebase = new Firebase(link);
    firebase.child('notes').push(newNote);
  },

  removeNotes: function() {
    var link = 'https://superwiki.firebaseio.com/dinosaurs/' + this.props.params.itemname + '/';
    var firebase = new Firebase(link);
    firebase.child('notes').remove();
  },

  componentWillMount: function(){
    this.init();
  },

  componentWillUnmount: function(){
    this.unbind('contents');
    this.unbind('notes');
  },

  componentWillReceiveProps: function(){
    this.unbind('contents');
    this.unbind('notes');
    this.init();
  },

  render: function() {

    var item = this.props.params.itemname;

    return (
      <div className="row">
        <div className="col-md-9">
          <Content
            item={item} 
            contents={this.state.contents} />
        </div>
        <div className="col-md-3">
          <Notes 
            notes={this.state.notes}
            addNewNote={this.addNewNote}
            removeNotes={this.removeNotes} />
        </div>
      </div>
    )
  }
});

module.exports = Page;