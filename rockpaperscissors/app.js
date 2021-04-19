let userScore = 0;
let computerScore = 0;
let clickCount = 0;
let drawCount = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const count_div = document.getElementById("click-count");
const draw_div = document.getElementById("draw-count");

//RANDOMIZES COMPUTER CHOICE UP TO 3
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//DEFINED VARIABLE CONVERTED TO WORD TO BE SHOWN IN THE FRONTEND
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}


//WHEN USER WINS
function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    clickCount++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    count_div.innerHTML = clickCount;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! &#128515`;
    userChoice_div.classList.add(`green-glow`);
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

//WHEN USER LOST
function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    clickCount++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    count_div.innerHTML = clickCount;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost! &#128517`;
    userChoice_div.classList.add(`red-glow`);
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}


//WHEN IT IS DRAW
function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    drawCount++;
    clickCount++;
    count_div.innerHTML = clickCount;
    draw_div.innerHTML = drawCount;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} is equal to ${convertToWord(computerChoice)}${smallCompWord}. It's a draw! &#128539`;
    userChoice_div.classList.add(`gray-glow`);
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

/* I NEED TO USE ALERT WHEN NUMBER OF TRIES HAVE REACHED 10 
function tryCount() {

}
tryCount();
*/

// SWITCH STATEMENT - NEEDED TO GET ALL THE PROBABLE OUTCOME OF THE USER AND COMPUTER CHOICES
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

//RESPONDS WHEN USER CLICKS ROCK PAPER SCISSOR ICONS
function main() {
rock_div.addEventListener('click', () => game("r"));
paper_div.addEventListener('click', () => game("p"));
scissors_div.addEventListener('click', () => game("s"));
}

main();