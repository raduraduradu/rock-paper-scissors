const rps = ["rock", "paper", "scissors"];


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
  let first_iteration = true;
  while(inRps(choice) === false) {
    if(first_iteration == false) {
      alert(`${choice} is not valid input`);
    }
    first_iteration = false;
    choice = String(prompt("Rock, paper or scissors?")).toLowerCase();
  }
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    let winner = " ";
    for (let i = 0; i < 3; i++) {
      if(humanChoice == rps[i]) {
        for (let j = 0; j < 3; j++) {
          if(computerChoice == rps[j]) {
            if(i == j) {
              message = `Draw! Both chose ${rps[i]}\n (h: ${humanScore}, c:${computerScore})`;
              console.log(message);
              return;
            }

            if(j+1 == 3) {
              j -= 3;
            }
            if(i == j+1) {
              if(j < 0){
                j += 3;
              }
              humanScore++;
              message = `You win! ${rps[i]} beats ${rps[j]}\n (h: ${humanScore}, c:${computerScore})`;
              console.log(message);
              return;
            }

            if(j+2 >= 3) {
              j -= 3;
            }
            if(i == j+2) {
              if(j < 0){
                j += 3;
              }
              computerScore++;
              message = `You lose! ${rps[j]} beats ${rps[i]}\n (h: ${humanScore}, c:${computerScore})`;
              console.log(message);
              return;
            }
          }
        }
      }
    }
  }

  for (let r = 0; r < 5; r++) {
    playRound(getHumanChoice(), getComputerChoice());
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

playGame();
