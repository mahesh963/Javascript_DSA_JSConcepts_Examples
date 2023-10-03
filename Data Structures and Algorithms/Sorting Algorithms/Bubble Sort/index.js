//Implement Bubble Sort in javascript
//Write a functionality to sort the given array nums in ascending order.

// Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. It's named "bubble sort" because smaller elements "bubble" to the top of the list as the algorithm progresses.

//[24, 10, 14, 37, 16];

function Sort(nums) {
	let n = nums.length;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			//console.log(`index:${j}, value:${nums[j]} `);
			if (nums[j] > nums[j + 1]) {
				[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
			}
		}
	}
	return nums;
}

console.log(Sort([24, 10, 14, 37, 16]));

//<==============Another approach using Do/While loop===========================>

function bubbleSort(arr) {
	let swapped;
	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				// Swap the elements
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				swapped = true;
			}
		}
	} while (swapped);
	return arr;
}

// Example usage:
const arr = [5, 2, 9, 1, 5, 6];
bubbleSort(arr);
console.log(arr); // Output: [1, 2, 5, 5, 6, 9]
