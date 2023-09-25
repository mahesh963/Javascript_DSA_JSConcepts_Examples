//<=================findFactors=========================>

function findFactors(num) {
	for (let i = 0; i <= num; i++) {
		if (num % i === 0) {
			console.log("fac", i);
		}
	}
}

findFactors(6);
findFactors(17);
findFactors(9);
