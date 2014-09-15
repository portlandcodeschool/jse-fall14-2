### Homework #2

Due Mon, 9/15

---

**0)** 
Create a free [Harvest](www.getharvest.com) account and track your class-related hours this week.
If you don't remember to start the timer when you begin working, try to estimate and log your time retroactively.
Be descriptive about which activity you're working on (e.g. in class, office hours, doing homework, reading, etc).
On next Monday, generate an invoice for the week and turn it in with your homework.

Remember that you should expect to spend 20 hours per week outside of class.  As a general guideline, at least half of that should be spent directly on the homework problems, and another quarter should be background reading and studying.

Each problem below lists, along with its projected difficulty level, an approximate time budget.  The total time estimate for this homework is around 10 hours.

---

**1)** _(Easy, 1/2 hr)_

Revisit your solution to homework #1, problem 4, which expresses an improper fraction as a proper one, and turn your solution into a function.

**a)** Write a function `printFraction(n,d)` which takes 2 parameters (n,d) and returns a string.  For example, 
`printFraction(7,4)` should return "1 3/4".  Assume that _n_ and _d_ are both positive integers.

//
// function printFraction(n,d){
// var number = n/d;
// if(n > d){
//   var x = (n%d);
//   var y = Math.floor(number);
//   console.log(" " + y + " " + x + '/' + d);
//  }
// }



**b)** Write a second version of your function which improves the output in two special cases:

- A output string like "0 1/2" should be simplified to just "1/2";
- A output string like "1 0/3" should be simplified to just "1".

// function printFraction(n,d){
// var number = n/d;
// var x = (n%d);
// var y = Math.floor(number);
// var result = '';
//  if(n<d){
//     result = (n%d + '\\' + d);
//   }
//   else if (n==d && x==0){
//     result= number;
//   }
//   else if(n > d){
//     if(x==0){
//       result=y;
//     }
//     else{
//     result=(" " + y + " " + x + '/' + d);
//     }
//   }
//   console.log(result);    
// }



---

**2)** _(Easyish, 2 hrs)_

Rewrite each block below as the simplest equivalent you can discover.  Your equivalent should produce the same final conditions as the original code given the same initial conditions.

**a)**

```
  var i;
  if ((n - Math.floor(n)) >= .5) {
     i = Math.ceil(n);
  } else {
    i = Math.floor(n);
  }
```
//Math.round(n);

**b)**
```
var y, xIsFalse = (x? false : true);
if (xIsFalse)
   y = false;
else
   y = x;
```
//(x? true : false);




**c)**
```
for (var count = 15 - i ; count < 15 ; count=count+1) {
    i = i-1;
    console.log(i+1)
}
```
// for(var i; i; i--){
//   console.log(i);
// }


**d)**

```
var x;
if (a) {
   if (b) {
     x = 0;
   } else {
     x = 1;
   }
} else {
  if (b) {
    x = 1;
  } else {
    x = 2;
  }
}
```
//var x;
// if (a || b){
//   x = 1;
// }
// else{
//   x = 2;
// }

---

**3)** _(Moderate, 2 hrs)_

Write a program which generates a string containing the entire lyrics for the song "The Twelve Days of Christmas".  Make sure that your result is grammatically and typographically correct (include line breaks, commas, etc. where needed), but keep redundancy within your program to a minimum.
You may want to use functions, loops, and/or arrays to store repeated elements.
(Tip: within any string, '\n' creates a line break.)

If you prefer a non-Christmas option, you may choose a different song with similarly repeating structure, such as "There was an Old Woman Who Swallowed a Fly".
// var songLyrics = ['On the first day of Christmas\n my true love sent to me:\n A Partridge in a Pear Tree\n', 'On the second day of Christmas\n my true love sent to me:\n Two Turtle Doves\n and a Partridge in a Pear Tree\n', 'On the third day of Christmas\n my true love sent to me:\n  Three French Hens\n Two Turtle Doves\n and a Partridge in a Pear Tree\n', 'On the fourth day of Christmas\n my true love sent to me:\n Four Calling Birds\n Three French Hens\n Two Turtle Doves\n and a Partridge in a Pear Tree\n', 'On the fifth day of Christmas\n my true love sent to me:\n Five Golden Rings\n Four Calling Birds\n Three French Hens\n Two Turtle Doves\n and a Partridge in a Pear Tree\n', 'On the sixth day of Christmas\n my true love sent to me:\n Six Geese a Laying\n Five Golden Rings\n Four Calling Birds\n Three French Hens\n Two Turtle Doves\n and a Partridge in a Pear Tree\n', 'On the seventh day of Christmas\n my true love sent to me:\n Seven Swans a Swimming\n Six Geese a Laying\n Five Golden Rings\n Four Calling Birds\n Three French Hens\n Two Turtle Doves\n and a Partridge in a Pear Tree\n', 'On the eighth day of Christmas\n my true love sent to me:\n Eight Maids a Milking\n Seven Swans a Swimming\n Six Geese a Laying\n Five Golden Rings\n Four Calling Birds\n Three French Hens\n Two Turtle Doves\n and a Partridge in a Pear Tree\n', 'On the ninth day of Christmas\n my true love sent to me:\n Nine Ladies Dancing\n Eight Maids a Milking\n Seven Swans a Swimming\n Six Geese a Laying\n Five Golden Rings\n Four Calling Birds\n Three French Hens\n Two Turtle Doves\n and a Partridge in a Pear Tree\n', 'On the tenth day of Christmas\n my true love sent to me:\n Ten Lords a Leaping\n Nine Ladies Dancing\n Eight Maids a Milking\n Seven Swans a Swimming\n Six Geese a Laying\n Five Golden Rings\n Four Calling Birds\n Three French Hens\n Two Turtle Doves\n and a Partridge in a Pear Tree\n', 'On the eleventh day of Christmas\n my true love sent to me:\n Eleven Pipers Piping\n Ten Lords a Leaping\n Nine Ladies Dancing\n Eight Maids a Milking\n Seven Swans a Swimming\n Six Geese a Laying\n Five Golden Rings\n Four Calling Birds\n Three French Hens\n Two Turtle Doves\n and a Partridge in a Pear Tree\n', 'On the twelfth day of Christmas\n my true love sent to me:\n 12 Drummers Drumming\n Eleven Pipers Piping\n Ten Lords a Leaping\n Nine Ladies Dancing\n Eight Maids a Milking\n Seven Swans a Swimming\n Six Geese a Laying\n Five Golden Rings\n Four Calling Birds\n Three French Hens\n Two Turtle Doves\n and a Partridge in a Pear Tree'];
// var wholeSong = ' ';
// function callXmas() {
//  "use strict"
//   for (var i = 0; i <12; i++) { wholeSong += songLyrics[i];
//  } console.log(wholeSong);
// }

---

**4)** _(Difficult, 2.5 hrs)_

Suppose the '&' key on your keyboard is missing, and you want to be able to continue programming without it.

**a)**
Write a function `and2(a,b)` which tries to simulate the && operator: it should always return the same result as `(a && b)` for any values of _a_ and _b_.  (For example, `and2((0>1),true)` should return _false_.)  But you cannot use && itself within your function!

// function and2(a,b){
//   if(a){
//     result=b;
//   }
//   else{
//     result = a;
//   }
//   console.log(result);
// }


**b)** Write another function `and3(a,b,c)` which tries to simulate a double-&& operator: it should always return the same result as `(a && b && c)` for any values of a,b,c.  (For example, `and3((1>0),(0>1),true)` should return _false_.)  As before, you are not allowed to use && itself.

// function and3(a,b,c){
//   if(a){
//       if(b){
//         result = c;
//       }
//     else if(!b){
//       result = b;
//     }
//   } 
//   else{
//     result = a;
//   }
//   console.log(result);
// }



**c)**
Now generalize your function to handle any number of values.  You will learn better ways eventually, but for now use an array to store all the values.
Your new function `andN(n,values)` should accept two parameters: `n` is the length of the array `values`.  Assume the array holds at least `n` values.
If your array argument holds values [a,b,c...z], as in
`andN(26,[a,b,c...z])`, the function should return the same result as `(a && b && c && ... z)`.
Make sure to handle two special cases: length 0 (then return _true_) and length 1 (then return that single value).
Again, dont use &&.

// var values = [true, false, true, true, false];

// var n = values.length;

// function andN(n,values){
//   while(n !== 0){
//     if(values[n] == 0){
//     return false
//   }
//   return true;
  
//   }
//   n--
// }
// andN(n,values);

**d)**
Youve just realized that your effort was doomed: neither of your functions can replace the && operator in certain circumstances.  Explain why, and find an example which demonstrates failure.

//if there is an undefined or a null or even a NaN inside of the array it will return true when in reality it is not necessarily true. it is not false either, it is just null, or NaN or undefined.

---


**5)** _(Moderate, 3 hrs)_

Imagine that a deck of playing cards is sorted by rank and suit: first all the Aces, then the Twos, etc, with the Kings last. Within each rank, the suits are in the order Hearts, Diamonds, Spades, Clubs. Number each card in order from 0 to 51 (i.e. 0=Ace of Hearts; 51=King of Clubs), and let that ID number represent the corresponding card.  Use that encoding scheme for each part below.

**a)** Write five related functions to compute different aspects of a card:

* `rank(id)` returns 1-13, representing the card's rank (for an _id_ between 0-51).

* `suit(id)` returns 1-4, representing the card's suit (1 is Hearts, 4 is Clubs).

* `color(id)` returns "red" or "black".

* `name(id)` returns the full name of the card (e.g. "Four of Diamonds").

* `cardID(rank,suit)` returns 0-51, identifying the card id of a given rank and suit.

Assume each function is given valid arguments (i.e. the args are integers in the appropriate range).
Your functions may call each other-- for example: _color_ could be derived from _suit_. Try to reuse functions to avoid duplicating code.

Hint #1: Notice the patterns as the card id ranges from 0 to 51:

- rank(id) increases slowly, like a quotient;
- suit(id) cycles quickly through 1-4, (almost) like a remainder;
- color(id) alternates R,B,R,B...

Hint #2: Generate your card names by combining a rank word from one array and suit word from another.

Write your code into the [template file](cards-template1a.js).  The template also includes a suite of assertions for testing your code.  When you evaluate the entire template file, the assertions at the end will write messages to the console if your functions fail any test.  Make sure you pass all the tests!

**b)**
Now abandon the assumption of valid arguments and program defensively!  Rewrite your five functions so that each returns the correct answer when all arguments are valid, but returns NaN if any argument is not an integer in the appropriate range.

You may use the provided [template file](cards-template1b.js), which has extra tests checking the results of invalid arguments.

Hint #3: you can test whether an number _n_ is an integer with `(n%1 === 0)`.

**c)**
In the file with your solution to part **b**, extend the existing test suite: write 3 new assertions to test success cases and 3 more assertions to test failure cases.


_(Please note: Problem 5 is the most important one in this homework, because variations of it will recur in several later homeworks.  The cleaner your code is now, the easier it will be to modify later.)_


