let a = 4;
let b = 6;

console.log(a + b);

//polyfill for run once program using apply method

function once(func, context) {
	let ran;
	return function () {
		if (func) {
			ran = func.apply(context || this.arguments);
			func = null;
		}
	};
	return ran;
}

let hello = once((a, b) => console.log("a,b"));

hello();
hello();
hello();
hello();
