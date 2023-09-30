//Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

var Mystack = function () {
	this.q1 = [];
	this.q2 = [];
};

Mystack.prototype.push = function (element) {
	while (this.q1.length !== 0) {
		//used this condition to push elements from q1 -> q2
		this.q2.push(this.q1.shift());
	}

	this.q1.push(element);

	while (this.q2.length !== 0) {
		//used this condition to push elements from q2 -> q1 again
		this.q1.push(this.q2.shift());
	}

	//<=============for better understanding settimeout used====================>
	// setTimeout(() => {
	// 	while (this.q1.length !== 2) {
	// 		this.q1.shift();
	// 	}
	// }, 600 * this.q1.length);
	//<=============for better understanding settimeout used====================>
};

Mystack.prototype.pop = function () {
	return this.q1.pop();
};

Mystack.prototype.top = function () {
	return this.q1[0];
};
Mystack.prototype.empty = function () {
	return this.q1[this.q1.length - 1];
};

var QueueToStack = new Mystack();

console.log(QueueToStack.push(10));
console.log(QueueToStack.push(30));
console.log(QueueToStack.push(50));
console.log(QueueToStack);
// setTimeout(() => {
// 	console.log(QueueToStack);
// }, 600);
console.log(QueueToStack.top());
console.log(QueueToStack.pop());
console.log(QueueToStack);
