var BinarySearchTree = function(value) {
	var BST = Object.create(BinarySearchTree.methods);
	BST.value = value;
	BST.left = null;
	BST.right = null;

	return BST;
};

BinarySearchTree.methods = {
	insert: function(value) {
    if (value > this.value){
    	if (!this.right) {
    		// assign this new node to this.right
	    	this.right = BinarySearchTree(value);
  		} else {
  			// if it is there, recurse
  			this.right.insert(value);
  		}
    } else if (value < this.value) {
    	if (!this.left) {
	      this.left = BinarySearchTree(value);
    	} else {
    		this.left.insert(value);
    	}
    }
	},
	contains: function(value) {
		// if this.right.value === value || this.left.value === || this.value === value, return true
		if (this.value === value) {
			return true;
		}
		// else if value < this.value, recurse on this.left
		else if (value < this.value && this.left !== null) {
			return this.left.contains(value);
		}
		// else if value > this.value, recurse on this.right
		else if (value > this.value && this.right !== null) {
			return this.right.contains(value);
		}
		// else return false
		else {
			return false;
		}
	},
	depthFirstLog: function(callback) {
		// run function on this.value
		callback(this.value);
    // if callback.left !== null && !== undefined, run callback on this.left
    if (this.left !== null && this.left !== undefined) {
    	this.left.depthFirstLog(callback);
    }
    // if callback.right !== null && !== undefined, run callback on this.right
    if (this.right !== null && this.left !== undefined) {
    	this.right.depthFirstLog(callback);
    }
	}

};

		// if this.right.value === value || this.left.value === || this.value === value, return true
		// else if value < this.value, recurse on this.left
		// else if value > this.value, recurse on this.right
		// else return false




/*
 * Complexity: What is the time complexity of the above functions?
 */



// var tree = BinarySearchTree(2);

// {
// 	value: 2,
// 	left: null,
// 	right: null 
// }