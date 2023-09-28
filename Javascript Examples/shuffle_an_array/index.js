//<------------shuffle an array--------------------->

let arr = [6, 1, 2, 4, 7, 11, 15];

function shuffleArr(arr) {
	console.log("Shuffled Array:", arr);
	for (let i = arr.length - 1; i >= 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	console.log("Shuffled Array:", arr);
}

shuffleArr(arr);
