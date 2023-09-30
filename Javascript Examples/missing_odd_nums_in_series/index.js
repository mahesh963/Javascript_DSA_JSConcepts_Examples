//<------------Find odd missing numbers in series ONE APPROACH--------------------->

let input = [5, 7, 9, 11, 15, 17];
// let output = 13;

function findOddNum(arr) {
	let startNum = arr[0];
	let endNum = arr[arr.length - 1];
	let count = 0;
	console.log(count);
	for (let i = startNum; i <= endNum; i++) {
		if (i % 2 !== 0) {
			count = 0;

			for (let j = 0; j < arr.length; j++) {
				if (i === arr[j]) {
					count++;
					break;
				}
			}

			if (!count) {
				console.log("num", i);
				return;
			}
		}
	}

	//console.log(missingNum);
}

findOddNum(input);

//<------------Find odd missing numbers in series ANOTHER APPROACH--------------------->

//let input = [5, 7, 9, 11, 15, 17];
// let output = 13;

function findOddNumber(arr) {
	let startNum = arr[0];
	let endNum = arr[arr.length - 1];
	let missingOdd = undefined;
	for (var i = startNum; i < endNum; i++) {
		if (i % 2 !== 0 && !arr.includes(i)) {
			console.log(i);
			missingOdd = i;
		}
	}

	//console.log(missingNum);
}

findOddNumber(input);

//<------------Find odd missing numbers in series ANOTHER APPROACH--------------------->

//<------------ANOTHER APPROACH USING ONLY IF STATEMENT--------------------->

function findMissingOdd(arr) {
	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];
		let next = current + 2;
		//console.log(arr[i + 1], next);
		if (arr[i + 1] != next) {
			//console.log(next);
			return next;
			break;
		}
	}
}

console.log(findMissingOdd([4, 6, 8, 12, 14, 16]));
console.log(findMissingOdd([5, 7, 9, 11, 15, 17]));
