const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
}

const playGame = () => {
    const rockButton = document.querySelector('.rock');
    const paperButton = document.querySelector('.paper');
    const scissorsButton = document.querySelector('.scissors');
    const playerOptions = [rockButton,paperButton,scissorsButton];
    const computerOptions = ['rock', 'paper', 'scissors']
}
playerOptions.forEach(option => {
    option.addEventListener('click', function() {

        const movesLeft = document.querySelector('.movesleft');
        moves ++;
        movesLeft.innertext = `Moves Left: ${10-moves}`;

        const choiceNumber = Math.floor(Math.random()*3);
        const computerChoice = computerOptions[choiceNumber];

        winner(this.innerText, computerChoice)

        if(moves ==100) {
            gameOver(playerOptions, movesLeft);
        }
    })
})
