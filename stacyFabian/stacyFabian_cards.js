// Simple version (no error-detection)

// function()--> possible return values

var cardRankName["Ace",
			 "One",
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
			 "King"]

function rank(card) { // --> 1..13
	// if ((card+4) % 4 = 0)
	// 	var cardRank = 1;
	// else if (card=1)
	// 	cardRank = 2;
	// else if (card=2)
	// 	cardRank = 3;
	// else if (card=3)
	// 	cardRank = 4;
	// else if (card=4)
	// 	cardRank = 5;
}

function suit(card) { // --> 1..4
	if ((card + 4) % 4 = 0)
		var cardSuit = 1;
	else if ((card + 4) % 4 = 1)
		var cardSuit = 2;
	else if ((card + 4) % 4 = 2)
		var cardSuit = 3;
	else if ((card + 4) % 4 = 3)
		var cardSuit = 4;
}

function cardID(rank,suit) { // --> 0..51
	// 
}

function color(card) { // -->"red","black"
if (cardSuit = 1 || 2)
	var cardColor = "red";
else if (cardSuit = 3 || 4)
	var cardColor = "black";
}

function name(card) { // --> string
	for (card=0; card<=52; card++) {
		cardRankName+" of "+cardSuit
	}
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

