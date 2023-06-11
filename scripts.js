// Select all buttons inside the element with the id "game"
const buttons = document.querySelectorAll('#game button');

// Attach click event listeners to each button, calling the playGame function
buttons.forEach(button => {
    button.addEventListener('click', playGame);
});

let playerScore = 0;
let computerScore = 0;
let round = 1;

// Function called when a button is clicked
function playGame(e) {
    // Get the player's choice based on the clicked button's id
    const playerChoice = e.target.id;

    // Generate a random choice for the computer
    const computerChoice = getComputerChoice();

    // Get the result of the round (tie, win, or computer win)
    const result = playRound(playerChoice, computerChoice);

    // Display the result of the round
    displayResult(playerChoice, computerChoice, result);

    // Update the scores based on the round result
    updateScore(result);

    // Check if it's the last round (5 rounds)
    if (round === 5) {
        // Display the final result after 5 rounds
        displayFinalResult();

        // Ask if the user wants to play again
        const playAgain = confirm("Do you want to play again?");
        if (playAgain) {
            // Reset scores and start a new game
            resetScores();
            startNewGame();
        }
    } else {
        // Increment the round number for the next round
        round++;
    }
}

// Function to generate a random choice for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]; // Return a random choice for the computer
}

// Function to determine the result of a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"; // Return if it's a tie
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win!"; // Return if the player wins
    } else {
        return "Computer wins!"; // Return if the computer wins
    }
}

// Function to display the result of a round
function displayResult(playerChoice, computerChoice, result) {
    console.log(`Round ${round}: You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`);
}

// Function to update the scores based on the result of a round
function updateScore(result) {
    if (result === "You win!") {
        playerScore++;
    } else if (result === "Computer wins!") {
        computerScore++;
    }
}

// Function to display the final result after 5 rounds
function displayFinalResult() {
    console.log(`Final Score: You ${playerScore} - Computer ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Oops! Computer wins the game!");
    } else {
        console.log("It's a tie! The game ends in a draw.");
    }
}

// Function to reset the scores
function resetScores() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
}

// Function to start a new game
function startNewGame() {
    console.log("Starting a new game...");
    // Any additional setup or logic for starting a new game can be added here
}
