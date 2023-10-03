// Maximum Count of Positive Integer and Negative Integer

// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

// Example 1:

// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

function maxCountOfPositiveAndNegative(nums) {
	let positiveCount = 0;
	let negativeCount = 0;

	for (let i of nums) {
		if (i > 0) {
			positiveCount++;
		} else if (i < 0) {
			negativeCount++;
		}
	}

	let result = Math.max(positiveCount, negativeCount);
	console.log(result);
}

maxCountOfPositiveAndNegative([-2, -1, -1, 1, 2, 3]);
maxCountOfPositiveAndNegative([-3, -2, -1, 0, 0, 1, 2]);
