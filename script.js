"use strict";

const createSecNum = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = createSecNum();
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const calcSecNum = function (number) {
  document.querySelector(".number").textContent = number;
};

const changeBgColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const changeNumWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

const viewScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When The Input Is Empty
  if (!guess) {
    displayMessage("No Number!");
    // When The Number Is Correct
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    calcSecNum(secretNumber);
    changeBgColor("#60b347");
    changeNumWidth("30rem");
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // When The Number Is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      viewScore(score);
    } else {
      displayMessage("You Lost The Gane!");
      viewScore(0);
    }
  }
});
// Start Again
document.querySelector(".again").addEventListener("click", function () {
  calcSecNum("?");
  secretNumber = createSecNum();
  score = 20;
  viewScore(score);
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  changeBgColor("#222");
  changeNumWidth("15rem");
});
