// function factorial(n) {
// 	if (n == 0) {
// 		return 1;
// 	}

// 	return n * factorial(n - 1);
// }

// console.log(factorial(6));

// function rangeOfNums(startNum, endNum) {
// 	if (endNum < startNum) {
// 		return [];
// 	}

// 	console.log(startNum, endNum);

// 	let result = rangeOfNums(startNum, endNum - 1);
// 	console.log(result);
// }

// console.log(rangeOfNums(0, 10));

// function fibNum(num) {
// 	let arr = [];
// 	if (num <= 1) {
// 		return num;
// 	} else {
// 		return fibNum(num - 1) + fibNum(num - 2);
// 	}
// }

// console.log(fibNum(3));

// function reverseStr(str) {
// 	if (str == "") {
// 		return "";
// 	} else {
// 		return reverseStr(str.substr(1)) + str.charAt(0);
// 	}
// }

// console.log(reverseStr("javascript"));

// let helloStr = "HELLO";

// console.log(helloStr.split("").reverse());

// function isPalindrome(n) {
// 	const str = n.toString();

// 	if (str.length <= 1) {
// 		return true;
// 	}

// 	if (str[0] !== str[str.length - 1]) {
// 		return false;
// 	}

// 	return isPalindrome(str.slice(1, -1));
// }
// console.log(isPalindrome(12321));

//Input:"()"
//Input:"([]{})"
//Input:"(]"

class Stack {
	constructor() {
		this.stack = [];
	}

	push(element) {
		return this.stack.push(element);
	}

	pop() {
		if (this.isEmpty()) {
			return "no elements in the stack";
		}
		return this.stack.pop();
	}

	peek() {
		if (this.isEmpty()) {
			return "no elements in the stack";
		}

		return this.stack[this.stack.length - 1];
	}

	isEmpty() {
		return this.stack.length === 0;
	}
}

const stack = new Stack();

stack.push(10);
stack.push(30);
console.log("klkl", stack.peek());

stack.push(50);
console.log("klkl", stack.peek());
console.log(stack);

//input : "The sky is blue"

function reverseStr(str) {
	let strSplit = str.split(" ");
	let strArr = [];
	//console.log("strSplit:", strSplit);
	for (let i of strSplit) {
		//console.log(i);
		strArr.push(i);
	}

	let finalArr = "";
	while (strArr.length) {
		const current = strArr.pop();

		if (current) {
			finalArr += " " + current;
		}
	}
	console.log("finalArr", finalArr.trim());
}

console.log(reverseStr("The sky is blue"));
