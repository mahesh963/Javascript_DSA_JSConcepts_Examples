//<=================Find Prime=========================>
function findPrime(num) {
	if (num <= 1) return false; // 0 and 1 are not prime

	for (let i = 2; i < num; i++) {
		console.log(`num : ${num} and ${i}  is ${num % i}`);
		if (num % i === 0) {
			return false; // If any number from 2 to num-1 divides evenly, it's not prime
		}
	}

	return true; // If no divisors were found, it's prime
}

console.log(findPrime(6));
console.log(findPrime(1));
console.log(findPrime(7));
console.log(findPrime(9));
