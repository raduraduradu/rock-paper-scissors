const rps = ["rock", "paper", "scissors"];

//winner-loser pairs
const loser = new Map([
  ["rock", "scissors"],
  ["paper", "rock"],
  ["scissors", "paper"]
]);


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
  let choice = String(prompt("Rock, paper or scissors?")).toLowerCase();

  while(inRps(choice) === false) {
    alert(`${choice} is not valid input`);
    choice = String(prompt("Rock, paper or scissors?")).toLowerCase();
  }
  return choice;
}

function playGame() {

  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(humanChoice, computerChoice) {
    if(computerChoice == loser.get(humanChoice)) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}\n (h: ${humanScore}, c:${computerScore})`);
      return;
    }
    else if (humanChoice == loser.get(computerChoice)) {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}\n (h: ${humanScore}, c:${computerScore})`);
      return;
    }
    else {
      console.log(`Draw! Both chose ${humanChoice}\n (h: ${humanScore}, c:${computerScore})`);
      return;
    }
  }
 
  if(humanScore > computerScore) {
  console.log(`Final winner: you (h: ${humanScore}, c:${computerScore})`);
  }
  
  else if (computerScore > humanScore) {
    console.log(`Final winner: computer (h: ${humanScore}, c:${computerScore})`);
  }
  
  else {
    console.log(`Draw! (tied on score ${humanScore})`);
  }
}


btn-rock = document.querySelector("#btn-rock");
btn-rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice);
});

playGame();
