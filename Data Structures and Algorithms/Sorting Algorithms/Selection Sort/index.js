//Implement Selection Sort in javascript
//Write a functionality to sort the given array nums in ascending order.

//Selection sort is a simple sorting algorithm that repeatedly selects the minimum (or maximum) element from an unsorted portion of the array and moves it to the sorted portion.

//[24, 10, 14, 37, 16];

function Sort(nums) {
	let n = nums.length;
	for (let i = 0; i < n; i++) {
		// Assume the current index has the minimum value
		let minIndex = i;
		// Find the index of the minimum element in the unsorted portion
		for (let j = i + 1; j < n; j++) {
			//console.log(`index:${j}, value:${nums[j]} `);
			if (nums[j] < nums[minIndex]) {
				minIndex = j;
			}
		}
		// Swap the minimum element with the current element
		if (minIndex !== i) {
			[nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
		}
	}
	return nums;
}

console.log(Sort([24, 10, 14, 37, 16]));
