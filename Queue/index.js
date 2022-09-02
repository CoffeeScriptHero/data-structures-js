class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.unshift(value);
    return this.queue;
  }

  dequeue() {
    return this.queue.pop();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    return this.queue.slice(-1)[0];
  }

  print() {
    console.log(this.queue.join(" -> "));
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
queue.dequeue();
queue.print();
