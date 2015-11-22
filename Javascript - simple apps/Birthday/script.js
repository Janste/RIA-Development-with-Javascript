/*
The user has to input his or her birthday on the form YYYY-MM-DD. 
After that the app will count how many days there are left before the user will have his or her birthday.
*/

"use strict";

window.onload = function(){

	var p = document.querySelector("#value"); 
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");
	
	var birthday = function(date){
		
		if (!validate(date)) {
			throw("Invalid input");
		} 

		var m = date.substring(5, 7);
		m--;
		var d = date.substring(8, 11);

		var birthday = new Date();

		birthday.setMonth(m);
		birthday.setDate(d);

		var today = new Date();

		var difference = birthday.getTime() - today.getTime();

		if (difference == 0) {
			return 0;
		} else if (difference == 86400000) {
			return 1;
		} else {

			if (difference < 0) { 

				difference += 31536000000;
				difference /= (1000*60*60*24);
				difference = Math.round(difference);
				return difference;

			} else { 

				difference /= (1000*60*60*24);
				return difference;

			}
		}
	};

	function validate(dateStr) {

		if (!(dateStr.charAt(4) == '-') ||  !(dateStr.charAt(7) == '-') || !(dateStr.length == 10)) {

			return false;
		}

		var y = dateStr.substring(0, 4);
		var m = dateStr.substring(5, 7);
		var d = dateStr.substring(8, 11);

		if (isNaN(y) || isNaN(m) || isNaN(d)) {
			return false;
		} else if (y > 2015 || y < 1900 || m > 12 || m <= 0 || d > 31 || d <= 0) {
			return false;
		} else {
			return true;
		}

	}

	submit.addEventListener("click", function(e){
		e.preventDefault(); 

		try {
			var answer = birthday(input.value)
			var message;
			switch (answer){
				case 0: message = "Today is your birthday!";
					break;
				case 1: message = "You have birthday tomorrow!";
					break;
				default: message = "Your birthday will be in " + answer + " days.";
					break;
			}

			p.innerHTML = message;
		} catch (err){
			p.innerHTML = "Error: " + err + ".";
		}
	
	});
};