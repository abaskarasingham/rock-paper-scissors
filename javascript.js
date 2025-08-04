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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let result = "";

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

        console.log(result);
    }

    for (let i=0; i<5; ++i) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        result = `You won the game!\n`;
    } else {
        result = `You lost the game!\n`;
    }
    result += `Your Score: ${humanScore}\nComputer Score: ${computerScore}`;

    console.log(result);
}

playGame();