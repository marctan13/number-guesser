let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
  return Math.floor(Math.random() * 101)
};

console.log(generateTarget());

const compareGuesses = (user, comp, target) => {
  const userDiff = Math.abs(target - user);
  const compDiff = Math.abs(target - comp);

  if(userDiff <= compDiff){
    return true;
  } else {
    return false;
  }
}

const updateScore = winner => {
  if(winner === 'human'){
    humanScore++;
  } else if(winner ==='computer'){
    computerScore++;
  }
}

const advanceRound = () =>
  currentRoundNumber++;