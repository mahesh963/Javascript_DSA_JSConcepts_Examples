let arr = [6, 7, 3, 2, 1, 5, 4, 9];

function quickSort(arr) {
	if (arr.length <= 1) return arr; //This is Edge Case (or) Base case: an array with 0 or 1 element is already sorted

	let pivot = arr[0];
	let left = [];
	let right = [];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));
