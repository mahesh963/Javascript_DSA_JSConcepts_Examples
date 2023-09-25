//<==============================>
findVowels = (str) => {
	const vowels = ["a", "e", "i", "o", "u"];
	let newArr = [];
	let splitArr = str.split("");

	console.log(splitArr);

	for (let i = 0; i < splitArr.length; i++) {
		if (vowels.includes(splitArr[i])) {
			newArr.push(splitArr[i]);
		}
	}

	console.log(newArr);
};

findVowels("addgregwo");
