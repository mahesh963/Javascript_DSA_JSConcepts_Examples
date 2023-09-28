let newArr = [6, 1, 2, 4, 7, 11, 15];

function changeOrder(arr) {
	let resultArr = [];
	const startIndex = 3;

	console.log("startIndex:", startIndex);

	for (let i = startIndex; i < arr.length; i++) {
		resultArr.push(arr[i]);
	}

	for (let i = 0; i < startIndex; i++) {
		resultArr.push(arr[i]);
	}

	console.log(resultArr);
}

changeOrder(newArr);

console.log(changeOrder(newArr));
