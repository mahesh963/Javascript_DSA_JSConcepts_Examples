//<=================isArmstrongNumber=========================>
function isArmstrongNumber(number) {
	// Convert the number to a string to count its digits
	const numStr = number.toString();
	const numDigits = numStr.length;

	// Calculate the sum of the digits each raised to the power of numDigits
	const sum = numStr
		.split("")
		.reduce((acc, digit) => acc + Math.pow(parseInt(digit), numDigits), 0);

	// Check if the sum is equal to the original number
	return sum === number;
}

// Example usage:
console.log(isArmstrongNumber(153)); // Output: true (153 is an Armstrong number: 1^3 + 5^3 + 3^3 = 153)
console.log(isArmstrongNumber(370)); // Output: true (370 is an Armstrong number: 3^3 + 7^3 + 0^3 = 370)
console.log(isArmstrongNumber(371)); // Output: true (371 is an Armstrong number: 3^3 + 7^3 + 1^3 = 371)
console.log(isArmstrongNumber(407)); // Output: true (407 is an Armstrong number: 4^3 + 0^3 + 7^3 = 407)
console.log(isArmstrongNumber(123)); // Output: false (123 is not an Armstrong number)
