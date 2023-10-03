//Implement Insertion Sort in javascript
//Write a functionality to sort the given array nums in ascending order.

let nums = [49, 24, 10, 13, 37, 13, 33, 8, 69];

function insertionSort(arr) {
	let n = arr.length;
	for (let i = 0; i < arr.length; i++) {
		// Store the current element to be compared
		const key = arr[i];
		let j = i - 1;
		console.log(j);
		// Compare the current element with the elements before it
		while (j >= 0 && arr[j] > key) {
			// Shift elements to the right until we find the correct position for currentElement
			arr[j + 1] = arr[j];
			j--;
		}
		// Place currentElement in its correct position.
		arr[j + 1] = key;
	}

	return arr;
}

console.log(insertionSort(nums));
