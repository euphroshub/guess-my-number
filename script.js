'use strict';

// generating the secret number and setting up the score initial value
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// function to display the content in the message field
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// function to display the score
const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

// function to display the content in the number field
const displayNumber = function(number) {
    document.querySelector('.number').textContent = number;
}

////////////////////////////////////////////////////////////////////////////////////////////////

// getting the value entered by the user in the input field on the webpage also converting the value of .guess into a number for the comparison
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // implementing the guess my number game logic
    // When there is no number entered.
    if(!guess) {
        displayMessage('No number.');

    // When the player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct guess!!');
        displayNumber(secretNumber);

        // changing background color on correct guess
        document.querySelector('body').style.backgroundColor = '#60b347';
        // changing the width of the number on correct guess
        document.querySelector('.number').style.width = '30rem';

        // implementing the highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'High as snoop dog (too high!)' : 'Too low!');
            score--;
            displayScore(score);
        } else {
            displayMessage('You lost the game you fuckin ape.');
            displayScore('0');
        }
    }
});

// configuring the reset (play again) button
document.querySelector('.again').addEventListener('click', function(){
    // Reseting the values
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    displayScore(score);
    displayNumber('?');
    document.querySelector('.guess').value = '';

    // Reseting styles css styles to default ui
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});