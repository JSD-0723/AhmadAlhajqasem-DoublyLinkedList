const Node = require('./Node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }


  printData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }


  pop() {
    if (!this.tail) {
      // If the list is empty, return null or handle the error as needed
      return null;
    }

    const removedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
     
      this.tail = removedTail.prev;
      this.tail.next = null;
    }

    this.size--;

    return removedTail.data;
  }


  shift() {
    if (!this.head) {
      // If the list is empty, return null or handle the error as needed
      return null;
    }

    const removedHead = this.head;

    if (this.head === this.tail) {
     
      this.head = null;
      this.tail = null;
    } else {
      
      this.head = removedHead.next;
      this.head.prev = null;
    }

    this.size--;

    return removedHead.data;
  }


  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      // If the list is empty, set both head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, update the head and its previous node
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }


  get(index) {
    if (index < 0 || index >= this.size) {
      // Handle the case where the index is out of bounds
      return undefined; // You can also choose to throw an error
    }

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      current = current.next;
      currentIndex++;
    }

    return current.data;
  }


  set(index, val) {
    if (index < 0 || index >= this.size) {
      // Handle the case where the index is out of bounds
      return false; // You can also choose to throw an error
    }

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      current = current.next;
      currentIndex++;
    }

    current.data = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.size) {
      // Handle the case where the index is out of bounds
      return false; // You can also choose to throw an error
    }

    const newNode = new Node(val);

    if (index === 0) {
      // Insert at the beginning (update head)
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else if (index === this.size) {
      // Insert at the end (update tail)
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      // Insert at a specific index
      let current = this.head;
      let currentIndex = 0;

      while (currentIndex !== index) {
        current = current.next;
        currentIndex++;
      }

      newNode.next = current;
      newNode.prev = current.prev;
      current.prev.next = newNode;
      current.prev = newNode;
    }

    this.size++;
    return true;
  }


  remove(index) {
    if (index < 0 || index >= this.size) {
      // Handle the case where the index is out of bounds
      return false; // You can also choose to throw an error
    }

    if (index === 0) {
      // Remove the first node (update head)
      if (this.size === 1) {
        // If there's only one node, set both head and tail to null
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    } else if (index === this.size - 1) {
      // Remove the last node (update tail)
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      // Remove a node at a specific index
      let current = this.head;
      let currentIndex = 0;

      while (currentIndex !== index) {
        current = current.next;
        currentIndex++;
      }

      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    this.size--;
    return true;
  }


}

module.exports = DoublyLinkedList;
