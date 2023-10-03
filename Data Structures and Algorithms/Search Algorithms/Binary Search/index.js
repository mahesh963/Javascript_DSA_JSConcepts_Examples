//Binary Search

// Befor doing binary search arr need to be sorted

let nums = [6, 4, 5, 9, 7, 1, 2, 3];
let target = 6;

function binarySearch(nums, target) {
	let arr = nums.sort();
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let middleElement = Math.floor((start + end) / 2);
		if (arr[middleElement] === target) {
			return middleElement; // Target found, return its index
		} else if (arr[middleElement] < target) {
			start = middleElement + 1; // Adjust the search range
		} else {
			end = middleElement - 1; // Adjust the search range
		}
	}
	return -1; // Target not found, return -1
}

console.log(binarySearch(nums, target));

//Time Complexity : O(logn)
//Space Complexity : O(1)
