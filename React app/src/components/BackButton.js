var React = require('react');
var Router = require('react-router');

var History = Router.History;

var BackButton = React.createClass({
  mixins: [ History ],
  render: function() {
    return (
      <button className="back" onClick={this.history.goBack}>Go back</button>
    );
  }
});

module.exports = BackButton;