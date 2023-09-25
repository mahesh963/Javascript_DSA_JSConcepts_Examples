//<=================findFactorial=========================>

function findFactorial(num) {
	let result = 1;
	for (let i = 1; i <= num; i++) {
		result *= i;
	}
	console.log(result);
}

findFactorial(6);
