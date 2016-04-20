var Stack = function() {
  var someInstance = {};
 
  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
 
  // Implement the methods below
  someInstance.push = function(value) {
  storage[length] = value;
  length++
  };

  someInstance.pop = function() {
    var popped = storage[length-1];
    delete storage[length-1];
    length--;

    return popped;
  };
 
  someInstance.size = function() {
    return length < 0 ? 0 : length;
  };
 
  return someInstance;
};