var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.length = 0;
  newQueue.head = 0;
  var head = 0

  // modifies the object `newQueue` to add within it the functions contained w/in `queueMethods`
    // basically, takes the contents of `queueMethods` and sticks them in `newQueue`
  // _.extend(newQueue, queueMethods);
  newQueue.size = function() {
    return newQueue.length - newQueue.head < 0 ? 0 : newQueue.length - newQueue.head;
  };

  return newQueue;
};

var queueMethods = {
  size: function() {
    return newQueue.length - newQueue.head < 0 ? 0 : newQueue.length - newQueue.head;
  },
  enqueue: function(value) {
    this[this.length] = value;
    this.length++;
  },
  dequeue: function() {
    var dequeued = this[this.head];
    delete this[this.head];
    // this.length--;
    this.head++;

    return dequeued;
  }
};
