//Implement a first-in-first-out (FIFO) stack using only two stacks. The implemented queue should support all the functions of a normal queue (enqueue, dequeue, front, and empty).

var MyQueue = function () {
	this.stack1 = [];
	this.stack2 = [];
};

MyQueue.prototype.enqueue = function (x) {
	this.stack1.push(x);
};

MyQueue.prototype.dequeue = function (x) {
	if (this.stack2.length === 0) {
		while (this.stack1.length > 0) {
			this.stack2.push(this.stack1.pop()); //Reverse each elements in Stack1 and Pushing into Stack2
		}
	}
	return this.stack2.pop();
};

MyQueue.prototype.front = function () {
	if (this.stack2.length === 0) {
		while (this.stack1.length > 0) {
			this.stack2.push(this.stack1.pop());
		}
	}
	return this.stack2[this.stack2.length - 1];
};

MyQueue.prototype.empty = function () {
	return this.stack1.length === 0 && this.stack2.length == 0;
};

var StackToQueue = new MyQueue();

console.log("enqueue -", StackToQueue.enqueue(10));
console.log("enqueue -", StackToQueue.enqueue(30));
console.log("enqueue -", StackToQueue.enqueue(50));
console.log(StackToQueue);
console.log("dequeue -", StackToQueue.dequeue());
console.log("front -", StackToQueue.front());
console.log("empty -", StackToQueue.empty());
console.log(StackToQueue);

MyQueue.prototype.dequeue = function (x) {
	if (this.stack1.length === 0) {
		this.stack1.shift();
	}
};
