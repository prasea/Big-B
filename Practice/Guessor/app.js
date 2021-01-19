let min = 1,
    max = 10,
    guessLeft = 3,
    winningNumber = getRandomNumber(min,max);
function getRandomNumber(min,max){
    return Math.floor((Math.random() * (max-min+1)) + min)
}
const game = document.querySelector('#game'),   
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessSubmit = document.querySelector('#guess-submit'),
    message = document.querySelector('.message');
minNum.textContent = min;
maxNum.textContent = max;

guessSubmit.addEventListener('click', checkResult);
game.addEventListener('mousedown', playAgain);

function checkResult(e){
    const guessValue = parseInt(guessInput.value);
    if(isNaN(guessValue) || guessValue > max || guessValue<min){
        setMessage(`Enter a number between ${min} & ${max}`, 'red');
    }
    if(guessValue === winningNumber){ //Game Over - WON
        // guessInput.disabled = true;
        // guessInput.style.borderColor = 'green';
        // setMessage(`${guessValue} is correct guess. You WIN`, 'green');
        gameOver(true,`${guessValue} is correct guess. You WIN`)
    } else{
        guessLeft -= 1;
        if(guessLeft === 0){ //Game Over - LOOSE
            // guessInput.disabled = true;
            // guessInput.style.borderColor = 'red';
            // setMessage(`${winningNumber} was correct guess. You LOOSE`, 'red')
            gameOver(false, `${winningNumber} was correct guess. You LOOSE`);
        } else{// Game Continues - Incorrect Guess            
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guessValue} is incorrect guess. You have ${guessLeft} guess left`, 'red')
        }
    }
}
function gameOver(won, msg){
    guessInput.disabled = true;
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.style.borderColor = color;
    setMessage(msg, color);
    guessSubmit.value = 'Play Again';
    guessSubmit.className += 'play-again';
}
function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}

function playAgain(e){
    if(e.target.classList.contains('play-again')){
        window.location.reload();
    }
}