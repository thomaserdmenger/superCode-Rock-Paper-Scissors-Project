const reloadBtn = document.querySelector('input[type="button"]');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultsContainer = document.querySelector('.results');

// ! Reload Webpage
reloadBtn.addEventListener('click', () => window.location.reload());

// ! Texte
const resultsText = {
  winner: 'You are the winner 🥳',
  looser: 'The computer wins 😩',
  draw: 'Draw! But you are the winner of hearts 💖',
  finalWinnerText: 'You are the final winner 🥳',
  finalLooserText: 'CPU is the final winner 🫣',
};

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
    <p>Result: ${finalResult}</p>
    <p>Your points: ${computerPoints} | CPUs points: ${cpuPoints} | Rounds: ${rounds}</p>
  `;

  document.querySelector('.results').innerHTML = result;
};

// ! Render Final Winner
const renderFinalWinner = () => {
  const { finalWinnerText, finalLooserText } = resultsText;
  let finalWinner;

  if (userPoints === 5) {
    finalWinner = `<h3 class="green">${finalWinnerText}</h3>`;
  } else if (cpuPoints === 5) {
    finalWinner = `<h3 class="red">${finalLooserText}</h3>`;
  }

  document.querySelector('.weapons').innerHTML = finalWinner;
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
  const { winner, looser, draw } = resultsText;
  let finalResult;

  if (userChoise === computerChoice) {
    finalResult = draw;
    rounds += 1;
  } else if (
    (userChoise === 'rock' && computerChoice === 'paper') ||
    (userChoise === 'paper' && computerChoice === 'scissors') ||
    (userChoise === 'scissors' && computerChoice === 'rock')
  ) {
    finalResult = looser;
    cpuPoints += 1;
    rounds += 1;
  } else if (
    (userChoise === 'rock' && computerChoice === 'scissors') ||
    (userChoise === 'paper' && computerChoice === 'rock') ||
    (userChoise === 'scissors' && computerChoice === 'paper')
  ) {
    finalResult = winner;
    userPoints += 1;
    rounds += 1;
  }

  if (userPoints === 5 || cpuPoints === 5) {
    renderFinalWinner();
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
