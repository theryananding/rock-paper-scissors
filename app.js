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

console.log(getComputerChoice()); 