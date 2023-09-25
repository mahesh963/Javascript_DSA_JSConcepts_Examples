//<=================Find Odd and Even elements of Array=========================>
let combArr = [5, 1, 3, 2, 4, 6, 9, 8, 7, 10];

function findOddEven(arr) {
	let oddArr = [];
	let evenArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (i % 2 == 0) {
			evenArr.push(i);
		} else {
			oddArr.push(i);
		}
	}

	console.log(oddArr, evenArr);
}

findOddEven(combArr);
