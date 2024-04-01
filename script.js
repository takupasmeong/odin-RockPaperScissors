function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);

    return randNum;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    let toNum = (playerSelection === 'rock') ? 0 :
                (playerSelection === 'paper') ? 1 :
                (playerSelection === 'scissors') ? 2 : null;

    let toString = (computerSelection == 0) ? "rock" : 
                (computerSelection == 1) ? "paper" : 
                (computerSelection == 2) ? "scissors": "wrong number";
    
    let result = (toNum == computerSelection) ? "draw" :
                (toNum == 0 && computerSelection == 1) ? `You lose! ${toString} beats ${playerSelection}` :
                (toNum == 0 && computerSelection == 2) ? `You win! ${playerSelection} beats ${toString}` :
                (toNum == 1 && computerSelection == 0) ? `You lose! ${toString} beats ${playerSelection}` :
                (toNum == 1 && computerSelection == 2) ? `You win! ${playerSelection} beats ${toString}` :
                (toNum == 2 && computerSelection == 0) ? `You lose! ${toString} beats ${playerSelection}` :
                (toNum == 2 && computerSelection == 1) ? `You win! ${playerSelection} beats ${toString}` :
                "Your input is wrong!";

    return result;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Input");
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();
