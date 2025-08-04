let humanScore = 0;
let computerScore = 0;

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
    const human = humanChoice.toLowerCase();
    let result = "";

    if(human === "rock" && computerChoice === "scissors") {
        result = "You win! Rock beats Scissors";
        ++humanScore;
    } else if (human === "rock" && computerChoice === "paper") {
        result = "You lose! Paper beats Rock";
        ++computerScore;
    } else if (human === "paper" && computerChoice === "rock") {
        result = "You win! Paper beats Rock";
        ++humanScore;
    } else if (human === "paper" && computerChoice === "scissors") {
        result = "You lose! Scissors beats Paper";
        ++computerScore;
    } else if (human === "scissors" && computerChoice === "paper") {
        result = "You win! Scissors beats Paper";
        ++humanScore;
    } else if (human === "scissors" && computerChoice === "rock") {
        result = "You lose! Rock beats Scissors";
        ++computerScore;
    } else {
        result = `You tied! ${human.substring(0,1).toUpperCase() + human.substring(1)} ties ${computerChoice.substring(0,1).toUpperCase() + computerChoice.substring(1)}`;
    }

    console.log(result);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);