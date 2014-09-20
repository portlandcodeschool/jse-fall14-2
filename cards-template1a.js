// Simple version (no error-detection)

// function()--> possible return values
var names = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];

var suits = ['Hearts','Diamonds','Spades','Clubs'];

function rank(card) { // --> 1..13
	return Math.floor(card/4)+1;
} /* takes the card id value (0-51), divides by four b/c
there are four suits. math.floor then rounds down to the nearest
whole number. always add one because the card ids start with 0
but the suit ids start with 1 */

function suit(card) { // --> 1..4
	return (card%4)+1;
} /* the four suits are cycled through the card id amount. so, 
the suits can go into 51 a lot of times, with a remainder of 3. 
then always add one to it in order to get the correct suit. 
one has to be added because the card ids start with 0 but the
suit ids start with 1*/ 

function cardID(rank,suit) {
    return (rank-1)*4 + (suit-1);
} /* gives each card a value from 0 to 51 which is determined by its rank and suit.*/

function color(card) { // -->"red,"black"
    return (suit(card) < 3)? "red": "black"; 
} /* If the suit is a 1 or 2 value then return red, otherwise return black */ 

function name(card) { // --> string
	return names[rank(card)] + " of " + suits[suit(card)];
} /* return the name and suit of the card whose id is called. return it as a string */


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

