// Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

// One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

var MyCircularQueue = function (k) {
	this.queue = [];
	this.size = k;
};

MyCircularQueue.prototype.enQueue = function (value) {
	if (this.size === this.queue.length) return false;
	this.queue.push(value);
	return true;
};

MyCircularQueue.prototype.deQueue = function () {
	if (this.queue.length === 0) return false;
	this.queue.shift();
	return true;
};

MyCircularQueue.prototype.Front = function () {
	if (this.queue.length === 0) return -1;
	return this.queue[0];
};

MyCircularQueue.prototype.Rear = function () {
	if (this.queue.length === 0) return -1;
	return this.queue[this.queue.length - 1];
};

MyCircularQueue.prototype.isEmpty = function () {
	return this.queue.length === 0;
};

MyCircularQueue.prototype.isFull = function () {
	return this.size === this.queue.length;
};

MyCircularQueue.prototype.print = function () {
	let ringStr = "";
	for (let i = 0; i < this.queue.length; i++) {
		ringStr += this.queue[i] + ", ";
	}
	return ringStr;
};

var ringQueue = new MyCircularQueue(3);

console.log("isEmpty -", ringQueue.isEmpty());
console.log("enQueue -", ringQueue.enQueue(10));
console.log("enQueue -", ringQueue.enQueue(30));
console.log("enQueue -", ringQueue.enQueue(60));
console.log("enQueue -", ringQueue.enQueue(90));
console.log("isFull -", ringQueue.isFull());
console.log("isEmpty -", ringQueue.isEmpty());
console.log("print -", ringQueue.print());
console.log("deQueue -", ringQueue.deQueue());
console.log("print -", ringQueue.print());
console.log("isFull -", ringQueue.isFull());
console.log("Front -", ringQueue.Front());
console.log("Rear -", ringQueue.Rear());
