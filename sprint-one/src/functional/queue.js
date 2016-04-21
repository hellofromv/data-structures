var Queue = function() {

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var head = 0;

  // Implement the methods below

  storage.enqueue = function(value) {
    storage[length] = value;
    length++;
  };

  storage.dequeue = function() {
    var dequeued = storage[head];
    delete storage[head];
    // length--;
    head++;

    return dequeued;
  };

  storage.size = function() {
    return length - head < 0 ? 0 : length - head;

  };

  return storage;
};
