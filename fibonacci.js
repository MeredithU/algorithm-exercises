/*
Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.

Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...

What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/

/* 
i = 0, o = 0
i = 1, o = 1 ; 1
i = 2, o = 1 ; 1 + 0
i = 3, o = 2 ; 1 + 1
i = 4, o = 3 ; 2 + 1
i = 5, o = 5 ; 3 + 2
i = 6, o = 8 ; 5 + 3
i = 7, o = 13 ; 8 + 5
i = 8, o = 21 ; 13 + 8
i = 9, o = 34 ; 21 + 13
*/


function fibonacci(num) {
	if (num === 0) {
		return 0;
	} else if (num === 1) {
		return 1;
	} else {
		return fibonacci(num-1) + fibonacci(num-2)
	}
}
