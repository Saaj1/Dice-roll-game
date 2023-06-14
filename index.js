let currentPlayer = 0;
let gameStarted = false;
let player1Wins = 0;
let player2Wins = 0;
let numRounds = 1;

function rollDice() {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  const diceImage = 'images/dice' + randomNum + '.png';
  document.querySelectorAll('img')[currentPlayer].setAttribute('src', diceImage);

  if (currentPlayer === 0) {
    document.querySelector('h1').innerHTML = 'Player 1 rolled a ' + randomNum;
    currentPlayer = 1;
    button.innerHTML = 'Player 2 Roll Dice';
    button.style.backgroundColor = '#17ffee'; // change button color to blue for player 2
  } else {
    document.querySelector('h1').innerHTML = 'Player 2 rolled a ' + randomNum;
    currentPlayer = 0;
    button.innerHTML = 'Player 1 Roll Dice';
    button.style.backgroundColor = '#ff1791'; // change button color to red for player 1
    determineWinner();
  }
}

function determineWinner() {
  const firstDiceNum = parseInt(document.querySelectorAll('img')[0].getAttribute('src').slice(-5, -4));
  const secondDiceNum = parseInt(document.querySelectorAll('img')[1].getAttribute('src').slice(-5, -4));

  if (firstDiceNum > secondDiceNum) {
    document.querySelector('h1').innerHTML = 'Player 1 wins round ' + numRounds + '!';
    player1Wins++;
  } else if (firstDiceNum < secondDiceNum) {
    document.querySelector('h1').innerHTML = 'Player 2 wins round ' + numRounds + '!';
    player2Wins++;
  } else {
    document.querySelector('h1').innerHTML = 'Round ' + numRounds + ' is a draw!';
  }

  if (player1Wins === 2) {
    document.querySelector('h1').innerHTML = 'Player 1 wins the game!';
    button.style.display = 'none';
    const newGameButton = document.createElement('button');
    newGameButton.innerHTML = 'Start New Game';
    newGameButton.addEventListener('click', () => {
      newGameButton.style.display = 'none';
      startButton.style.display = 'block';
      button.style.display = 'none';
      currentPlayer = 0;
      player1Wins = 0;
      player2Wins = 0;
      numRounds = 1;
    });
    document.body.appendChild(newGameButton);
  } else if (player2Wins === 2) {
    document.querySelector('h1').innerHTML = 'Player 2 wins the game!';
    button.style.display = 'none';
    const newGameButton = document.createElement('button');
    newGameButton.innerHTML = 'Start New Game';
    newGameButton.addEventListener('click', () => {
      newGameButton.style.display = 'none';
      startButton.style.display = 'block';
      button.style.display = 'none';
      currentPlayer = 0;
      player1Wins = 0;
      player2Wins = 0;
      numRounds = 1;
    });
    document.body.appendChild(newGameButton);
  } else {
    numRounds++;
  }
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  rollDice();
});

const newGameButton = document.createElement('button');
newGameButton.innerHTML = 'Start New Game';
newGameButton.style.display = 'none';
newGameButton.style.position = 'fixed'; // Set the position to fixed
newGameButton.style.top = '80%'; // Set the top position to 50%
newGameButton.style.left = '50%'; // Set the left position to 50%
newGameButton.style.transform = 'translate(-50%, -50%)'; // Translate the button to center it
newGameButton.style.backgroundColor = 'aliceblue'; // Set the background color
newGameButton.style.color = 'black'; // Set the text color
newGameButton.style.padding = '20px 20px'; // Set padding around the text
newGameButton.style.fontSize = '20px'; // Set the font size
newGameButton.style.fontWeight = 'bold'; // Set the font weight
newGameButton.style.border = 'none'; // Remove the border
newGameButton.style.cursor = 'pointer'; // Change the cursor to a pointer
newGameButton.style.backgroundColor = '#04e762';
;

newGameButton.addEventListener('click', () => {
  location.reload(); // refresh the page
});

document.body.appendChild(newGameButton);

function startGame() {
  gameStarted = true;
  startButton.style.display = "none";
  button.style.display = "block";
  currentPlayer = 0;
  player1Wins = 0;
  player2Wins = 0;
  numRounds = 1;
  document.querySelector('h1').innerHTML = 'Player 1 Roll Dice'; // update the heading
  document.querySelector('img').setAttribute('src', 'images/dice1.png'); // reset the dice images
  document.querySelectorAll('img')[1].setAttribute('src', 'images/dice1.png');
}

function determineWinner() {
  const firstDiceNum = parseInt(document.querySelectorAll('img')[0].getAttribute('src').slice(-5, -4));
  const secondDiceNum = parseInt(document.querySelectorAll('img')[1].getAttribute('src').slice(-5, -4));

  if (firstDiceNum > secondDiceNum) {
    document.querySelector('h1').innerHTML = 'Player 1 wins round ' + numRounds + '!';
    player1Wins++;
  } else if (firstDiceNum < secondDiceNum) {
    document.querySelector('h1').innerHTML = 'Player 2 wins round ' + numRounds + '!';
    player2Wins++;
  } else {
    document.querySelector('h1').innerHTML = 'Round ' + numRounds + ' is a draw!';
  }

  if (player1Wins === 2) {
    document.querySelector('h1').innerHTML = 'Player 1 wins the game!';
    button.style.display = 'none';
    newGameButton.style.display = 'block'; // show the button
  } else if (player2Wins === 2) {
    document.querySelector('h1').innerHTML = 'Player 2 wins the game!';
    button.style.display = 'none';
    newGameButton.style.display = 'block'; // show the button
  } else {
    numRounds++;
  }
}

startButton.addEventListener("click", () => {
  startGame();
});

button.addEventListener("click", () => {
  if (gameStarted) {
    rollDice();
  }
});
