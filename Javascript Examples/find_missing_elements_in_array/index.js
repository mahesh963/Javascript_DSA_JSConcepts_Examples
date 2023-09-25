//<=================Find Missing Elements in Array=========================>
let newArr = [5, 1, 3, 2, 4, 6, 9, 10];

function missingElements(newArr) {
	let MissingEleArr = [];

	let minNum = Math.min(...newArr);
	let maxNum = Math.max(...newArr);

	// 	//<===== Another approach ===>
	//console.log(minNum, maxNum);
	for (let i = minNum; i < maxNum; i++) {
		if (newArr.indexOf(i) < 0) {
			console.log(i);
		}
	}
	//console.log(MissingEleArr);

	// 	//<===== Another approach ===>

	for (let i = minNum; i <= maxNum; i++) {
		let count = 0;
		console.log(count.length);
		for (let j = 0; j < newArr.length; j++) {
			if (i === newArr[j]) {
				count++;
				break;
			}
		}
		if (!count) {
			MissingEleArr.push(i);
		}
	}
	console.log(MissingEleArr);
}

missingElements(newArr);
