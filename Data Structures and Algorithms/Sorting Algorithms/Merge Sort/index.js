//Merge Sort
//Merge sort is a popular and efficient sorting algorithm known for its stable performance. It divides the array into smaller subarrays, sorts them recursively, and then merges the sorted subarrays to produce the final sorted result.

let arr = [6, 7, 3, 2, 1, 5, 4, 9];

function mergesort(arr) {
	if (arr.length <= 1) return arr; //This is Edge Case (or) Base case: an array with 0 or 1 element is already sorted

	let mid = Math.floor(arr.length / 2);

	let left = arr.slice(0, mid);
	let right = arr.slice(mid);

	return merge(mergesort(left), mergesort(right)); // Corrected line
}

function merge(left, right) {
	let sortedArr = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			sortedArr.push(left.shift());
		} else {
			sortedArr.push(right.shift());
		}
	}
	return [...sortedArr, ...left, ...right];
}

console.log(mergesort(arr));
