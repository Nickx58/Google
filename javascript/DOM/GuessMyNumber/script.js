"use strict";

/*
State Variables
*/
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = number;
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  if (!guessNumber) {
    document.querySelector(".message").textContent = "No Number";
    return;
  }
  if (score == 0) {
    document.querySelector(".message").textContent = "You lost the game.";
  } else if (number === guessNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (number < guessNumber) {
    document.querySelector(".message").textContent = "Too High";
    score--;
  } else if (number > guessNumber) {
    document.querySelector(".message").textContent = "Too Low";
    score--;
  }
  document.querySelector(".score").textContent = score;
});
