console.log("Game starts now!");

let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let roundNo = 0;

function getComputerChoice() {
  let num = Math.random();
  if (num > 0.66) {
    computerChoice = "rock";
  } else if (num > 0.33) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  humanChoice = prompt("Rock? Paper? Scissors?\n\nType your choice: ");
  return humanChoice.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
  if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore += 1;
    console.log("You win! Rock beats Scissors.");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore += 1;
    console.log("You win! Paper beats Rock.");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore += 1;
    console.log("You win! Scissors beats Paper.");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore += 1;
    console.log("You lose! Paper beats Rock.");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore += 1;
    console.log("You lose! Scissors beats Paper.");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore += 1;
    console.log("You lose! Rock beats Scissors.");
  } else if (humanChoice == computerChoice) {
    console.log("It's a tie!");
  } else {
    console.log("Invalid input.");
  }
  roundNo += 1;
}

function playGame() {
  while (roundNo < 5) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    console.log(
      `Round ${
        roundNo + 1
      }: You chose ${humanChoice}, Computer chose ${computerChoice}.`
    );
    playRound(computerChoice, humanChoice);
    console.log(`Round ${roundNo} complete.`);
    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry! You lose the game.");
  } else {
    console.log("It's a tie overall!");
  }
  console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);
}

playGame();
