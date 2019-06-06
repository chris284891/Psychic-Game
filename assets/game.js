var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var wins = 0;
var losses = 0;
var guessesleft = 9;
var storeduserguess = []

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guessesleft-text");
var userguessesText = document.getElementById("usersguesses-text");
console.log(winsText)

// trying to make it so if user guesses a letter not in array computerGuess they get a loss. if it is they get a win. also 

document.onkeyup = function (event) {
    var userGuess = event.key;
    storeduserguess.push(userGuess)
    console.log(userGuess)
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(wins)
    console.log(losses)
    console.log(guessesleft)
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
    // i don't know how to make game pick new letter after loss
    // i don't know how to make read out what user guessed
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesleftText.textContent = "Guesses left: " + guessesleft;
    userguessesText.textContent = "You guessed: " + storeduserguess;
    console.log(computerGuess)

};
