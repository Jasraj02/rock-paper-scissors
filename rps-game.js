

// number of rounds
const numberOfRounds = 5;

// round number tracker
var roundNumber = 1;


// create a function that returns random ints (0,1,2)
let randomChoice = (num=2) => Math.round(Math.random() * num);


// Computer Choice
// function will return rock, paper or scissorts

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

// Variables that keep track of Human and Computer scores
var humanScore = 0;
var computerScore = 0;


// Functions to create win/loss/tie message for a round
let winMessage = (humChoice,compChoice) => {
    const text = `You win! ${humChoice} beats ${compChoice}`;
    sendToDOM(text);

};
let lossMessage = (humChoice,compChoice) => {
    const text = `You lose! ${compChoice} beats ${humChoice}`;
    sendToDOM(text);

};
let tieMessage = (humChoice) => {
    const text = `You both chose ${humChoice}! This round is a tie.`;
    sendToDOM(text);
}

function sendToDOM (elementText) {
    const newMessage = document.createElement("div");
    newMessage.classList.add("message");

    newMessage.textContent = `ROUND ${roundNumber} - ` + elementText;
    const parentContainer = document.querySelector(".rounds-container");
    parentContainer.appendChild(newMessage);

};

function runningScore () {
    const resultSection = document.querySelector(".results-container")

    const newScoreboard = `Your Score = ${humanScore}` + "      " + `Computer Score = ${computerScore} `

    resultSection.textContent = newScoreboard
}


// Logic to play a single round

function playRound(humanChoice) {

    const computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        tieMessage(humanChoice)
        roundNumber++;
        runningScore()
    }

    else if (humanChoice == "rock" && computerChoice == "scissors") {
        winMessage(humanChoice,computerChoice);
        humanScore++;
        roundNumber++;
        runningScore()
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {
        winMessage(humanChoice,computerChoice);
        humanScore++;
        roundNumber++;
        runningScore()
    }

    else if (humanChoice == "scissors" && computerChoice == "paper") {
        winMessage(humanChoice,computerChoice);
        humanScore++;
        roundNumber++;
        runningScore()
    }

    else {
        lossMessage(humanChoice,computerChoice);
        computerScore++;
        roundNumber++;
        runningScore()
    }

};


// create win/lose message 
function finalMessage () {

    const container = document.querySelector(".rounds-container");
    const completeMessage = document.createElement("div");

    if (humanScore > computerScore) {
        var text = `Congratulations you beat the computer by winning ${humanScore} rounds!`
    }
    else if (humanScore == computerScore) {
        var text = `You and the computer both tied with ${humanScore} points`
    }
    else {
        var text =`The computer beat you with ${computerScore} points`
    }

    completeMessage.textContent = text;
    container.appendChild(completeMessage)
} 

// alter the DOM and run the game
const optionButtons = document.querySelector(".button-container").childNodes ;
optionButtons.forEach(
    (button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
        if (roundNumber === numberOfRounds+1) {
            finalMessage();
        };
    })
}
)
