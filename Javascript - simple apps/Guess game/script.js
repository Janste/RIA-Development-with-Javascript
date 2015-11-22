/*
This app is a guess game. The app generates a random number between 0 - 100. The user has to guess what kind of number the app has generated.
*/

"use strict";

window.onload = function(){
	
	var rand = Math.floor( Math.random() * 100 ) + 1;

	var attemptsLeft = 10;
	
	var guess = function(number){

		if (number > 100 || number < 0) {
			var arr = [null, 'The number must on in the interval 0 - 100'];
			return arr;
		} else if (isNaN(number)) {
			var arr = [null, 'Invalid input'];
			return arr;
		} else if (number == rand) {
			var arr = [true, 'Du have won!'];
			return arr;
		} else if (number > rand) {
			var arr = [false, 'The secret number is smaller'];
			return arr;
		} else if (number < rand) {
			var arr = [false, 'The secret number is bigger'];
			return arr;
		}  		
	};
	
	// Output and input
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");
	var p = document.querySelector("#value");
	var attempts = document.querySelector("#attemptsDisplay");

	// We connect an eventhandler to the submit button which runs an anonymous function
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Prevent the form from sending the data to the server 

		var answer = guess(input.value); // Reads the user input
		p.innerHTML = answer[1];		// Writes the text from the array that was created in the function

		if(answer[0] === true){				// If the game has ended, deactivate the submit button
			submit.disabled = true;
		} else if (answer[0] === false) {
			attempts.innerHTML = "Attempts left: " + --attemptsLeft;
		}
	
		if (attemptsLeft == 0) {
			submit.disabled = true;
			p.innerHTML = "You lost. You have used all attempts.";
		}

	});
};