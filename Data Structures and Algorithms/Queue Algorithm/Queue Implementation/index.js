class Queue {
	constructor() {
		this.queue = [];
	}

	enqueue(element) {
		this.queue.push(element);
	}

	dequeue() {
		if (this.size() <= 0) {
			return "No items in a queue to remove";
		}

		return this.queue.shift();
	}

	front() {
		if (this.size() <= 0) {
			return "No items in a queue to check for first element";
		}

		return this.queue[0];
	}

	size() {
		return this.queue.length;
	}

	printQueue() {
		let queueStr = "";
		for (let i = 0; i < this.size(); i++) {
			queueStr += this.queue[i] + ",";
		}
		return queueStr;
	}
}

const myQueue = new Queue();

console.log(myQueue.enqueue(10));
console.log(myQueue.enqueue(30));
console.log(myQueue.enqueue(50));
console.log(myQueue.printQueue());
console.log(myQueue.front());
console.log(myQueue.dequeue());
console.log(myQueue.printQueue());
