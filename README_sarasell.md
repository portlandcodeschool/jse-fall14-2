### Homework #2

Due Mon, 9/15

---
/*
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

//ANSWER
var printFraction = function(n,d) {
  var remainder = n%d;
  var interger = n/d;
  var counter = 0;
  while (counter <= (interger-1))
  counter = counter + 1
  var properFraction = ((counter) + " " + (remainder + "/" + d));
  return properFraction;
};
console.log(printFraction(7,4));


**b)** Write a second version of your function which improves the output in two special cases:

- A output string like "0 1/2" should be simplified to just "1/2";
- A output string like "1 0/3" should be simplified to just "1".

---

//ANSWER 
  var printFraction = function(n,d) {
  var remainder = n%d, interger = n/d, counter = 0;
    while (counter <= (interger-1))
    counter = counter + 1
    if (counter === 0)
      var properFraction = (remainder + "/" + d); 
    else if (remainder === 0)
      var properFraction = (counter);
    else 
      var properFraction = ((counter) + " " + (remainder + "/" + d));
      return properFraction;
};
console.log(printFraction(2,4));
console.log(printFraction(4,4));

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
// SIMPLER CODE
Math.round(n);
*/

**b)**
```
var y, xIsFalse = (x? false : true);
if (xIsFalse)
   y = false;
else
   y = x;
```
//SIMPLER CODE
var y = (x? x : false);

/*
**c)**
```
for (var count = 15 - i ; count < 15 ; count=count+1) {
    i = i-1;
    console.log(i+1)
}
```
// SIMPLER CODE
for (var count = 15 - i ; count < 15 ; count++) {
    i--;
    console.log(i++)


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
// SIMPLER CODE
var x = 0  // ???it seems like no matter what, x will equal 0

---
*/

**3)** _(Moderate, 2 hrs)_

Write a program which generates a string containing the entire lyrics for the song "The Twelve Days of Christmas".  Make sure that your result is grammatically and typographically correct (include line breaks, commas, etc. where needed), but keep redundancy within your program to a minimum.
You may want to use functions, loops, and/or arrays to store repeated elements.
(Tip: within any string, '\n' creates a line break.)

If you prefer a non-Christmas option, you may choose a different song with similarly repeating structure, such as "There was an Old Woman Who Swallowed a Fly".

//MY ATTEMPT

var days = ["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth"];

var gifts = ["\na Partridge in a Pear Tree","\nand Two Turtle Doves","\nThree French Hens","\nFour Calling Birds","\nFive Golden Rings","\nSix Geese a Laying","\nSeven Swans a Swimming","\nEight Maids a Milking","\nNine Ladies Dancing","\nTen Lords a Leaping","\nEleven Pipers Piping","\n12 Drummers Drumming"];

function christmasSong() {
  for (var daysCount = 0; daysCount < 12; daysCount++) {
    console.log("On the " + days[daysCount] + " day of Christmas, my true love gave to me:")
  for (var giftCount = 0; giftCount <= daysCount; giftCount++) {
    console.log(gifts[giftCount]);
  }
  }
}
---
/*
**4)** _(Difficult, 2.5 hrs)_

Suppose the '&' key on your keyboard is missing, and you want to be able to continue programming without it.

**a)**
Write a function `and2(a,b)` which tries to simulate the && operator: it should always return the same result as `(a && b)` for any values of _a_ and _b_.  (For example, `and2((0>1),true)` should return _false_.)  But you can't use && itself within your function!

//ANSWER
function and2(a,b) {
  if (a === false) {
      return false;
  }
  else if (b === false) {
      return false;
  }
  else {
      return true;
  }
}

**b)** Write another function `and3(a,b,c)` which tries to simulate a double-&& operator: it should always return the same result as `(a && b && c)` for any values of a,b,c.  (For example, `and3((1>0),(0>1),true)` should return _false_.)  As before, you're not allowed to use && itself.
 
//ANSWER
function and2(a,b) {
  if (a === false) {
      return false
  }
  else if (b === false) {
      return false;
  }
  else if (c === false) {
      return false;
  }
  else {
      return true;
  }
}
*/

**c)**
Now generalize your function to handle any number of values.  You will learn better ways eventually, but for now use an array to store all the values.
Your new function `andN(n,values)` should accept two parameters: `n` is the length of the array `values`.  Assume the array holds at least `n` values.
If your array argument holds values [a,b,c...z], as in
`andN(26,[a,b,c...z])`, the function should return the same result as `(a && b && c && ... z)`.
Make sure to handle two special cases: length 0 (then return _true_) and length 1 (then return that single value).
Again, don't use &&.

//ANSWER
var values = [1,2,3,4,5,6];

function andN(n,values) {
  for (var i=1; i<n; i++) {
    if (values[i]) {
      return values[i];
    }
  }
  if (n > 1) {
    return values[1];
  }
  else {
    return "true";
  }
}

**d)**
You've just realized that your effort was doomed: neither of your functions can replace the && operator in certain circumstances.  Explain why, and find an example which demonstrates failure.

---

**c)**
In the file with your solution to part **b**, extend the existing test suite: write 3 new assertions to test success 
cases and 3 more assertions to test failure cases.

_(Please note: Problem 5 is the most important one in this homework, because variations of it will recur in several 
later homeworks.  The cleaner your code is now, the easier it will be to modify later.)_



