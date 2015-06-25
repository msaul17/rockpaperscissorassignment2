////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move === null) {
        move = getInput();
    } else {
        move = move;
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move; /* Your Expression */;
}

function getComputerMove(move) {
     if (move === null) {
        move = randomPlay();
    } else {
        move = move;
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = move; /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        winner = "tie";
        return winner;
    } else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
        return winner;
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = "player";
        return winner;
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = "player";
        return winner;
    } else {
        return 'computer';     
    }
        return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
        var scores = {player: 0, computer: 0,tie: 0};
    while (scores.player < 5 && scores.computer < 5) {
        var playerMove   = getPlayerMove();
        var computerMove = getComputerMove();
        var winner       = getWinner(playerMove, computerMove);
        scores[winner] += 1;

        console.log("This round, player chose " + playerMove + " while computer chose " + computerMove);
        console.log("The score is currently --- Human: " + scores.player + " vs Computer: " + scores.computer);
    }
    return [scores.player, scores.computer];
}

//// This one I understood much more ////

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
    return "The result is a tie!";
}
else if (choice1 === "rock") {
    
    if (choice2 === "scissors") {
        return "rock wins";
    }
    else {
        return "paper wins";
    }
}
else if (choice1 === "paper") {
    
    if (choice2 === "rock") {
    return "paper wins";
    }
    else {
        return "scissors wins";
        }
}
else if (choice1 === "scissors") {
    
    if (choice2 === "paper") {
        return "scissors win";
        }
    else {
        return "rock wins";
        }
    }
};

compare(userChoice, computerChoice);


