// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note: 0 ≤ x, y < 231.

let x = "hello";
let y = "hrllp";

function HammingDistance(x, y) {
	if (x.length != y.length) {
		throw Error("x and y should be in same length");
	} else {
		let distance = 0;
		for (let i = 0; i < x.length; i++) {
			if (x[i] != y[i]) {
				distance++;
			}
		}
		console.log(distance);
	}
}

HammingDistance(x, y);

//==> Another approach

function FindHammingDistance(x, y) {
	x = x.toString(2);
	y = y.toString(2);

	console.log(x, y);

	if (x.length < y.length) {
		while (x.length !== y.length) x = "0" + x;
	} else {
		while (x.length !== y.length) y = "0" + y;
	}
	console.log(x, y);
	let distance = 0;
	for (let i = 0; i < x.length; i++) {
		if (x[i] != y[i]) {
			distance++;
		}
	}
	console.log(distance);
}

FindHammingDistance(1, 4);
