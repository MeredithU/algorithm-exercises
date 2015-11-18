/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises
- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/

var arr = [6, 34, 2, 90, 1, 764];

var bubbleSort = function (arr) {

	for (var i = 0; i < arr.length; i++) {

		for (var j = 0; j < arr.length; j++) {
			
			if (arr[j] > arr[j+1]) {
				arr[j+1] = [arr[j], arr[j] = arr[j+1]][0];
			}
		}
	}

	return arr;
}

bubbleSort(arr);


// Below is a function that iterates less over an array
var newBubbleSort = function (arr) {

	var arrLength = arr.length;

	while (arrLength > 0) {

		for (var i = 0; i < arrLength; i++) {
			if (arr[i] > arr[i+1]) {
				arr[i+1] = [arr[i], arr[i] = arr[i+1]][0];
			}
		}

		arrLength--;
	}

	return arr;
}

newBubbleSort(arr);




