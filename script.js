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


let humanScore = 0;
let computerScore = 0;
let textdiv = document.querySelector("div#text");

function playRound(humanChoice, computerChoice) {
  if(humanScore > 4 || computerScore > 4) {
    declareFinalWinner()
    return;
  }

  if(computerChoice == loser.get(humanChoice)) {
    humanScore++;
    //console.log(`You win! ${humanChoice} beats ${computerChoice}\n (h: ${humanScore}, c:${computerScore})`);
    textdiv.style.color = "Green";
    textdiv.textContent = `You win! ${humanChoice} beats ${computerChoice}\n (h: ${humanScore}, c:${computerScore})`;
    return;
  }
  else if (humanChoice == loser.get(computerChoice)) {
    computerScore++;
    //console.log(`You lose! ${computerChoice} beats ${humanChoice}\n (h: ${humanScore}, c:${computerScore})`);
    textdiv.style.color = "red";
    textdiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}\n (h: ${humanScore}, c:${computerScore})`;
    return;
  }
  else {
    //console.log(`Draw! Both chose ${humanChoice}\n (h: ${humanScore}, c:${computerScore})`);
    textdiv.style.color = "orange";
    textdiv.textContent = `Draw! Both chose ${humanChoice}\n (h: ${humanScore}, c:${computerScore})`;
    return;
  }
  
}

function declareFinalWinner(){
  const htmlBody = document.querySelector("body");
  const finalMessage = document.createElement("div");

  htmlBody.prepend(finalMessage);

  if(humanScore > computerScore) {
  //console.log(`Final winner: you (h: ${humanScore}, c:${computerScore})`);
    finalMessage.textContent = `Final winner: you (h: ${humanScore}, c:${computerScore})`
  }
  
  else if (computerScore > humanScore) {
    //console.log(`Final winner: computer (h: ${humanScore}, c:${computerScore})`);
    finalMessage.textContent = `Final winner: computer (h: ${humanScore}, c:${computerScore})`;
  }
  
  else {
    //console.log(`Draw! (tied on score ${humanScore})`);
    finalMessage.textContent = `Draw! (tied on score ${humanScore})`;
  }

  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;
}  


const btnRock = document.querySelector("#btn-rock");
btnRock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

const btnPaper = document.querySelector("#btn-paper");
btnPaper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

const btnScissors = document.querySelector("#btn-scissors");
btnScissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
