/*
This app allows a user to insert some text to the text area. After pressing submit the text is shown above the text area. 
Each message is a Message object. All Message objects are stored in a array.
*/

window.onload = function() {

	var input = document.getElementById('messageBox');
	var submit = document.getElementById('sendMessage');
	var view = document.getElementById('messageView');
	var msgCounter = document.getElementById('messageCounter');

	var counter = 0;
	var messages = new Array();

	submit.addEventListener("click", function(e){

		e.preventDefault();

		var date = new Date();
		var msg = new Message(input.value, new Date());
		messages[counter++] = msg;

		clearView();
		updateView();

	});

	function updateView() {
		msgCounter.innerHTML = "Amount of messages: " + messages.length;
		for (var i = 0; i < messages.length; i++) {
			view.innerHTML += messages[i] + '<br>';
		}
	};

	function clearView() {
		view.innerHTML = "";
    	input.value = "";
	};
	
};