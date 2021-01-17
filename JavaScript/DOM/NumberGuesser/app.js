let minNum = 1,
    maxNum = 10,
    guessesLeft = 3,
    winningNum = getRandomNumber(minNum,maxNum);

const UIgame = document.querySelector('#game'),
    UImin = document.querySelector('.min-num'),
    UImax = document.querySelector('.max-num'),
    UIguessInput = document.querySelector('#guess-input'),
    UIguessBtn = document.querySelector('#guess-submit'),
    UImessage = document.querySelector('.message');

UImin.textContent = minNum;
UImax.textContent = maxNum;

UIgame.addEventListener('mousedown', function(e){
    if(e.target.classList.contains('play-again')){
        window.location.reload();
    }
})

UIguessBtn.addEventListener('click', checkResult);

function checkResult(e){
    let guessedNumber = parseInt(UIguessInput.value);
    // Validation
    if(isNaN(guessedNumber) || guessedNumber>maxNum || guessedNumber<minNum){
        setMessage(`Enter valid guess between ${minNum} to ${maxNum}`, 'red');
    }
    if(guessedNumber === winningNum){
        // You Win, Game over
        gameOver(true,`${guessedNumber} is correct guess, You Win !` )
    } else{
        guessesLeft -= 1;
        if(guessesLeft === 0){
            // You Loose, Game Over
            gameOver(false, `You Loose. ${winningNum} was correct guess`)                        
        } else{
            // Correct guess was incorrect, game continues            
            setMessage(`${guessedNumber} is not correct. ${guessesLeft} guess remainining!`, 'red');
            UIguessInput.value = '';
        }
    }
    e.preventDefault();
}

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    
    UIguessInput.disabled = true;    
    // UIguessBtn.style.display = 'none';
    UIguessBtn.value = 'Play Again';
    UIguessBtn.className += 'play-again';

    setMessage(msg,color);
}
function setMessage(msg,color){
    UImessage.style.color = color;
    UIguessInput.style.borderColor = color;
    UImessage.textContent = msg;    
}

function getRandomNumber(min,max){
    return (Math.ceil(Math.random()*(max-min)+min));
}