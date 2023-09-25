//<=================Occurence Of Letter in a String=========================>

function occurenceOfLetter() {
	let word = "occurenceOfLetter";
	let letter = "e";
	let count = 0;
	for (let index = 0; index < word.length; index++) {
		//console.log(word[index].toLowerCase());
		if (word[index].toLowerCase() == letter.toLowerCase()) {
			count++;
		}
	}
	console.log(count);
}

occurenceOfLetter();
