// Stacy Fabian
// Week 2, Question 1

// Part a
var printFraction = function (n,d) {
	var remainder = n%d;
	var evenlyDivisible = n - remainder;
	var wholeNums = evenlyDivisible / d;
	return fullNums + " " + remainder + "/" + d;
}

// Part b
var printFraction = function (n,d) {
	var remainder = n%d;
	var evenlyDivisible = n - remainder;
	var wholeNums = evenlyDivisible / d;
	if (remainder == 0) {
		return wholeNums;
	} else if (evenlyDivisible == 0) {
		return n + "/" + d;  
	} else {
		return fullNums + " " + remainder + "/" + d;
	}
}
