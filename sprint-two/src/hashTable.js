
// storage = [undefined, undefined, undefined, [[steven, seagal]], undefined, undefined, undefined, undefined, undefined];

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
 	// var bucket = []

// if there's a bucket
 	if (this._storage[index] !== undefined) {

 		// loop over bucket
  for (var i = 0; i < this._storage[index].length; i++) {
 			// if bucket k === new k, then bucket v = new v
 			if (this._storage[index][i][0] === k){
 				this._storage[index][i][1] = v;
 			}
 		}

 		// push tuple to dat bucket
 		this._storage[index].push([k,v]);
 		// if no bucket
 	} else {
 		// create bucket-tuple thang
	 	this._storage[index] = [[k,v]];
 	}


};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // return this._storage[index][0][1];
  for (var i = 0; i < this._storage[index].length; i++) {
  	if (this._storage[index][i][0] === k) {
  		return this._storage[index][i][1];
  	}
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage[index].length; i++) {
  	if (this._storage[index][i][0] === k) {
  		this._storage[index].splice(i, 1);
  		break;
  	}
  }
};

    // hashTable = new HashTable();


// hashTable.insert('Steven', 'Seagal');
// expect(hashTable.retrieve('Steven')).to.equal('Seagal');

/*
 * Complexity: What is the time complexity of the above functions?
 */