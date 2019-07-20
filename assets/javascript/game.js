var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var wins = 0;
var losses = 0;
var guessesleft = 9;
var storeduserguess = []

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guessesleft-text");
var userguessesText = document.getElementById("usersguesses-text");
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function (event) {
    if (computerChoices.indexOf(event.key) === -1) {
        return event.preventDefault();
    }
    console.log(event)
    var userGuess = event.key;
    storeduserguess.push(userGuess);
    if (userGuess === computerGuess) {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        wins++;
        guessesleft = 9;
        storeduserguess = [];
    }
    else if (userGuess !== computerGuess) {
        guessesleft--;
    }
    if (guessesleft === 0) {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        losses++;
        guessesleft = 9;
        storeduserguess = [];
    }
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesleftText.textContent = "Guesses left: " + guessesleft;
    userguessesText.textContent = "You guessed: " + storeduserguess;
    // open up the console if you want to be a cheater...
    console.log(computerGuess);
    console.log(userGuess)
};