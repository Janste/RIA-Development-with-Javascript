/*
This app will convert String. Uppercase letter will be converted to lowercase letters. 'A' and 'a' characters will be converted to '#' character.
*/

"use strict";

window.onload = function(){

	var convertString = function(str){

		if (str == '') {
			throw ("Error");
		}

		var result = "";

		for (var i = 0; i < str.length; i++) {

			var c = str.charAt(i);

			if (c == 'a' || c == 'A') {
				c = '#';
			} else if (c == c.toUpperCase()) {
				c = c.toLowerCase();
			} else if (c == c.toLowerCase()) {
				c = c.toUpperCase()
			} 

			result += c;

		}
	
		return result;

	};

	var p = document.querySelector("#value"); 
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	submit.addEventListener("click", function(e){
		e.preventDefault(); 

		try {
			var answer = convertString(input.value) 
			p.innerHTML = answer;
		} catch (error){
			p.innerHTML = "Error. Missing input.";
		}
	
	});
};