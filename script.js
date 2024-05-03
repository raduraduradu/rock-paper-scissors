const rps = ["rock", "paper", "scissors"];

const humanScore = 0;
comst computerScore = 0;

function randomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function inRps(choice) {
  for(let i = 0; i < 3; i++) {
    if (rps[i] == choice) {
      return true;
    }
  }
  return false;
}

function getComputerChoice() {
  let choice = rps[randomInt(0, 2)];
  return choice;
}

function getHumanChoice() {
  let choice = " ";
  while(inRps(choice) === false) {
    choice = String(prompt("Rock, paper or scissors?")).toLowerCase();
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  
}
