//Palindrome Number

//Input: x =121 ---> Output:true
//Input: x =10 ---> Output:false

function isPalindrome(x) {
	console.log(x.toString().split("").reverse().join(""));
	return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

//console.log(isPalindrome((x = 1231)));
console.log(isPalindrome(121));
console.log(isPalindrome(10));
