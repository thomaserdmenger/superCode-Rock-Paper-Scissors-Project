const reloadBtn = document.querySelector('input[type="button"]');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultsContainer = document.querySelector('.results');

// ! Reload Webpage
reloadBtn.addEventListener('click', () => window.location.reload());

// ! Render Result
const renderResult = (
  userResult,
  computerResult,
  finalResult,
  computerPoints,
  cpuPoints,
  rounds
) => {
  document.querySelector('.results').innerHTML = '';

  const result = `
    <p>You choose: ${userResult}</p>
    <p>CPU choose: ${computerResult}</p>
    <p>Final result: ${finalResult}</p>
    <p>Your points: ${computerPoints} | CPUs points: ${cpuPoints} | Rounds: ${rounds}</p>
  `;

  document.querySelector('.results').innerHTML = result;
};

// ! Get Random Nummer between 1-3
const randomCPUAction = () => {
  const randomNumber = Math.ceil(Math.random() * 3);

  if (randomNumber === 1) return 'rock';
  else if (randomNumber === 2) return 'paper';
  else return 'scissors';
};

// ! Get the Winner
let userPoints = 0;
let cpuPoints = 0;
let rounds = 0;

const getWinner = (event) => {
  const userChoise = event.target.id;
  const computerChoice = randomCPUAction();
  const winner = 'You are the winner 🥳';
  const looser = 'The computer wins 😩';
  const draw = 'Draw! But you are the winner of hearts 💖';
  let finalResult;

  if (userChoise === computerChoice) {
    finalResult = draw;
    rounds += 1;
  } else if (userChoise === 'rock' && computerChoice === 'paper') {
    finalResult = looser;
    cpuPoints += 1;
    rounds += 1;
  } else if (userChoise === 'rock' && computerChoice === 'scissors') {
    finalResult = winner;
    userPoints += 1;
    rounds += 1;
  } else if (userChoise === 'paper' && computerChoice === 'rock') {
    finalResult = winner;
    userPoints += 1;
    rounds += 1;
  } else if (userChoise === 'paper' && computerChoice === 'scissors') {
    finalResult = looser;
    cpuPoints += 1;
    rounds += 1;
  } else if (userChoise === 'scissors' && computerChoice === 'rock') {
    finalResult = looser;
    cpuPoints += 1;
    rounds += 1;
  } else if (userChoise === 'scissors' && computerChoice === 'paper') {
    finalResult = winner;
    userPoints += 1;
    rounds += 1;
  }

  renderResult(
    userChoise,
    computerChoice,
    finalResult,
    userPoints,
    cpuPoints,
    rounds
  );
};

// ! Event Listener Functions
rockBtn.addEventListener('click', getWinner);
paperBtn.addEventListener('click', getWinner);
scissorsBtn.addEventListener('click', getWinner);
