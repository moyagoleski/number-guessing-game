/*
  Author:       Moya Goleski
  File:         main.js
  Last Updated: 01/07/2022
  Source: https://www.youtube.com/watch?v=2cQUkYU8AmI
*/
// VARIABLES
let enterBtn = document.getElementById('enterBtn');
let output = document.getElementById('outputText');
// stores rounded/random number user has to guess
let number = [Math.floor(Math.random() * 100)];

// EVENT LISTENER
enterBtn.addEventListener('click', function(){
  // stores value user submitted
  let input = document.getElementById('userInput').value;
  // console.log("button has been clicked " + number);
  // if input matches number
  if (input == number){
    // console.log("You guessed right, your number was " + number);
    output.innerHTML = `You guessed right, the number was ${number}!`;
  }
  // if input is lower than number
  else if (input < number){
    // console.log("You guessed too low!");
    output.innerHTML = "You guessed too low, please try again!"
  }
  // if inout is higher than number
  else {
    // console.log("You guessed too high!");
    output.innerHTML = "You guessed too high, please try again!"
  }
  
});
