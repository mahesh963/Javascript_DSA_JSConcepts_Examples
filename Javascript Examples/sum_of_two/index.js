//<=======================sum of two=========================>

function sumOfTwo(arr, target) {
	let resarr = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				resarr.push(arr[i], arr[j]);
			}
		}
	}
	return resarr;
}

console.log(sumOfTwo([4, 3, 1, 6, 7], 9));
