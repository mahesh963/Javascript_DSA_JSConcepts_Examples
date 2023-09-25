//Promises() - promise in javascript are way to handle the asynchoronus function , it contains three states pending, reolve and reject

//Async function and Sync Function

//Sync Function: A sync function in JavaScript executes sequentially and blocks the program's execution until it finishes. It's suitable for simple, sequential tasks that don't involve waiting for external operations to complete.

function sum(a, b) {
	console.log("a");
	console.log(a + b);
	console.log("b");
}

sum(4, 5);

//==============================================================================//

//Async Function: An async function in JavaScript allows non-blocking execution and is designed to handle asynchronous operations using mechanisms like Promises or async/await. It doesn't block the program's execution while waiting for tasks like network requests to complete.

function addNum(a, b) {
	let total = null;
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			total = a + b;
			if (total) {
				resolve("success - Total is: " + total);
			} else {
				reject(new Error("error in promises"));
			}
		}, 1000);
	});
}

console.log("promise a");

addNum(6, 9)
	.then((response) => {
		console.log(response);
	})
	.catch((error) => console.log("error", error));

//console.log(result);

console.log("promise b");

//==============================================================================//

function multiply(a, b) {
	let result = a * b;
	return new Promise((resolve, reject) => {
		if (result > 10) {
			resolve("success " + result);
		} else {
			reject("not success" + result);
		}
	});
}

multiply(5, 6)
	.then((res) => {
		console.log(res);
	})
	.catch((error) => {
		console.log(error);
	});
