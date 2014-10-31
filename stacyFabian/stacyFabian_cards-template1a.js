// Simple version (no error-detection)

// function()--> possible return values

function rank(card) { // --> 1..13
	if (card="A")
		var cardRank = 1;
	else if (card=1)
		cardRank = 2;
	else if (card=2)
		cardRank = 3;
	else if (card=3)
		cardRank = 4;
	else if (card=4)
		cardRank = 5;

}

function suit(card) { // --> 1..4
	if (card="hearts")
		var cardSuit=1;
	else if (card="diamonds")
		var cardSuit=2;
	else if (card="spades")
		var cardSuit=3;
	else if (card="clubs")
		var cardSuit=4;
}

function cardID(rank,suit) { // --> 0..51
}

function color(card) { // -->"red","black"
if (suit=1)
	console.log("red");
else if (suit=2)
	console.log("black");
else if (suit=3)
	console.log("red");
else if (suit=4)
	console.log("black");
}

function name(card) { // --> string
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

