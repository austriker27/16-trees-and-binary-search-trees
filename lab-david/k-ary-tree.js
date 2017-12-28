'use strict';

const Queue = require('./lib/queue');
const Stack = require('./lib/stack');


const KAryTree = function(value) {
  this.value = value;
  this._children = [];
};

KAryTree.prototype.appendChild = function(tree){
  if(!(tree instanceof KAryTree))
    throw new TypeError('must insert a k-ary tree');

  this._children.push(tree);
};

KAryTree.prototype.breathFirstSearch = function(){
  let queue = new Queue();
  queue.enqueue(this);

  let current = null;

  while(queue.getLength() > 0){
    current = queue.dequeue();

    console.log(`visiting ${current.value}`);

    for(let child of current._children)
      queue.enqueue(child);
  }
};

KAryTree.prototype.depthFirstSearch = function(){
  let stack = new Stack();
  stack.push(this);
  let current = null;

  while(stack.getLength() > 0){
    current = stack.pop();
    console.log(`visiting ${current.value}`);
    for(let child of current._children)
      stack.push(child);
  }
};

KAryTree.prototype.find = function(value){
  if(typeof value !== 'number')
    throw new TypeError('Value is not a number');

  let queue = new Queue();
  queue.enqueue(this);
  let current = null;

  while(queue.getLength() > 0){
    current = queue.dequeue();
    if(current.value === value){
      return current;
    }

    for(let child of current._children){
      queue.enqueue(child);
    }
  }
  return null;
};

KAryTree.prototype.createString = function(str = ''){
  let queue = new Queue();
  queue.enqueue(this);
  let current = null;

  
  while(queue.getLength() > 0){
    current = queue.dequeue();
    if(str === ''){
      str += JSON.stringifiy(current.value);
    } else {
      str += '/n' + JSON.stringify(current.value);
    }
    for (let child of current._children){
      queue.enqueue(child);
    }
  } 
  return str;
};


KAryTree.prototype.createArray = function(array = [] ){
  let stack = new Stack();
  stack.push(this);

  let current = null;

  
  while(stack.getLength() > 0){
    current = stack.pop();
    array.push(current.value);
    for(let child of current._children)
      stack.push(child);
  }
  return array;
};




let one = new KAryTree(1);
let two = new KAryTree(2);
let three = new KAryTree(3);
let four = new KAryTree(4);
let five = new KAryTree(5);
let six = new KAryTree(6);
let seven = new KAryTree(7);
let eight = new KAryTree(8);

one.appendChild(two);
one.appendChild(three);
one.appendChild(four);


three.appendChild(five);
three.appendChild(six);
three.appendChild(seven);

six.appendChild(eight);

one.breathFirstSearch();

module.exports = KAryTree;