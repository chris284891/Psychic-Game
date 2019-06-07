var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var wins = 0;
var losses = 0;
var guessesleft = 9;
var storeduserguess = []

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guessesleft-text");
var userguessesText = document.getElementById("usersguesses-text"); 

document.onkeyup = function (event) {
    var userGuess = event.key;
    storeduserguess.push(userGuess)
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if (userGuess === computerGuess) {
        wins++;
        storeduserguess = [];
        guessesleft = 9;
    }
    if (userGuess !== computerGuess) {
        guessesleft--;
    }
    if (guessesleft === 0) {
        losses++;0
        guessesleft = 9;
        storeduserguess = [];
    }
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesleftText.textContent = "Guesses left: " + guessesleft;
    userguessesText.textContent = "You guessed: " + storeduserguess;
    console.log(computerGuess);
    // The computer is picking a new letter everytime a key is pressed instead of it picking one from the beginning and keeping it :(
};
