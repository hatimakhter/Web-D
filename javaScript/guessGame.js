//Guessing Game

const max = prompt("Enter the max number");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("guess the radom number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("You are right congrats!");
        break;
    }
    else if(guess < random){
        guess = prompt("Hint: your guess was too small, Please try again..");
    }
    else{
        guess = prompt("Hint: your guess was too large, please try again.." );
    }
}