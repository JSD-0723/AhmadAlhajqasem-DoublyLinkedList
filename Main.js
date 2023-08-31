const DoublyLinkedList = require('./DoublyLinkedList')
let myList = new DoublyLinkedList();


myList.push(1);
myList.push(2);
myList.push(3);


myList.unshift(0);


myList.set(2, 4);


myList.insert(2, 2.5);


myList.remove(1);


console.log('Node Data:');
myList.printData();
