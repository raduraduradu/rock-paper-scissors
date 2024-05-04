const rps = ["rock", "paper", "scissors"];

const humanScore = 0;
const computerScore = 0;

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
  let winner = " ";
  let message = " ";
  console.log("human choice: " + humanChoice);
  console.log("computer choice: " + computerChoice);
  for (let i = 0; i < 3; i++) {
    if(humanChoice == rps[i]) {
      for (let j = 0; j < 3; j++) {
        if(computerChoice == rps[j]) {
          if(i == j) {
            //winner = "draw";
            message = "Draw! Both chose " + rps[i];
            console.log(message);
            return;
          }

          if(j+1 == 3) {
            j -= 3;
          }
          if(i == j+1) {
            //winner = "human";
            if(j < 0){
              j += 3;
            }
            message = "You win! " + rps[i] + " beats " + rps[j];
            console.log(message);
            return;
          }

          if(j+2 >= 3) {
            j -= 3;
          }
          if(i == j+2) {
            //winner = "computer";
            if(j < 0){
              j += 3;
            }
            message = "You lose! " + rps[j] + " beats " + rps[i];
            console.log(message);
            return;
          }
        }
      }
    }
  }
}

playRound(getHumanChoice(), getComputerChoice());
