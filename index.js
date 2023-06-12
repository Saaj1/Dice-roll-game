//generate a random number from 1 to 6 on the dice
const firstRandonNum = Math.floor(Math.random() * 6) + 1

// images for dice 1 to dice 6
const firstDiceImage = 'images/dice' + firstRandonNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);


//generate a random number from 1 to 6 on the dice
const secondRandonNum = Math.floor(Math.random() * 6) + 1

// images for dice 1 to dice 6
const secondDiceImage = 'images/dice' + secondRandonNum + '.png';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

//logic for the winner

if (firstDiceImage > secondDiceImage) {
  document.querySelector('h1').innerHTML = 'Player 1 wins!';

}else if (firstDiceImage < secondDiceImage) {
  document.querySelector('h1').innerHTML = 'Player 2 wins!';

}else {
  document.querySelector('h1').innerHTML = 'Draw!';
}
