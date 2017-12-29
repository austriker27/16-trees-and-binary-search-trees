'use strict';

const KAryTree = require('../k-ary-tree');

const KAryTreeMaker = () => {
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

  return one;
};

// variables setup for what to expect

const expectedTreeString = `1\n2\n3\n4\n5\n6\n7\n8`;
const expectedTreeArray = [1,4,3,7,6,8,5,2];


describe('KAry Tree tests', () => {
  describe('find prototype testing', () => {
    test('This should return the found node', () => {
      let tree = KAryTreeMaker();
      expect(tree.find(7)).toEqual({_children : [], value : 7});
      expect(tree.find(8)).toEqual({_children : [], value : 8});
    });

    test('this should return a type error if you search for a non-number', () => {
      let tree = KAryTreeMaker();
      expect(tree.find('hi')).toBeNull();
    });
  });


  describe('create string prototype testing', () => {
    test('this should create a string of the node values with new lines with a normal tree', () => {
      let tree = KAryTreeMaker();
      expect(tree.toString()).toEqual(expectedTreeString);
    });
  });



  describe('create array prototype testing', () => {
    test('this should create an array of the node values', () => {
      let tree = KAryTreeMaker();
      expect(tree.toArray()).toEqual(expectedTreeArray);
    });
  });


});