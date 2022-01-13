/*
  Author:       Moya Goleski
  File:         main.js
  Last Updated: 01/13/2022
  Source: https://www.youtube.com/watch?v=2cQUkYU8AmI
*/
// VARIABLES
let enterBtn = document.getElementById('enterBtn');
let output = document.getElementById('outputText');
// stores rounded/random number user has to guess
let number = Math.floor(Math.random() * 100);
// counter for how many valid inputs from user
let validInputCounter = 0;
let validInputCounterOutput = document.getElementById('attemptsCounter');

// CONSTANTS
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

// testing purposes - hide later
console.log(number);

// EVENT LISTENER
// when the user clicks the enter btn
enterBtn.addEventListener('click', function(){
  // stores value user submitted
  let input = document.getElementById('userInput').value;

  // if user input is not a number
  // OR if user input is blank
  if (isNaN(input) || input == "") {
    // console.log("not number");
    output.innerHTML = "Invalid Entry - Please enter a number";
  }
  // if user input is a number
  else {
    // if input is less than or greater than range
    if (input < MIN_NUMBER || input > MAX_NUMBER) {
      output.innerHTML = `Invalid Entry - Please enter between ${MIN_NUMBER} - ${MAX_NUMBER}`;
    }
    // if input is in range
    else {
      // add 1 to valid input counter from user
      validInputCounter++;
      validInputCounterOutput.innerHTML = `Attempts: ${validInputCounter}`;
      // if input matches number
      if (input == number){
        // console.log("You guessed right, your number was " + number);
        output.innerHTML = `Correct, the number is ${number}!`;
        // disable input field
        document.getElementById('userInput').disabled = true;
        // disable enter button
        document.getElementById('enterBtn').disabled = true;
      }
      // if input is lower than number
      else if (input < number){
        // console.log("You guessed too low!");
        output.innerHTML = "You guessed too low, please try again!"
      }
      // if input is higher than number
      else {
        // console.log("You guessed too high!");
        output.innerHTML = "You guessed too high, please try again!"
      }
    }
  }

});
