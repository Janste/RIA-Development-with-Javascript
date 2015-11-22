var Message = function(message, date) {

	this.message = message;
	this.date = date;

	this.getMessage = function() {
		return message;
	};

	this.setMessage = function(message) {
		this.message = message;
	};

	this.getDate = function() {
		return date;
	};

	this.setDate = function(date) {
		this.date = date;
	};

};

Message.prototype.toString = function() {
	return this.getMessage() + " at " + this.getDate();
};