//<--------------------Sliding Window Maxium----------------------->

//Input : nums = [1,3,-1,-3,5,3,6,7], k =3
//Output : [3,3,5,5,6,7]

function maxSlidingWindow(nums, k) {
	let n = nums.length;
	let result = [];

	for (let i = 0; i <= n - k; i++) {
		let maxSum = nums[i];
		console.log("maxSum:", maxSum);
		for (let j = 1; j < k; j++) {
			//console.log(nums[j]);
			if (nums[i + j] > maxSum) {
				maxSum = nums[i + j];
			}
		}
		result.push(maxSum);
	}
	return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
