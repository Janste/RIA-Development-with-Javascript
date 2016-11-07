var React = require('react');

var Picture = React.createClass({

	propTypes: {
    	imageURL: React.PropTypes.string.isRequired,
  	},

    render: function(){
        return (
            <div>
            	<br /><br />
				<img className="image" src={this.props.imageURL} />
            </div>
        )
    }
});

module.exports = Picture;