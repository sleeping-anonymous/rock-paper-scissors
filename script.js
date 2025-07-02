let userChoice;
let arr = ["rock", "paper", "scissors"];

let compChoice;
let userScore = 0;
let compScore = 0;

function humanChoice() {
    let choice = prompt("Enter your choice:").toLowerCase();
    return choice;
}

function computerChoice() {
    let rand = Math.floor(Math.random() * 3);
    let choice = arr[rand];
    return choice;
}

function playRound() {
    userChoice = humanChoice();
    compChoice = computerChoice();
    if (userChoice === "rock" && compChoice === "scissors" ||
        userChoice === "scissors" && compChoice === "paper" ||
        userChoice === "paper" && compChoice === "rock") {
        console.log(`Computer chose ${compChoice}. You Win! `);
        userScore++;
    }
    else if (compChoice === "rock" && userChoice === "scissors" ||
        compChoice === "scissors" && userChoice === "paper" ||
        compChoice === "paper" && userChoice === "rock") {
        console.log(`Computer chose ${compChoice}. You Lose! `);
        compScore++;
    }
    else {
        console.log(`Its draw.Comp chose ${compChoice}`);
    }
}

function playGame() {
    let i = 0;
    while (i < 5) {
        playRound();
        i++;
    }
    endGame();
}

function endGame() {

    if (userScore > compScore) {
        console.log(`You won the game with ${userScore} points`);
    }

    else if (userScore < compScore) {
        console.log(`Comp won the game with ${compScore} points`);
    }

    else {
        console.log(`Game is draw with ${compScore} for both sides`);
    }
    console.log("Game finished!Play Again using playGame()");
    userScore = 0;
    compScore = 0;
}