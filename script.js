const playerScoreDom = document.querySelector("#player-score");
const computerScoreDom = document.querySelector("#computer-score");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const startBtn = document.querySelector("#game-start");
const gameContainer = document.querySelector(".container");

let playerScore = 0;
let computerScore = 0;

//Event listeners
rock.addEventListener("click", () => {
  gameRound("rock", computerPlay());
});
paper.addEventListener("click", () => gameRound("paper", computerPlay()));

scissors.addEventListener("click", () => gameRound("rock", computerPlay()));

startBtn.addEventListener("click", () => {
  gameContainer.classList.remove("hidden");
  startBtn.classList.add("hidden");
});

function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  switch (computerChoice) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }

  return computerChoice;
}

function gameRound(playerChoice, computerChoice) {
  if (playerChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    computerScore++;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore++;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
  }

  playerScoreDom.innerHTML = `Score: ${playerScore}`;
  computerScoreDom.innerHTML = `Score: ${computerScore}`;
  result.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}.`;

  if (playerScore === 5 && computerScore < 5) {
    result.textContent = "You Win!";
    playerScore = 0;
    computerScore = 0;
  } else if (playerScore < 5 && computerScore === 5) {
    result.textContent = "You Lose!";
    playerScore = 0;
    computerScore = 0;
  }
}
