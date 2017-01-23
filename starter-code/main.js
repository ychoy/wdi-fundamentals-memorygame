function createBoard(cards) {
    // loop through length of cards
    for (var i = 0; i < cards.length; i++) {
      // create a div element which will be used as a card
      var cardElement = document.createElement('div');
      // add a class
      cardElement.className = 'card';
      // this will set the card's "data-card" to be element of the array
      // data attributes are meant to store data about an element that is not tied to a style
      // e.g. "king".
      cardElement.setAttribute('data-card', cards[i]);
      // when a card is selected the function isTwoCards will be executed
      cardElement.addEventListener('click', isTwoCards);
      // append card to the board
      board.appendChild(cardElement);
      board.appendChild(cardElement);
  }
}
// checks to seet if there are cards in play
function isTwoCards() {
	// add card to array of cards in play
	//'this' hasn't been covered in this pre-work, but
	//for now, just know it gives you access to the card the user clicked on
	cardsInPlay.push(this.getAttribute('data-card'));
  //if you have two cards in play, check for a match
	console.log(this.getAttribute('data-card'));

  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src = 'http://i.imgur.com/bnuv5Im.png'>";
  } else {
    this.innerHTML = "<img src = 'http://i.imgur.com/v6buNt2.png'>";
  }

  //if you have two cards in play check for a match
  if ((cardsInPlay.length % 2) === 0)  {
    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);
		cardsInPlay = [];
    // clear cards in play array for your next try
  } else if (cardsInPlay.length > 2) {
		cardsInPlay = [];
	}
}

/*
* Find all the card elements on the page and return
* those elements as an array.
*
* param
* return [Array<String>]
*
*/
function findCards() {
	elementList = document.querySelectorAll('div.card');
  return elementList;
}

/*
* Resets the board by removing every card from
* the page.
*
* param
* return [DOM]
*
*/
function clearBoard() {
	let cards = findCards();

	for (var i = 0; i < cards.length; i++) {
    cards[i].parentNode.removeChild(cards[i]);
	}
}

/*
* Resets the HTML for a card so that it is covered
* back up.
*
* param
* return [DOM]
*
*/
function coverCards() {
  let cards = findCards();

  for (var i = 0; i < cards.length; i++) {
    card = cards[i]
    while (card.hasChildNodes()) {
  		node.removeChild(node.firstChild);
		}
	}
}

/*
* Shuffles an array.
*
* param [Array]
* return [Array]
*
*/
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
  // Code to be executed if condition1 is true
   alert("You found a match!");
  } else {
  // Code to be executed if condition1 is false
   alert("Sorry, try again.");
  }
}


var cards = ['queen', 'queen', 'king', 'king', 'queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var board = document.getElementById('game-board');
let kansasCityShuffle = shuffle(cards)
createBoard(kansasCityShuffle);

/* When button is selected, it will callback the shuffle function
 */

findCards();
coverCards();

document.getElementById("myBtn").addEventListener("click", function() {
  let shuffled = shuffle(cards);
  let cardsInPlay = [];

  clearBoard();
  createBoard(shuffled);

  alert("Good luck!");
});

