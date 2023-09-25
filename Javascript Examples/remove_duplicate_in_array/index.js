//<=================Remove Duplicate=========================>

let dupArr = [5, 5, 1, 2, 3, 3, 6, 4, 6];

function removeDups() {
	let result = dupArr.filter((item, i, arr) => arr.indexOf(item) == i);
	console.log("removeDups", result);
}

removeDups();
