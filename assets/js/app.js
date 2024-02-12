const reloadBtn = document.querySelector('input[type="button"]');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

// ! Reload Webpage
reloadBtn.addEventListener('click', () => window.location.reload());

// ! Get Random Nummer between 1-3
const randomNum = () => {
  const randomNumber = Math.ceil(Math.random() * 3);
  return randomNumber;
};

// ! Get the Winner
const getWinner = () => {};

// ! Event Listener Functions
rockBtn.addEventListener('click', getWinner);
paperBtn.addEventListener('click', getWinner);
scissorsBtn.addEventListener('click', getWinner);
