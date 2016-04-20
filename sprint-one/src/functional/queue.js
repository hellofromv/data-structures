var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0,
    head = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[length] = value;
    length++;
    return 0
  };

  someInstance.dequeue = function() {
    var dequeued = storage[head];
    delete storage[head];
    // length--;
    head++;

    return dequeued;
  };

  someInstance.size = function() {
    return length - head < 0 ? 0 : length - head;

  };

  return someInstance;
};
