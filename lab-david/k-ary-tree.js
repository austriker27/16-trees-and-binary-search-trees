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

  while(queue.lengthGetter() > 0){
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

  while(stack.lengthGetter() > 0){
    current = stack.pop();
    console.log(`visiting ${current.value}`);
    for(let child of current._children)
      stack.push(child);
  }
};

KAryTree.prototype.find = function(value){
  if(typeof value !== 'number')
    return null;

  let queue = new Queue();
  queue.enqueue(this);
  let current = null;

  while(queue.lengthGetter() > 0){
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

KAryTree.prototype.toString = function(str = ''){
  let queue = new Queue();
  queue.enqueue(this);
  let current = null;

  
  while(queue.lengthGetter() > 0){
    current = queue.dequeue();
    if(str === ''){
      str += JSON.stringify(current.value);
    } else {
      str += '\n' + JSON.stringify(current.value);
    }
    for (let child of current._children){
      queue.enqueue(child);
    }
  } 
  return str;
};


KAryTree.prototype.toArray = function(array = [] ){
  let stack = new Stack();
  stack.push(this);

  let current = null;

  
  while(stack.lengthGetter() > 0){
    current = stack.pop();
    array.push(current.value);
    for(let child of current._children)
      stack.push(child);
  }
  return array;
};



// one.breathFirstSearch();

module.exports = KAryTree;