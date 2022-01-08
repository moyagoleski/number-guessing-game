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
// stores value user submitted
let input = document.getElementById('userInput').value;
