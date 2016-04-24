var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
	var wasFound = false;

	var search = function(obj) {
		if (obj.value === target) {
			wasFound = true;
		}
		else {
			for (var i = 0; i < obj.children.length; i++) {
				search(obj.children[i]);
			}
		}
	}; 

	search(this);

	return wasFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// newTree = {
// 	value: ,
// 	children: [
// 		{ value: , children: [
// 			{value: , children: []}] },
// 		{ value: , children: [] }
// 	]
// }



