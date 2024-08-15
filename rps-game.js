
console.log("Hello World!")

// Computer Choice
// function will return rock, paper or scissorts
// create a function that returns random ints (0,1,2)


let randomChoice = (num=2) => Math.round(Math.random() * num);


function getComputerChoice() {
    var comChoice;
    switch(randomChoice()) {
        case 0:
            comChoice = "rock";
            break;
        case 1:
            comChoice = "paper";
            break;
        case 2:
            comChoice = "scissors";
            break;
    }
    return comChoice;
};


// Human Choice 
// use prompt method 
// take string input 

function getHumanChoice() {
    var humChoice = prompt("Type Rock, Paper or Scissors: ")
    humChoice = humChoice.toLowerCase()
    return humChoice;
};


// Variables that keep track of Human and Computer scores
var humanScore = 0;
var computerScore = 0;

// Functions to create win/loss message for a round
let winMessage = (humChoice,compChoice) => {
    console.log(`You win! ${humChoice} beats ${compChoice}`);
};
let lossMessage = (humChoice,compChoice) => {
    console.log(`You lose! ${compChoice} beats ${humChoice}`);
};


// Logic to play a single round
// use if, elif and else within a function
// finish function with a win/loss/tie message 

function playRound(humanChoice,computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`You both chose ${humanChoice}! This round is a tie.`)
    }

    else if (humanChoice == "rock" && computerChoice == "scissors") {
        winMessage(humanChoice,computerChoice);
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {
        winMessage(humanChoice,computerChoice);
    }

    else if (humanChoice == "scissors" && computerChoice == "paper") {
        winMessage(humanChoice,computerChoice);
    }

    else {
        lossMessage(humanChoice,computerChoice);
    }

};


const computerChoice = getComputerChoice();
console.log(computerChoice); // remove this line once finished
const humanChoice = getHumanChoice();

playRound(humanChoice,computerChoice);
