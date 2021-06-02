'use strict';

//ROLL DICE
const btnRoll = document.querySelector('.btn--roll');
const currentScore = document.querySelector('#current--0');
let diceValue = 0;
const currentClear = function () {
  diceValue = 0;
  currentScore.textContent = 0;
};

// DISPLAY DICE IMAGE
const displayDice = function (num) {
  const diceImage = document.querySelector('img');
  diceImage.src = `dice-${num}.png`;
  diceImage.classList.remove('hidden');
};

btnRoll.addEventListener('click', () => {
  let rollDice = Math.trunc(Math.random() * 6) + 1;
  displayDice(rollDice);
  if (rollDice !== 1) {
    diceValue += rollDice;
    currentScore.textContent = diceValue;
    return diceValue;
  } else {
    currentClear();
  }
});

//HOLD SCORE
const btnHold = document.querySelector('.btn--hold');
const score0 = document.querySelector('#score--0');
let scoreValue = 0;

btnHold.addEventListener('click', () => {
  scoreValue += diceValue;
  score.textContent = scoreValue;
  currentClear();
  return scoreValue;
});

// NEW GAME
const newGame = document.querySelector('.btn--new');

newGame.addEventListener('click', () => {
  currentClear();
  scoreValue = 0;
  score.textContent = 0;
});
