//<=================Find Sum of All in Array=========================>
let combArr = [5, 1, 3, 2, 4, 6, 9, 8, 7, 10];

function sumOfArr(arr) {
	let result = arr.reduce((acc, curr) => {
		return acc + curr;
	}, 0);

	console.log(result);
	return result;
}

sumOfArr(combArr);
