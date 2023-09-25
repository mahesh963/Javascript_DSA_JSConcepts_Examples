//<=================isPalindrome=========================>

function isPalindrome(str) {
	let revStr = str.split("").reverse().join("");
	if (revStr === str) {
		return true;
	} else {
		return false;
	}
}

console.log(isPalindrome("example"));
console.log(isPalindrome("madam"));
