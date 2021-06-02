'use strict';

const body = document.querySelector('body');
const check = document.querySelector('.check');
const numberBoard = document.querySelector('.number');

const scoreBoard = document.querySelector('.score');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    numberBoard.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    numberBoard.style.width = '30rem';
    check.classList.add('hidden');

    // Placing the score to the highscore field
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreBoard.textContent = score;
    } else {
      displayMessage('You lost the game!');
      scoreBoard.textContent = 0;
    }
  }
});

const again = document.querySelector('.again');

again.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  scoreBoard.textContent = score;
  numberBoard.textContent = '?';
  displayMessage('Start guessing...');
  body.style.backgroundColor = '#222';
  numberBoard.style.width = '15rem';
  document.querySelector('.guess').value = '';
  check.classList.remove('hidden');
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
