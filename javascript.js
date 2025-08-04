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

console.log(getHumanChoice());