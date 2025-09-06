let randomNumber = Math.round(Math.random() * 100) + 1;

const userInput = document.querySelector('#guessInput');
const submit = document.querySelector('#submit');
const startOver = document.querySelector('.game-details');
const previousGuessess = document.querySelector('.previous-guessess');
const remainingGuessess = document.querySelector('.guessess-remaining');
const lowOrHigh = document.querySelector('.lowOrHigh');

let prevGuess = [];
let numGuess = 1;


let playGame = true;

const p = document.createElement('p');


submit.addEventListener('click', function(e) {
    e.preventDefault();
    if (playGame) { 
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    }
});

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter a valid number.`);
        return;
    }
    else if(guess < 1){
        alert(`Please enter the number greater than equal to 1.`);
        return;
    }
    else if(guess > 100){
        alert(`Please enter the number less than equal to 100.`);
        return;
    }
    else{
        prevGuess.push(guess);
        if((numGuess) === 10){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess == randomNumber){
        displayMessage(`You guessed it right.`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Number is too low.`);
    }else if(guess > randomNumber){
        displayMessage(`Number is to high.`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    previousGuessess.innerHTML += `${guess} `;
    numGuess++;
    remainingGuessess.innerHTML = `${(10-numGuess)+1}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    submit.disabled = true;
    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', ()=>{
        randomNumber = Math.round(Math.random() * 100) + 1;
        prevGuess = [];
        numGuess = 1;
        lowOrHigh.innerHTML = '';
        previousGuessess.innerHTML = '';
        remainingGuessess.innerHTML = `${(10-numGuess)+1}`;
        submit.disabled = false;
        userInput.value = '';
        startOver.removeChild(p);
        playGame = true;
    }, {once: true});
}