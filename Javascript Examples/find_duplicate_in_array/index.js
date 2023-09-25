//<=================find Duplicate=========================>

let dupArr = [1, 2, 3, 3, 6, 4, 6];

function findDuplicate() {
	let res = dupArr.filter((item, index, arr) => arr.indexOf(item) !== index);
	console.log("findDuplicate", res);
}

findDuplicate();
