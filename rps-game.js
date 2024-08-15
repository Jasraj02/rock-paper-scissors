
console.log("Hello World!")

// Computer Choice
// function will return rock, paper or scissorts
// create a function that returns random ints (0,1,2)
// 

let randomChoice = (num=2) => Math.round(Math.random() * num);

var choice;

function getComputerChoice() {
    switch(randomChoice()) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
};

getComputerChoice();
console.log(choice);