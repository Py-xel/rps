let computerSelection;
let computerScore = 0;

let playerSelection;
let playerScore = 0;

// Generate random integer between range
function getRandomInt(min, max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(playerSelection, computerSelection)
{
  if ((playerSelection + 1) % 3 === computerSelection)
  {
    console.log("Computer wins!");
    return (computerScore = computerScore + 1);
  }
  else if (playerSelection === computerSelection)
  {
    return console.log("DRAW");
  }
  else
  {
    console.log("Player wins!");
    return (playerScore = playerScore + 1);
  }
}
//eslint-disable-next-line
function five_rounds()
{
  for (let i = 0; i < 5; i++)
  {
    computerSelection = getRandomInt(0, 2);
    playerSelection = getRandomInt(0, 2);
    playRound(playerSelection, computerSelection);
  }
}

five_rounds(playerSelection, computerSelection);
console.log(`Score: Player ${playerScore} - ${computerScore} Computer`);