//<------------Remove Duplicates in Objects--------------------->
const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12, f: 10, g: 6, f: 10, g: 6 };

function removdupsObj(input1) {
	let resObj = {};
	for (let key in input1) {
		if (!Object.values(resObj).includes(key)) {
			resObj[key] = input1[key];
		}
	}
	console.log(resObj);
}

removdupsObj(input1);
//<------------Remove Duplicates in Objects--------------------->
