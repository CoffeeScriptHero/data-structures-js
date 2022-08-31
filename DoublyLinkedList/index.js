class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value = null) {
    this.head = value !== null ? new Node(value) : null;
    this.length = value !== null ? 1 : 0;
    this.tail = this.head;
  }

  append(value) {
    let node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  prepend(value) {
    let node = new Node(value);

    if (this.length === 0) {
      this.append(value);
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }

    this.length++;
    return this;
  }

  insert(index, value) {
    if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
      console.log("Index out of bound");
      return this;
    }

    if (index === 0) {
      this.prepend(value);
      return this;
    }

    if (index === this.length) {
      this.append(value);
      return this;
    }

    let node = new Node(value);
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    let previousNode = current.previous;

    node.next = current;
    node.previous = previousNode;
    current.previous = node;
    previousNode.next = node;
    current = node;

    this.length++;
    return this;
  }

  removeNode(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        let nextNode = current.next;
        let prevNode = current.previous;

        // if there is only one element in the list
        if (this.length === 1) {
          this.head = null;
          this.tail = this.head;
          this.length--;
          return this;
        }

        if (prevNode === null) {
          this.head = nextNode;
          this.head.previous = null;
          this.length--;
          return this;
        }

        if (nextNode === null) {
          this.tail = prevNode;
          this.tail.next = null;
          this.length--;
          return this;
        }

        nextNode.previous = prevNode;
        prevNode.next = nextNode;
        this.length--;
        return this;
      }

      current = current.next;
    }

    return -1;
  }

  removeByIndex(index) {
    if (!Number.isInteger(index) || index < 0 || index > this.length - 1) {
      console.log("Index out of bound");
      return this;
    }

    if (index === 0) {
      this.head = this.head.next;
      if (this.head) this.head.previous = null;

      this.length--;
      return this;
    }

    if (index === this.length - 1) {
      this.tail = this.tail.previous;
      if (this.tail) this.tail.next = null;

      this.length--;
      return this;
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    let previousNode = current.previous;
    let nextNode = current.next;

    previousNode.next = nextNode;
    nextNode.previous = previousNode;
    this.length--;
    return this;
  }

  print() {
    let current = this.head;
    let str = "";

    while (current !== null) {
      str += current.value + (current.next ? " <--> " : "");
      current = current.next;
    }

    console.log(str);
    return this;
  }

  indexOf(value) {
    let counter = 0;
    let current = this.head;

    while (current !== null) {
      if (current.value === value) return counter;
      counter++;
      current = current.next;
    }

    return -1;
  }

  isEmpty() {
    return this.length === 0;
  }

  sizeof() {
    return this.length;
  }
}

// let list = new DoublyLinkedList(0);
let list = new DoublyLinkedList(0);
list.print();
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.print();
list.insert(1, 5);
list.print();
list.removeByIndex(4);
list.print();
list.removeNode(3);
list.removeNode(5);
list.removeNode(2);
list.removeNode(1);
list.print();
list.append(5);
list.print();
list.removeByIndex(0);
list.append("Hello");
list.append("world");
console.log(list.sizeof());
list.print();
let index = list.indexOf("Hello");
list.removeByIndex(index);
list.print();
