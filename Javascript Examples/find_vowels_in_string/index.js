//<=================Find Vowels from String=========================>

function findVowels(str) {
	let vowels = ["a", "e", "i", "o", "u"];
	let result = [];
	let strSpilt = str.split("");
	console.log(strSpilt);

	strSpilt.forEach((element) => {
		if (vowels.includes(element)) {
			result.push(element);
		}
	});

	console.log(result);
}

findVowels("example");
