function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    let choiceStr = "";

    switch(choice) {
        case 0: choiceStr = "rock";
        break;
        case 1: choiceStr = "paper";
        break;
        case 2: choiceStr = "scissors";
        break;
    }

    return choiceStr;
}

function getHumanChoice() {
    return prompt("Select rock, paper, or scissors");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let result = "";

    if (humanChoice === "rock" && computerChoice === "scissors") {
        result = "You win! Rock beats Scissors";
        ++humanScore;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        result = "You lose! Paper beats Rock";
        ++computerScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        result = "You win! Paper beats Rock";
        ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        result = "You lose! Scissors beats Paper";
        ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        result = "You win! Scissors beats Paper";
        ++humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        result = "You lose! Rock beats Scissors";
        ++computerScore;
    } else {
        result = `You tied! ${humanChoice.substring(0, 1).toUpperCase() + humanChoice.substring(1)} ties ${computerChoice.substring(0, 1).toUpperCase() + computerChoice.substring(1)}`;
    }
    result += `\nYour Score: ${humanScore}\nComputer Score: ${computerScore}\n`;
    const htmlContent = result.replace(/\n/g, "<br>");

    console.log(result);
    divResult.innerHTML = htmlContent;
}

function playGame() {
    if (humanScore > computerScore) {
        result = `You won the game!`;
    } else {
        result = `You lost the game!`;
    }
    
    console.log(result);
    divResult.innerHTML += result;
}

let humanScore = 0;
let computerScore = 0;
let result = "";
const MAX_POINTS = 5;

const divResult = document.querySelector(".result");
const allButtons = Array.from(document.querySelectorAll(".buttons > button"));
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", function (e) {
    playRound(e.target.id, getComputerChoice());
    if (humanScore === MAX_POINTS || computerScore === MAX_POINTS) {
        playGame();
        allButtons.forEach(button => {
            button.disabled = true;
        });
    }
});