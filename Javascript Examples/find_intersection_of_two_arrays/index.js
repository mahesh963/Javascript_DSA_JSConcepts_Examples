//<=================find intersection of two arrays=========================>

function arrIntersection() {
	let arr1 = [3, 9, 6, 8, 4, 4, 4];
	let arr2 = [4, 8, 6, 9, 36];

	let result = arr1.filter((item) => {
		if (arr2.includes(item)) {
			return true;
		}
	});

	return [...new Set(result)];
}

console.log(arrIntersection());
