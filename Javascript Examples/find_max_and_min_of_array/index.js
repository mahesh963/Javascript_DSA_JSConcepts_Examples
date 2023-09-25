//<=================Find Max and Min of Array=========================>

let combArr = [5, 1, 3, 2, 4, 6];

function find_Min_And_Max(arr) {
	//==========Using Math Methods=======
	let minNumber = Math.min.apply(null, arr);
	let maxNumber = Math.max.apply(null, arr);
	console.log(minNumber, maxNumber);

	//==========Using reduce Method=======

	let maxResult = arr.reduce((acc, curr) => (acc > curr ? acc : curr));

	console.log(maxResult);

	//==========Using Normal logic Method=======
	let minNum = arr[0];
	let maxNum = null;
	for (let i = 0; i < arr.length; i++) {
		if (minNum > arr[i]) {
			minNum = arr[i];
		} else {
			maxNum = arr[i];
		}
	}
	console.log(maxNum, minNum);
}

find_Min_And_Max(combArr);
