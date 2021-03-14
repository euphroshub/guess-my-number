'use strict';




// getting the value entered by the user in the input field on the webpage also converting the value of .guess into a number for the comparison
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    //console.log(guess);
    //console.log(typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = 'No number.';
    }

});