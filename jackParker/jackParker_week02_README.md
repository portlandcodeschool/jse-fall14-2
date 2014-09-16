## Section 1
---

a)
	
	function printFraction(n, d) {
				
		return Math.floor(n / d) + ' ' + (n % d) + '/' + d;
				
	}
	
b)

	function printFraction(n, d) {
	
		if(Math.floor(n / d) <= 0) {
			
			return (n % d) + '/' + d;
			
		} else if((n % d) <= 0) {
			
			return Math.floor(n / d);
			
		} else {
			
			return Math.floor(n / d) + ' ' + (n % d) + '/' + d;
			
		}
		
	}

<br>
## Section 2
---

a)
	
	var i = Math.round(n);

b)

	var y = (x ? false : true) ? false : x;

c)
	
	for (var count = 15 - i; count < 15; count++) {
		console.log(i--);
	}

d)

	var x = (a) ? ((b) ? 0 : 1) : ((b) ? 1 : 2);

<br>
## Section 3
---

	function twelveDaysOfChristmas() {
		
		var countUp,
			countDown,
			song = '',
			days = [
				'first',
				'second',
				'third',
				'fourth',
				'fifth',
				'sixth',
				'seventh',
				'eighth',
				'ninth',
				'tenth',
				'eleventh',
				'twelfth'
			],
			gifts = [
				'a partridge in a pear tree',
				'two turtle doves',
				'three french hens',
				'four calling birds',
				'five golden rings',
				'six geese a laying',
				'seven swans a swimming',
				'eight maids a milking',
				'nine ladies dancing',
				'ten lords a leaping',
				'eleven pipers piping',
				'twelve drummers drumming'
			];
		
		for(countUp = 0; countUp < 12; countUp++) {
		
			song += 'On the ' + days[countUp] + ' day of Christmas my true love gave to me\n';
			
			for(countDown = countUp; countDown >= 0; countDown--) {
				
				if((countDown == 0) && (countUp != 0)) {
					
					song += 'and ' + gifts[countDown] + '\n\n';
					
				} else if((countDown == 0) && (countUp == 0)) {
					
					song += gifts[countDown] + '\n\n';
					
				} else {
					
					song += gifts[countDown] + '\n';
					
				}
				
				
			}
			
		}
		
		return song;
		
	}

<br>
## Section 4
---

a)
		
	function and2(a, b) {
		
		if(a) {
			
			if(b) {
				
				return b;
				
			} else {
				
				return b;
				
			}
			
		} else {
		
			return a;
				
		}
		
	}

b)
	
	function and3(a, b, c) {
		
		if(a) {
			
			if(b) {
				
				return c;
				
			} else {
				
				return b;
				
			}
			
		} else {
		
			return a;
				
		}
		
	}

c)

	function andN(n, values) {
		
		if(n == 0) {
			
			return true;
			
		} else if ( n == 1) {
			
			return values[0];
			
		} else {
			
			for(counter = 0; counter < n; counter++) {
				
				if(values[counter] == false) {
					
					return values[counter];
					
				}
				
			}
			
			return values[counter - 1];
			
		}
		
	}

d) Each expression must evaluate to a scalar logical result.

<br>
## Section 5
---

Answers in template files.