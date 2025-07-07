let userChoice;
let arr = ["rock", "paper", "scissors"];

let compChoice;
let userScore = 0;
let compScore = 0;

function humanChoice(e) {
    let choice = e.target.textContent.toLowerCase();
    return choice;
}

function computerChoice() {
    let rand = Math.floor(Math.random() * 3);
    let choice = arr[rand];
    return choice;
}

function playRound(e) {
    userChoice = humanChoice(e);
    console.log(userChoice);
    compChoice = computerChoice();
    console.log(compChoice);
    if (userChoice === "rock" && compChoice === "scissors" ||
        userChoice === "scissors" && compChoice === "paper" ||
        userChoice === "paper" && compChoice === "rock") {
        para.textContent = `Computer chose ${compChoice}.You chose ${userChoice}. You Win! `;
        userScore++;
    }
    else if (compChoice === "rock" && userChoice === "scissors" ||
        compChoice === "scissors" && userChoice === "paper" ||
        compChoice === "paper" && userChoice === "rock") {
        para.textContent = `Computer chose ${compChoice}.You chose ${userChoice}. You Lose! `;
        compScore++;
    }
    else {
        para.textContent = `Its draw.Both You and Comp chose ${compChoice}`;
    }
    score.textContent = `Your points ${userScore} . Comp points ${compScore}`;

    if (userScore == 5 || compScore == 5) {
        endGame();
    }

}

function endGame() {

    if (userScore > compScore) {
        para.textContent = `You won the game with ${userScore} points`;
    }

    else if (userScore < compScore) {
        para.textContent = `Comp won the game with ${compScore} points`;
    }

    else {
        para.textContent = `Game is draw with ${compScore} points for both sides`;
    }
    score.textContent = "Game finished!Play Again";
    userScore = 0;
    compScore = 0;
}

const btns = document.querySelectorAll("button");


const result = document.querySelector(".result");
const para = document.createElement("p");
const score = document.createElement("p");

btns.forEach((btn) => {
    btn.addEventListener("click", playRound);
})

result.appendChild(para);
result.appendChild(score);


