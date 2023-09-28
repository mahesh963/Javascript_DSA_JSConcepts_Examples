let input = [3, 7, 1, 5, 6, 2, 4];

function shuffleArr(arr) {
	for (var i = arr.length - 1; i > 0; i--) {
		//console.log(arr[i]);
		let j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	console.log(arr);
}

shuffleArr(input);
