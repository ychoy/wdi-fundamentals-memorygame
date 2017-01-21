console.log("JS file is connected to HTML! Woo!")

function createBoard(cards) {
  for (var i = 0; i < cards.length; i++) {
    // create a section element ... <section></section>
    var cardElement = document.createElement('div');
    // add a class
    cardElement.className = 'card';
    // append the area to div, a world element <div> <section class='cards'></section></div>

    //setting HTML tag attributes
    //<article id="trogdor" class="burninating"></article>

    board.appendChild(cardElement);
  }
}

var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

if (cardOne === cardThree) {
// Code to be executed if condition1 is true
  "You found a match!";
} else if (cardTwo === cardFour) {
// Code to be executed if condition1 is false and condition2 is true
  "You found a match!";
} else {
// Code to be executed if condition1, condition2, and condition3 are false
  alert("Sorry, try again.");
}

let cards = [ cardOne, cardTwo, cardThree, cardFour ];
let board = document.getElementById('game-board');
createBoard(cards)
