//<=================isAnagram=========================>
function isAnagram(str1, str2) {
	let string1 = str1.toLowerCase().split("");
	let string2 = str2.toLowerCase().split("");

	console.log(string1, string2);

	let res = string1.every((ele) => string2.includes(ele));

	console.log(res);
}

// Example usage:
isAnagram("aRmy", "Mary");
