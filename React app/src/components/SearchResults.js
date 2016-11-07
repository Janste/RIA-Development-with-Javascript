var React = require('react');
var Router = require('react-router');
var Firebase = require('firebase');

var SearchResults = React.createClass( {

  mixins: [Router.State, ReactFireMixin],

  getInitialState: function(){
    return {
      resultFound: false,
      result: "Searching, please wait...",
      linkToResult: "#"
    }
  },

  componentWillMount: function() {

    var item = this.props.params.item;
    item = item.trim();
    item = item.toLowerCase();

    this.firebase = new Firebase('https://superwiki.firebaseio.com/dinosaurs/');

    this.firebase.once("value", function(dataSnapshot) {

      dataSnapshot.forEach(function(childSnapshot) {         
         var key = childSnapshot.key();
         if(key.indexOf(item) > -1){
           item = key;
        }
      });

      if(dataSnapshot.child(item).exists()){

        this.setState({ resultFound: true });
        this.setState({ result: dataSnapshot.child(item).key() });
        this.setState({ linkToResult: dataSnapshot.child(item).key() });
            
      } else {

        this.setState({ resultFound: false });
        this.setState({ result: "Unfortunately we couldn't find what you're looking for." });
        this.setState({ linkToResult: "#" });

      }

    }.bind(this));

  },

  createLink: function() {

    var link = 'index.html#/item/' + this.state.linkToResult;
    return link;

  }, 

  render: function () {

  	return (
      <div>
        
          <h4>Search Results for: {this.props.params.item}</h4>

          <div>
              {( this.state.resultFound
                  ? <div> <a href={this.createLink()}>{this.state.result}</a> </div>     
                  : <div> {this.state.result} </div>
              )}
          </div>

      </div>
  	)
  }
});

module.exports = SearchResults;