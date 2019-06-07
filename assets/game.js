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
    var userGuess = event.key;
    storeduserguess.push(userGuess)
    if (userGuess === computerGuess) {
        wins++;
        storeduserguess = [];
        guessesleft = 9;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
    if (userGuess !== computerGuess) {
        guessesleft--;
    }
    if (guessesleft === 0) {
        losses++;0
        guessesleft = 9;
        storeduserguess = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesleftText.textContent = "Guesses left: " + guessesleft;
    userguessesText.textContent = "You guessed: " + storeduserguess;
    console.log(computerGuess);
    // The computer is not picking a new letter after a win or loss. :(
};
