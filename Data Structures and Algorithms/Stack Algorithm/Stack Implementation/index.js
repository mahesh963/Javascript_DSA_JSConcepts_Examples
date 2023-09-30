class Stack {
	constructor() {
		this.stack = [];
	}

	push(element) {
		return this.stack.push(element);
	}

	pop() {
		if (this.size() <= 0) {
			return "no elements in the stack to pop";
		}
		return this.stack.pop();
	}

	peek() {
		if (this.size() <= 0) {
			return "no elements in the stack at peek";
		}

		return this.stack[this.stack.length - 1];
	}

	size() {
		return this.stack.length;
	}

	print() {
		let stackStr = "";
		for (let i = 0; i < this.size(); i++) {
			stackStr += this.stack[i] + ",";
		}
		return stackStr;
	}
}

const stack = new Stack();

console.log(stack.push(15));
console.log(stack.push(35));
console.log(stack.pop());
console.log(stack.push(65));
console.log(stack.print());
