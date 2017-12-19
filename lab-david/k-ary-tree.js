'use strict';

const Queue = require('./lib/queue');

const KAryTree = function(value) {
  this.value = value;
  this._children = [];
};