'use strict';

class Stack{
  constructor(){
    this._data = [];
  }

  push(value){
    this._data.push(value);
  }

  pop(){
    return this._data.pop();
  }

  lengthGetter(){
    return this._data.length;
  }
}

module.exports = Stack;