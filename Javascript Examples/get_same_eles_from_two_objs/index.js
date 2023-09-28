//<------------Finding Same elements by comparing Two Objects--------------------->

const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
const input2 = { a: 2, e: 12, f: 6, d: 10 };

const output = { d: 10, e: 12 };

function commonItemsInObj(input1, input2) {
	let resObj = {};
	for (let key in input1) {
		if (input1[key] === input2[key]) {
			resObj[key] = input1[key];
		}
	}

	console.log("resObj", resObj);
}

console.log(commonItemsInObj(input1, input2));
