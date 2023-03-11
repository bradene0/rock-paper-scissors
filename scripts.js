const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


const playGame = () => {
    const rockButton = document.querySelector('.rock');
    const paperButton = document.querySelector('.paper');
    const scissorsButton = document.querySelector('.scissors');
    const playerOptions = [rockButton,paperButton,scissorsButton];
    const computerOptions = ['rock','paper','scissors']

playerOptions.forEach(option => {
    option.addEventListener('click',function() {

        const movesLeft = document.querySelector('.movesremaining');
        moves ++;
        movesLeft.innerText = `Remaining Moves: ${10-moves}`;

        const choiceNumber = Math.floor(Math.random()*3);
        const computerChoice = computerOptions[choiceNumber];

        winner(this.innerText, computerChoice)

        if(moves ==100) {
            gameOver(playerOptions, movesLeft);
        }
    })
})
}
const winner = (player, computer) => {
    const result = document.querySelector('result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    player = player.toLowercase();
    computer = computer.toLowerCase();
    if(player === computer){
        result.textContent = 'Tie'
    }
    else if(player == 'rock') {
        if(computer == 'paper') {
            result.textContent = 'Computer Wins!';
            computerScore++;
            computerScoreBoard.textContent = computerScore;

        }else{
            result.textContent = 'Player Wins!!';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock') {
            result.textContent = 'Computer Wins!!';
            computerScore++
            computerScoreBoard.textContent = computerScore;

        }else{
            result.textContent = 'Player Wins!!';
            playerScore++;
            playerScoreBoard.textContent =playerScore;
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent =computerScore;
        }else{
            result.textContent = 'Player Won';
            playerScore++
            playerScoreBoard.textContent = playerScore;
        }
    }
}
const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector('move');
    const result = document.querySelector('.result');
    const reloadButton = document.querySelector('.reload');

    playerOptions.forEach(option => {
        option.style.display ='none';
    })
    chooseMove.innerText = 'Game Over!'
    movesLeft.style.display = 'none';

    if(playerScore > computerScore){
        result.style.fontSize = '2rem';
        result.innerText = 'YOU WIN!!!';
        result.style.color = '#5bc0eb';
    }
    else if( playerScore < computerScore){
        result.style.fontSize = '2rem';
        result.innerText = 'You Lose!!';
        result.style.color = '#c3423f';
    }
    else{
        result.style.fontsize = '2rem';
        result.innerText = 'You Tied!!!!!!'
        result.style.color = '#fde74c'
    }
    reloadButton.innerText = 'Restart';
    reloadButton.style.display = 'flex'
    reloadButton.addEventListener('click', () =>{
        window.location.reload();
    })
}
    playGame();
}
game();