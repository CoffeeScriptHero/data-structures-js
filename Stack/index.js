class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack.slice(-1)[0];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }

  print() {
    let stackCopy = [...this.stack];
    console.log("―――――");
    stackCopy.reverse().forEach((v) => console.log(`| ${v} |`));
    console.log("―――――");
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(`Stack size: ${stack.size()}`);
stack.print();
stack.pop();
stack.print();
stack.pop();
console.log(`Stack is empty: ${stack.isEmpty()}`);
stack.print();
console.log(`Stack upper value: ${stack.peek()}`);
