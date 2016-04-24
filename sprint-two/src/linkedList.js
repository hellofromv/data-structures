var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    var removed = this.head;
    this.head = this.tail;

    return removed.value;
  }; 

  list.contains = function(target) {
    var wasFound = false;

    var search = function(obj) {
      if (obj.value === target) {
        wasFound = true;
      }
      if (obj.next === null) {
        return;
      }
      else {
        search(obj.next);
      }
    };
    search(this.head);

    return wasFound;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
