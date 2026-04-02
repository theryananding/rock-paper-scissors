// This function will randomly return either "rock", "paper", or "scissors"

function getComputerChoice() {
    let getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    let result;

    if (getRandomInt(3) === 0) {
        result = "rock";
    } else if (getRandomInt(3) === 1) {
        result = "paper";
    } else {
        result = "scissors";
    }
    return result;
}

// This function will get the user's choice of "rock", "paper", or "scissors" and return it

const playGame = document.getElementById("playButton");

playGame.addEventListener("click", () => {
    let userSelection = prompt("Enter rock, paper, or scissors:");

    alert('You chose ' + userSelection.charAt(0).toUpperCase() + userSelection.slice(1).toLowerCase() + '.');

    return userSelection;
});