function sortArr(arr) {
	let sortedArr = [];

	for (let i = 0; i < arr.length; i++) {
		let maxEle = arr[i];
		let maxIndex = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < maxEle) {
				maxEle = arr[j];
				maxIndex = j;
			}
		}

		// Swap the elements at maxIndex and i
		let temp = arr[i];
		arr[i] = maxEle;
		arr[maxIndex] = temp;
	}

	console.log("sortedArr:", arr);
}

const newArray = [6, 3, 5, 1, 2, 4, 9];
sortArr(newArray);
