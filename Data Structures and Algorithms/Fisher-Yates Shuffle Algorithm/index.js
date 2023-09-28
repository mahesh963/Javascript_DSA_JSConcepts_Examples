function fisherYatesShuffle(arr) {
	for (let currentIndex = arr.length - 1; currentIndex > 0; currentIndex--) {
		// Generate a random index between 0 and currentIndex (inclusive)
		const randomIndex = Math.floor(Math.random() * (currentIndex + 1));

		// Swap the element at currentIndex with the element at randomIndex
		[arr[currentIndex], arr[randomIndex]] = [
			arr[randomIndex],
			arr[currentIndex],
		];
	}

	return arr;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = fisherYatesShuffle([...originalArray]);
console.log(shuffledArray); // This will print a randomly shuffled version of the originalArray.

//<======================Using While Loop=======================>

function fisherYatesShuffle(arr) {
	let currentIndex = arr.length,
		randomIndex,
		tempValue;

	// While there remain elements to shuffle...
	while (currentIndex !== 0) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		tempValue = arr[currentIndex];
		arr[currentIndex] = arr[randomIndex];
		arr[randomIndex] = tempValue;
	}

	return arr;
}

// Example usage:
const inputArr = [1, 2, 3, 4, 5];
const outputArr = fisherYatesShuffle([...origiinputArrnalArray]);
console.log(outputArr); // This will print a randomly shuffled version of the originalArray.
