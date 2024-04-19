const ORDER = ["rock", "scissors", "paper"];

function getComputerChoice() {
    
    let i = Math.floor(Math.random() * 3)
    let outcome;
    switch (i) {
        case 0:
            return "paper";
        case 1:
            return "scissors";
        case 2:
            return "rock";
    }

    return outcome;
}

function getPlayerChoice() {
    let choice = prompt("What's your pick?");
    if(ORDER.includes(choice.toLowerCase())) {
        return choice.toLowerCase();
    } else {
        console.log("Please enter paper, scissors or rock");
        getPlayerChoice();
    }
}
function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    if(playerChoice === computerChoice) {
        console.log("It's a draw!");
        return 0
    }else if((ORDER.indexOf(playerChoice) + 1) % 3 === ORDER.indexOf(computerChoice) ) {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        return 1;
    } else {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        return 2;
    }
}

function playGame (){
    let playerScore = 0;
    let computerScore = 0;

    while(playerScore < 5 && computerScore < 5) {
        let outcome = playRound();
        if (outcome === 0) {
            console.log(`Your Score: ${playerScore} , AI Score: ${computerScore}`)
            continue;
        } else {
            outcome === 1 ? playerScore++ : computerScore++;
            console.log(`Your Score: ${playerScore} , AI Score: ${computerScore}`)
        }
    }

    return playerScore > computerScore ? "You win!" : "You lose!";
}
console.log(playGame());