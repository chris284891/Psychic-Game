var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var wins = 0;
var losses = 0;
var guessesleft = 9;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guessesleft-text");
var userguessesText = document.getElementById("usersguesses-text");

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if (userGuess === computerChoices) {
        if (userGuess === computerGuess) {
            wins++;
        }
        else if (userGuess !== computerGuess) {
            guessesleft--;
        }
        else (userGuess !== computerGuess) {
            losses++;
        }

        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesleftText.textContent = "guesses left: " + guessesleft;
        userguessesText.textContent = "you guesses: " + ???;
    }
};

console.log(computerGuess)