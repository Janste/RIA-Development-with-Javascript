var React = require('react');
var BackButton = require('./BackButton');
var History = require('react-router').History;

var Search = React.createClass({

	mixins: [History, ReactFireMixin],

	handleSubmit: function() {

		var searchedItem = this.refs.searchedItem.value;
		this.refs.searchedItem.value = '';

		this.history.pushState(null , "search/" + searchedItem);

	},

	render: function(){
		return (
		  <div className="col-sm-12">
		  	<div className="col-sm-2" style={{marginTop: 5}}>
                <BackButton />
            </div>
		    <form onSubmit={this.handleSubmit}>
		      <div className="form-group col-sm-6">
		        <input type="text" className="form-control" ref="searchedItem" />
		      </div>
		      <div className="form-group col-sm-4">
		        <button type="submit" className="btn btn-block btn-primary">Search</button>
		      </div>
		    </form>
		  </div>
		)
	}

});

module.exports = Search;