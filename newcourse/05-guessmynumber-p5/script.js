'use strict';

const message = document.querySelector('.message');
const check = document.querySelector('.check');
const scoreBoard = document.querySelector('.score');
const numberBoard = document.querySelector('.number');
const highScore = document.querySelector('.highscore');

let score = 20;
const body = document.querySelector('body');

const secretNumber = Math.trunc(Math.random() * 20) + 1;

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    //when player wins
    message.textContent = '🎉 Correct number!';
    numberBoard.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    numberBoard.style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high!';
      score--;
      scoreBoard.textContent = score;
    } else {
      message.textContent = ' You lost the game!';
      scoreBoard.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low!';
      score--;
      scoreBoard.textContent = score;
    } else {
      message.textContent = ' You lost the game!';
      scoreBoard.textContent = 0;
    }
  }
});

/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)

*/

const again = document.querySelector('.again');

again.addEventListener('click', () => {
  score = 20;
  scoreBoard.textContent = 20;
  numberBoard.textContent = '?';
  message.textContent = 'Start guessing...';
  body.style.backgroundColor = '#222';
  numberBoard.style.width = '15rem';
  document.querySelector('.guess').value = '';
});
