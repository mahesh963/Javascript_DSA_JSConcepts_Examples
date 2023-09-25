//Currying : Currying is the function that takes one argument at a time and returns a new function() expecting a next argument

//Basic Example Like

function sum(a) {
	return function (b) {
		return function (c) {
			return a + b + c;
		};
	};
}

console.log("BasicCurrying", sum(2)(3)(4));

//Another example

//Implement this code
const calc = {
	total: 0,
	add(a) {
		this.total += a;
		return this;
	},
	multiply(b) {
		this.total *= b;
		return this;
	},
	subtract(c) {
		this.total -= c;
		return this;
	},
};

//const result = calc.add(10).multiply(5);
const result = calc.add(10).multiply(5).subtract(30).add(10);

console.log(calc.total);
