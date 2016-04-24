// vertex is an intersection
// edge is a one-way street

// ------------------------
// Instantiate a new graph
var Graph = function() {
	this.collection = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.collection[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return this.collection[node] !== undefined ? true : false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	delete this.collection[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	return _.contains(this.collection[fromNode], toNode);
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.collection[fromNode].push(toNode);
	this.collection[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	var removeFrom = _.indexOf(toNode), removeTo = _.indexOf(fromNode);
	this.collection[fromNode].splice(removeFrom, 1);
	this.collection[toNode].splice(removeTo, 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for (var key in this.collection) {
		cb(key);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */