

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


// Human Choice 
// takes string input 

function getHumanChoice() {
    var humChoice = prompt("Type Rock, Paper or Scissors: ")
    humChoice = humChoice.toLowerCase()
    return humChoice;
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



// Logic to play a single round

function playRound(humanChoice) {

    const computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        tieMessage(humanChoice)
        humanScore++;
        computerScore++;
        roundNumber++;
    }

    else if (humanChoice == "rock" && computerChoice == "scissors") {
        winMessage(humanChoice,computerChoice);
        humanScore++;
        roundNumber++;
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {
        winMessage(humanChoice,computerChoice);
        humanScore++;
        roundNumber++;
    }

    else if (humanChoice == "scissors" && computerChoice == "paper") {
        winMessage(humanChoice,computerChoice);
        humanScore++;
        roundNumber++;
    }

    else {
        lossMessage(humanChoice,computerChoice);
        computerScore++;
        roundNumber++;
    }

};


// Function that runs the game as a whole for 5 rounds
function playGame() {
    for(i=0;;i++) {
        const humanChoice = getHumanChoice();
        playRound(humanChoice);
    };
    if (humanScore > computerScore) {
        console.log(`Congratulations you beat the computer by winning ${humanScore} rounds!`)
    }
    else if (humanScore == computerScore) {
        console.log(`You and the computer both tied with ${humanScore} points`)
    }
    else {
    console.log(`The computer beat you with ${computerScore} points`)
    }
    };


    // create JS code to alter the DOM and run the game

    const optionButtons = document.querySelector(".button-container").childNodes ;
    
    optionButtons.forEach(
        (button) => {
        button.addEventListener("click", () => {
            playRound(button.id)
        })
    }
    )
        
