function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);

    return randNum;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    let toNum = (playerSelection === 'rock') ? 0 :
                (playerSelection === 'paper') ? 1 :
                (playerSelection === 'scissors') ? 2 : null;
    let playerScore = 0;
    let compScore = 0;

    let toString = (computerSelection == 0) ? "rock" : 
                (computerSelection == 1) ? "paper" : 
                (computerSelection == 2) ? "scissors": "wrong number";

    if (toNum == computerSelection) {
        result = "draw";
    } else if (toNum == 0 && computerSelection == 1) {
        result = `You lose! ${toString} beats ${playerSelection}`;
        compScore++;
    } else if (toNum == 0 && computerSelection == 2) {
        result = `You win! ${playerSelection} beats ${toString}`;
        playerScore++;
    } else if (toNum == 1 && computerSelection == 0) {
        result = `You lose! ${toString} beats ${playerSelection}`;
        compScore++;
    } else if (toNum == 1 && computerSelection == 2) {
        result = `You win! ${playerSelection} beats ${toString}`
        playerScore++;
    } else if (toNum == 2 && computerSelection == 0) {
        result = `You lose! ${toString} beats ${playerSelection}`;
        compScore++;
    } else if (toNum == 2 && computerSelection == 1) {
        result = `You win! ${playerSelection} beats ${toString}`;
        playerScore++;
    } else {
        result = "Your input is wrong!";
    }

    return {
        result: result,
        playerScore: playerScore,
        compScore: compScore
    };
}

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Input");
//         let computerSelection = getComputerChoice();
//         console.log(computerSelection);
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

const menu = document.querySelector(".menu");
const output = document.querySelector(".output");
const scoreboard = document.querySelector(".scoreboard");

let playerScore = 0;
let compScore = 0;

menu.addEventListener("click", (event) => {
    const target = event.target;

    let playerSelection = target.id;
    let computerSelection = getComputerChoice();

    const gameValues = playRound(playerSelection, computerSelection);

    output.textContent = gameValues.result;
    if (gameValues.playerScore == 1) {
        output.style.color = "green";
        playerScore++;
        updateScore();
    }
    if (gameValues.compScore == 1) {
        output.style.color = "red";
        compScore++;
        updateScore();
    }

    if (output.textContent == "draw") {
        output.style.color = "black";
    }

    if (playerScore == 5) {
        alert("Game is finish. You Win!!!");
        location.reload();
    }
    if (compScore == 5) {
        alert("Game is finish. You lose!!!");
        location.reload();
    }
});

function updateScore() {
    scoreboard.textContent = `Player:${playerScore} Computer:${compScore}`;
}
