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

function getComputerChoice() {
  let choice = rps[randomInt(0, 2)];
  return choice;
}


let humanScore = 0;
let computerScore = 0;
const scoreDiv = document.querySelector("#score");
let textdiv = document.querySelector("div#text");
//textdiv.style.backgroundColor = "#555";

function playRound(humanChoice, computerChoice) {

  if(computerChoice == loser.get(humanChoice)) {
    humanScore++;
    //console.log(`You win! ${humanChoice} beats ${computerChoice}\n (h: ${humanScore}, c:${computerScore})`);
    textdiv.style.color = "Green";
    textdiv.textContent = `You win! ${humanChoice} beats ${computerChoice}\n`;
  }
  else if (humanChoice == loser.get(computerChoice)) {
    computerScore++;
    //console.log(`You lose! ${computerChoice} beats ${humanChoice}\n (h: ${humanScore}, c:${computerScore})`);
    textdiv.style.color = "#f33";
    textdiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}\n`;
  }
  else {
    //console.log(`Draw! Both chose ${humanChoice}\n (h: ${humanScore}, c:${computerScore})`);
    textdiv.style.color = "orange";
    textdiv.textContent = `Draw! Both chose ${humanChoice}\n`;
  }
  scoreDiv.textContent = `you: ${humanScore} --- computer: ${computerScore}`;
  if(humanScore > 4 || computerScore > 4) {
    declareFinalWinner()
    return;
  }
}

function declareFinalWinner(){
  //const htmlBody = document.querySelector("body");
  
  if(humanScore > computerScore) {
  //console.log(`Final winner: you (h: ${humanScore}, c:${computerScore})`);
    scoreDiv.style.color = "green";
    scoreDiv.textContent = `Final winner: you (h: ${humanScore}, c:${computerScore})`
  }
  
  else if (computerScore > humanScore) {
    //console.log(`Final winner: computer (h: ${humanScore}, c:${computerScore})`);
    scoreDiv.style.color = "#f33";
    scoreDiv.textContent = `Final winner: computer (h: ${humanScore}, c:${computerScore})`;
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
