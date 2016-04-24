var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);

  newQueue.length = 0;
  newQueue.head = 0;

  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.length] = value;
    this.length++;
  },
  dequeue: function() {
    var dequeued = this[this.head];
    delete this[this.head];
    this.head++;

    return dequeued;
  },
  size: function() {
    return this.length - this.head < 0 ? 0 : this.length - this.head;
  }
};


