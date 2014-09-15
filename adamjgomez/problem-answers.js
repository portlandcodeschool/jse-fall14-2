// **1)** _(Easy, 1/2 hr)_

// Revisit your solution to homework #1, problem 4, which expresses an improper fraction as a proper one, and turn your solution into a function.

// **a)** Write a function `printFraction(n,d)` which takes 2 parameters (n,d) and returns a string.  For example, 
// `printFraction(7,4)` should return "1 3/4".  Assume that _n_ and _d_ are both positive integers.

function printFraction(n,d) {
  return Math.floor(n/d) + " " + n % d + "/" + d;
}

printFraction(5,3);



// **b)** Write a second version of your function which improves the output in two special cases:

// - A output string like "0 1/2" should be simplified to just "1/2";
// - A output string like "1 0/3" should be simplified to just "1".

// ---



function printFraction(n,d) {
  if (n%d == 0) {
    return n/d;
  } else if (Math.floor(n/d) == 0) {
    return n%d + "/" + d;
  }
  return Math.floor(n/d) + " " + n % d + "/" + d;
}

printFraction(2,5);


