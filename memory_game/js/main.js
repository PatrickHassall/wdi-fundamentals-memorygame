var cards =  ["queen", "queen", "king", "king"];
var cardsInPlay = []

var cardOne = cards[3];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("user flipped " + cardsInPlay[0]);
console.log("user flipped " + cardsInPlay[1]);

if (cardsInPlay.length !== 2) {
	console.log("awaiting full selection")
} else {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
	} else {
			alert("Sorry, try again.")
		}
	};	
