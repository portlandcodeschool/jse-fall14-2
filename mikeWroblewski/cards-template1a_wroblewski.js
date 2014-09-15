// Simple version (no error-detection)

// function()--> possible return values

var cardRankArr = ["",
				   "Ace",
				   "Two",
				   "Three",
				   "Four",
				   "Five",
				   "Six",
				   "Seven",
				   "Eight",
				   "Nine",
				   "Ten",
				   "Jack",
				   "Queen",
				   "King"];

var cardSuitArr = ["",
				   "Hearts",
				   "Diamonds",
				   "Spades",
				   "Clubs"];

function rank(card) { // --> 1..13

	var cardRank = Math.floor((card / 4)+1);
	return cardRank;
}

function suit(card) { // --> 1..4

	var cardSuit = (card % 4) + 1;
	return cardSuit;
	
}

function cardID(rank,suit) { // --> 0..51

	return (rank-1)*4 + (suit-1);

}

function color(card) { // -->"red","black"

	var cardSuit = suit(card) 

	if (cardSuit < 3) {
		var result = "red";
	} else {
		return "black";
	};
  
  return result;

}

function name(card) { // --> string

    var cardRank = rank(card);
    var cardSuit = suit(card);
  
	return cardRankArr[cardRank] + " of " + cardSuitArr[cardSuit];

}



// TESTING:
function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(rank(0)===1,  "Test 1 failed");
assert(rank(3)===1,  "Test 2 failed");
assert(rank(51)===13,"Test 3 failed");
assert(suit(0)===1,  "Test 4 failed");
assert(suit(5)===2,  "Test 5 failed");
assert(suit(51)===4, "Test 6 failed");
assert(cardID(1,1)===0,    "Test 7 failed");
assert(cardID(13,4)===51,  "Test 8 failed");
assert(cardID(8,3)===30,   "Test 9 failed");
assert(color(0)==='red',   "Test 10 failed");
assert(color(2)==='black', "Test 11 failed");
assert(name(5)==='Two of Diamonds', "Test 12 failed");
assert(name(51)==='King of Clubs',  "Test 13 failed");

