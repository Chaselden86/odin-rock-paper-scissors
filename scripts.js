// Select all buttons inside the element with the id "game"
const buttons = document.querySelectorAll('#game button');

// Attach click event listeners to each button, calling the playGame function
buttons.forEach(button => {
    button.addEventListener('click', playRound);
});

let playerScore = 0;
let computerScore = 0;

const resultDiv = document.createElement('div');
resultDiv.classList.add('result');
document.body.appendChild(resultDiv);

// Function called when a button is clicked
function playRound(e) {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    const result = getResult(playerSelection, computerSelection);
    displayResult(playerSelection, computerSelection, result);

    // Update the scores based on the round result
    updateScore(result);

    if (playerScore === 5 || computerScore ===5) {
        endGame();
    }
}

// Function to generate a random choice for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]; 
}

// Function to determine the result of a round
function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Function to display the result of a round
function displayResult(playerChoice, computerChoice, result) {
    const message = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
    const roundResult = document.createElement('p');
    roundResult.textContent = message;
    resultDiv.appendChild(roundResult);
}

// Function to update the scores based on the result of a round
function updateScore(result) {
    if (result === "You win!") {
        playerScore++;
    } else if (result === "Computer wins!") {
        computerScore++;
    }

    const scoreMessage = `Score: You ${playerScore} - Computer ${computerScore}`;
    const scoreDisplay = document.createElement('p');
    scoreDisplay.textContent = scoreMessage;
    resultDiv.appendChild(scoreDisplay);
}

// Function to display the final result
function endGame() {
    let winner;
    if (playerScore === 5){
        winner = 'You';
    } else {
        winner = 'Computer';
    }

    const endMessage = `${winner} wins the game!`;
    const endDisplay = document.createElement('p');
    endDisplay.textContent = endMessage;
    resultDiv.appendChild(endDisplay);

    // Disable the buttons afer the game ends
    buttons.forEach(button => {
        button.removeEventListener('click', playRound);
        button.disabled = true;
    });
}
