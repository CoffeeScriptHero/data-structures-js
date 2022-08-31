class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);
    let current = this.head;

    this.size++;

    if (current == null) {
      this.head = node;
      return;
    }

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  insert(index, element) {
    if (index < 0 || index > this.size) {
      console.log("Provide a valid index");
    } else {
      let node = new Node(element);
      let curr = this.head;
      let prev;

      this.size++;

      if (index == 0) {
        node.next = this.head;
        this.head = node;
        return;
      }
      let counter = 0;

      while (counter < index) {
        counter++;
        prev = curr;
        curr = curr.next;
      }

      node.next = curr;
      prev.next = node;
    }
  }

  removeByIndex(index) {
    if (index < 0 || index >= this.size) {
      console.log("Provide a valid index");
    } else {
      let counter = 0;
      let curr, prev;

      curr = this.head;
      prev = curr;

      this.size--;

      if (index == 0) {
        this.head = curr.next;
        return;
      }

      while (counter < index) {
        counter++;
        prev = curr;
        curr = curr.next;
      }

      prev.next = curr.next;
      return curr.element;
    }
  }

  removeByElement(element) {
    let curr = this.head;
    let prev = null;

    while (curr !== null) {
      if (curr.element === element) {
        if (prev === null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.size--;
        return curr.element;
      }
      prev = curr;
      curr = curr.next;
    }
    return -1;
  }

  indexOf(element) {
    let counter = 0;
    let curr = this.head;

    while (curr !== null) {
      if (curr.element === element) return counter;
      counter++;
      curr = curr.next;
    }

    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  sizeof() {
    return this.size;
  }

  print() {
    let curr = this.head;
    let str = "";

    while (curr !== null) {
      str += curr.element + "->";
      curr = curr.next;
    }

    console.log(str.substring(0, str.length - 2));
  }
}

let list = new LinkedList();

list.print();
list.add(1);
list.add(5);
list.insert(1, 10);
list.insert(1, 20);
list.removeByElement(20);
console.log(list.sizeof());
list.add("hello");
list.print();
