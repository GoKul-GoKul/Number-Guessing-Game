'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',
    function () {

        const guess = Number(document.querySelector('.guess').value);

        if (!guess) {
            displayMessage('⛔ No number!');
        }

        else if (guess === secretNumber) {

            displayMessage('🎉 Correct Number');
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.number').style.width = '30rem';

            document.body.style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

        }

        else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? `${guess} is 📈Too high!` : `${guess} is 📉Too low!`);
                score--;
                document.querySelector('.score').textContent = score;
                document.querySelector('.guess').value = '';
            } else {
                displayMessage('💥You lost the game');
            }
        }

    }
);

document.querySelector('.again').addEventListener('click',
    function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        console.log(secretNumber);

        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('.score').textContent = score;
        displayMessage('Start guessing...');
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

    }
);