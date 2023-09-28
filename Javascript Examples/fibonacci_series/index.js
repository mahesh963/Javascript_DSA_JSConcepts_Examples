//<=================Fibonacci series=========================>

function fibonacciSeries(num) {
	let a = 0;
	let b = 1;
	for (let i = 0; i <= num; i++) {
		let temp = a + b; //1
		//console.log("console-1:", temp, a, b);
		a = b;
		//console.log("console-2:", temp, a, b);
		b = temp;
		//console.log("console-3:", temp, a, b);
		console.log(temp);
	}
}

fibonacciSeries(6);

//<------------------Another approach---------------------->
function FibSeries(num) {
	let arr = [0, 1];

	for (let i = 2; i < num; i++) {
		arr.push(arr[i - 1] + arr[i - 2]);
	}

	console.log(arr);
}

console.log(FibSeries(6));
