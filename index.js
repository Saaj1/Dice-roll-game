let currentPlayer = 1;

function rollDice() {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  const diceImage = 'images/dice' + randomNum + '.png';
  document.querySelectorAll('img')[currentPlayer - 1].setAttribute('src', diceImage);

  if (currentPlayer === 1) {
    document.querySelector('h1').innerHTML = 'Player 1 rolled a ' + randomNum;
    currentPlayer = 2;
    button.innerHTML = 'Player 2 Roll Dice';
  } else {
    document.querySelector('h1').innerHTML = 'Player 2 rolled a ' + randomNum;
    currentPlayer = 1;
    button.innerHTML = 'Player 1 Roll Dice';
    determineWinner();
  }
}

function determineWinner() {
  const firstDiceNum = parseInt(document.querySelectorAll('img')[0].getAttribute('src').slice(-5, -4));
  const secondDiceNum = parseInt(document.querySelectorAll('img')[1].getAttribute('src').slice(-5, -4));

  if (firstDiceNum > secondDiceNum) {
    document.querySelector('h1').innerHTML = 'Player 1 wins!';
  } else if (firstDiceNum < secondDiceNum) {
    document.querySelector('h1').innerHTML = 'Player 2 wins!';
  } else {
    document.querySelector('h1').innerHTML = 'Draw!';
  }
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  rollDice();
});

rollDice(); // initial roll on page load

