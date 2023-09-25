//<=================find union of two arrays=========================>

function arrUnion() {
	let arr1 = [3, 9, 6, 8, 4, 4, 4];
	let arr2 = [4, 8, 6, 9, 36];

	let result = [...arr1, ...arr2];

	return [...new Set(result)];
}

console.log(arrUnion());
