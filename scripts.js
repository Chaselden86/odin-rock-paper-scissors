const buttons = document.querySelectorAll('#game button');
buttons.forEach(button => {
    button.addEventListener('click', playGame);
});

function playGame(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    showResult(playerChoice, computerChoice, result);
}

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') || 
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function showResult (playerChoice, computerChoice, result) {
    const message = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
    alert (message);
}