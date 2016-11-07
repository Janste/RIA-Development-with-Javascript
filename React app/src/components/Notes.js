var React = require('react');

var Notes = React.createClass({

	propTypes: {
		notes: React.PropTypes.array.isRequired,
		addNewNote: React.PropTypes.func.isRequired,
		removeNotes: React.PropTypes.func.isRequired
	},

	createNotesList: function() {

		var notes = this.props.notes.map(function(note, index){
      		return <li className="list-group-item" key={index}>{note['.value']}</li>
    	}.bind(this));

    	return notes;
	}, 

	setInputNoteRef: function(ref){
    	this.newNoteInput = ref;
  	},

	handleNewNoteSubmit: function(){
	    var newNote = this.newNoteInput.value;
	    this.newNoteInput.value = '';
	    this.props.addNewNote(newNote);
  	},

  	handleRemoveNotes: function() {
  		this.props.removeNotes();
  	}, 

	render: function(){

		var notesList = this.createNotesList();

		return (
			<div>
				<h4>Notes</h4>
				<div className="input-group">
			        <input type="text" className="form-control" placeholder="Add new note here" ref={this.setInputNoteRef}/>
			        <span className='input-group-btn'>
			        <button className="btn btn-default" type="button" onClick={this.handleNewNoteSubmit}>Add note</button>
			        </span>
			    </div>
				<div>
					<ul className="list-group">
						{notesList}	
	      			</ul>
				</div>
				<div>
					<ul className="list-group">
						<button className="btn btn-default" type="button" onClick={this.handleRemoveNotes}>Remove notes</button>
	      			</ul>
				</div>
			</div>
		)
	}
});

module.exports = Notes;