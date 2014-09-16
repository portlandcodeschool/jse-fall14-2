```
var cardPos = ["",
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
```
```
var suitType = [" ",
				"Hearts",
		 		"Diamonds",
		 		"Spades",
				"Clubs"];
```
```
function rank(card) {
	var checkRank = Math.floor((card / 4) +1);
	return checkRank;
}
```

```
function suit(card) {
	var checkSuit = 1 + (card % 4);
	return checkSuit;
}
```

```
function cardID(rank,suit) {
	var cardId = 4 * (rank - 1) + (suit - 1);
	return cardId;
}
```

```
function color(card) {
	var cardSuit = suit(card);
  var cardColor;
	if (cardSuit < 3) {
		cardColor = "red"; 
	}
	else {
		cardColor = "black";
	}
	return cardColor;
}
```
```
function name(card) {
	var cardRank = rank(card);
	var cardSuit = suit(card);
	return cardPos[cardRank]+" of "+suitType[cardSuit]
}
```

```
function printCards() {
	var printAllCards = " ";
  for(var i = 0; i < 51; i++){
    printAllCards += name(i)  + "\n";
  }
  return printAllCards;
}
var fullDeck = printCards();
```


```
// TESTING:
function assert(claim,message) {
    if (!claim) console.error(message);
}
```
```
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
```