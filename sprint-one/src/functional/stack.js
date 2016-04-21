var Stack = function() {

  // Use an object with numeric keys to store values
  var someInstance = {};
  var length = 0;
 
  // Implement the methods below
  someInstance.push = function(value) {
  someInstance[length] = value;
  length++
  };

  someInstance.pop = function() {
    var popped = someInstance[length-1];
    delete someInstance[length-1];
    length--;

    return popped;
  };
 
  someInstance.size = function() {
    return length < 0 ? 0 : length;
  };
 
  return someInstance;
};