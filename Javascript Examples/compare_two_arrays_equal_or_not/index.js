//<=================Compare two arrays equal or not=========================>

function compArrs() {
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = [3, 4, 2, 1, 5, 6];

	let result =
		arr1.length === arr2.length &&
		arr1.every((value) => {
			console.log(arr2.indexOf(value));
			if (arr2.indexOf(value) > -1) {
				return true;
			}
		});

	return result;
}
console.log(compArrs());
