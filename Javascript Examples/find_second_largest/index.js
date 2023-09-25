let combArr = [5, 1, 3, 2, 4, 6, 9, 8, 7, 10];

function findSecondLarget(arr) {
	//==========Using Normal logic Method=======
	let result = arr.sort((a, b) => a - b);
	console.log(result[arr.length - 2]);
}

findSecondLarget(combArr);
