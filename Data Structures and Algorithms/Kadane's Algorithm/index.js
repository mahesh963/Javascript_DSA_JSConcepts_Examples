//Kadane's Algorithm - DSA

function maxSubArray(nums) {
	let maxSum = nums[0];
	let currentSum = 0;

	for (let i = 0; i < nums.length; i++) {
		currentSum = currentSum + nums[i];

		if (currentSum > maxSum) {
			maxSum = currentSum;
		}
		if (currentSum < 0) {
			currentSum = 0;
		}
	}
	console.log("maxSum", maxSum);
}

maxSubArray([5, 4, -1, 7, 8]);
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

function maxSubArrayMethod(nums) {
	let maxSum = nums[0];
	let currentSum = nums[0];

	for (let i = 1; i < nums.length; i++) {
		console.log(nums[i], currentSum + nums[i]);
		currentSum = Math.max(nums[i], currentSum + nums[i]);
		console.log(currentSum);
		maxSum = Math.max(maxSum, currentSum);
	}
	console.log("maxSum", maxSum);
}

maxSubArrayMethod([5, 4, -1, 7, 8]);
maxSubArrayMethod([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
