let randomNumber = Math.floor(Math.random() * 100) + 1;
let tries = 0;

// guess checking
function checkGuess(){
    const userGuess = Number(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
    const attempts = document.getElementById('attempts');

    tries++;

    if(userGuess == randomNumber){
        message.innerText =  "🎉 Correct! You guessed it!";
        message.style.color = "green";
    }
    else if(userGuess > randomNumber){
        message.innerText = "📉 Too High!";
        message.style.color = 'red';
    }
    else {
        message.innerText = "📈 Too Low!";
        message.style.color = 'red';
    }
    attempts.innerText = `Attempts: ${tries}`;  

}

// Restart game 
function restart(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    tries = 0;
    document.getElementById('guessInput').value = "";
    document.getElementById('message').innerHTML = "";
    document.getElementById('attempts').innerHTML = "";

}
