var React = require('react');
var Picture = require('./Picture');

var Content = React.createClass({

  propTypes: {
    item: React.PropTypes.string.isRequired,
    contents: React.PropTypes.array.isRequired
  },

  getInitialState: function(){
    return {
      imageURL: ""
    }
  },

  capitalizeFirstLetter: function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  createList: function() {

    var link = "";

    var dataList = this.props.contents.map(function(element, index){
      var dataKey = element['.key'].charAt(0).toUpperCase() + element['.key'].slice(1);
        if (dataKey === 'Image') {

          link = element['.value'];

        } else if (dataKey !== 'Notes'){
          return <li className="list-group-item" key={index}> {dataKey}: {element['.value']} </li>
        }
    });

    this.state.imageURL = link;

    return dataList;

  },

  render: function(){

    var dataTitle = this.capitalizeFirstLetter(this.props.item);
    var dataList = this.createList();
    var link = this.state.imageURL;

    return (
      <div>
        <div className="col-md-5">
            <Picture 
              imageURL={link} />
        </div>
        <div className="col-md-4">
          <h3>{dataTitle} </h3>
          <ul className="list-group">
            {dataList}
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Content;