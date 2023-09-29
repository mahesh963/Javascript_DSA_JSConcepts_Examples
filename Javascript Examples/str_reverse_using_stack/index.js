//input : "The sky is blue"

function reverseStr(str) {
	let strSplit = str.split(" ");
	let strArr = [];
	//console.log("strSplit:", strSplit);
	for (let i of strSplit) {
		//console.log(i);
		strArr.push(i);
	}

	let finalArr = "";
	while (strArr.length) {
		const current = strArr.pop();

		if (current) {
			finalArr += " " + current;
		}
	}
	console.log("finalArr", finalArr.trim());
}

console.log(reverseStr("The sky is blue"));
