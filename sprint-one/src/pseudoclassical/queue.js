var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.head = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this[this.head];
  delete this[this.head];
  this.head++;

  return dequeued;
};

Queue.prototype.size = function() {
  return this.length - this.head < 0 ? 0 : this.length - this.head;
};