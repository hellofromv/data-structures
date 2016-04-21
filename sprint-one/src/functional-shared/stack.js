var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.length = 0;

  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {
  size: function() {
    return this.length < 0 ? 0 : this.length;
  },
  push: function(value) {
    this[this.length] = value;
    this.length++;
  },
  pop: function() {
    var popped = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;

    return popped;
  }
};