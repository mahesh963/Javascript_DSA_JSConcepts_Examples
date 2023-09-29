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
