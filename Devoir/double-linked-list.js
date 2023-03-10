'use  strict';

// todo: Implement a doubly linked list on classes

class DoubleList {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(date) {
    const prev = this.last;
    const element = {prev, date}; 
    if(this.length === 0) this.first = element;
    else this.next = element;
    this.last = element;
    this.length++;
    return element;
  }

  pop(date) {
    if(this.length === 0) return null;
    const element = this.last;
    this.last = element.prev;
    element.prev = null;
    element.next = null;
    this.length --;
    return element.date;
  }
}


const obj1 = {name: 'first'};
const obj2 = {name: 'second'};
const obj3 = {name: 'third'};

const doubleList = new DoubleList();
doubleList.push(obj1);
doubleList.push(obj2);
doubleList.push(obj3);

console.dir(doubleList.last, {depth: 3});
console.dir(doubleList.pop())
console.dir(doubleList.pop())
console.dir(doubleList.pop())
console.dir(doubleList.pop())


doubleList.push({name: 'bir'});
doubleList.push({name: 'eki'});
console.dir(doubleList.pop());
doubleList.push({name: 'uch'});
console.dir(doubleList.pop());
console.dir(doubleList.pop());
console.dir(doubleList.pop());




