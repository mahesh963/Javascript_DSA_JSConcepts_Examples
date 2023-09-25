//Map(),Filter(),Reduce() Methods and Polyfills

//Map() Method

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Array.map((num, index, arr) => {}); --> syntax

//polyfill for Map() method

Array.prototype.myMap = function (cb) {
	let tempArr = [];
	for (let i = 0; i < this.length; i++) {
		tempArr.push(cb(this[i], i, this));
	}
	return tempArr;
};

let mapPolyfill = arr.myMap((item, index, arr) => {
	return item * 3;
});

console.log("mapPolyfill", mapPolyfill);

// Filter() Method

// Array.filter((num, index, arr) => {}); --> syntax

//polyfill for Filter() method

Array.prototype.myFilter = function (cb) {
	let tempArr = [];
	for (let i = 0; i < this.length; i++) {
		if (cb(this[i], i, this)) {
			tempArr.push(this[i]);
		}
	}
	return tempArr;
};

let filterPolyfill = arr.myFilter((num, index, arr) => {
	return num > 3;
});

console.log("filterPolyfill:", filterPolyfill);

//Reduce Method and Polyfill

// Array.reduce((accumulator,currentValue,currentIndex,array) => {},initialValue); --> syntax

Array.prototype.myReduce = function (cb, initialValue) {
	let accumulator = initialValue;
	for (let i = 0; i < this.length; i++) {
		accumulator = accumulator ? cb(accumulator, this[i], this) : this[i];
	}
	return accumulator;
};

let reducePolyfill = arr.myReduce((acc, curr) => {
	return acc + curr;
});

console.log("reducePolyfill", reducePolyfill);
