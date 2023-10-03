let input = [6, 9, 6, 5, 7, 9, 11, 15, 17, 6, 1, 2, 3, 3, 6, 4, 6];
//output = 13

function seq(input) {
	let obj1 = {};

	for (let i = 0; i < input.length; i++) {
		obj1[input[i]] = (obj1[input[i]] || 0) + 1;
	}

	console.log(obj1);
}

seq(input);
