//Linear Search
let arr = [6, 4, 5, 9, 7, 1, 2, 3];
let target = 9;

function linearSearch(arr, target) {
	let result = null;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == target) {
			result = arr[i];
			return result;
		}
	}
	return -1;
}

console.log(linearSearch(arr, target));
