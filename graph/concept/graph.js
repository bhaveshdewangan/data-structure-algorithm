"use strict";
exports.__esModule = true;
var node_structure_1 = require("./node-structure");
var Graph = /** @class */ (function () {
    function Graph() {
        this.edgeDirection = '';
        this.edgeDirection = '';
        this.node = new Map();
    }
    Graph.prototype.addEdge = function (source, destination) {
        var sourceNode = this.addVertex(source);
        var destinationNode = this.addVertex(destination);
        sourceNode.adjacents.push(destinationNode);
        if (this.edgeDirection === Graph.UNDIRECTED) {
            destinationNode.adjacents.push(sourceNode);
        }
        return [sourceNode, destinationNode];
    };
    Graph.prototype.addVertex = function (value) {
        if (this.node.has(value)) {
            return this.node.get(value);
        }
        else {
            var vertex = new node_structure_1.NodeStructure(value);
            this.node.set(value, vertex);
            return vertex;
        }
    };
    Graph.prototype.removeVertex = function (value) {
        var current = this.node.get(value);
        if (current) {
            for (var _i = 0, _a = this.node.values(); _i < _a.length; _i++) {
                var node = _a[_i];
                node.removeAdjacent(current);
            }
        }
        return this.node["delete"](value);
    };
    Graph.prototype.removeEdge = function (source, destination) {
        var sourceNode = this.node.get(source);
        var destinationNode = this.node.get(destination);
        if (sourceNode && destinationNode) {
            source.removeAdjacent(destinationNode);
            if (this.edgeDirection === Graph.UNDIRECTED) {
                destinationNode.removeAdjacent(source);
            }
        }
        return [sourceNode, destinationNode];
    };
    return Graph;
}());
exports.Graph = Graph;
Graph.DIRECTED = Symbol('directed graph');
Graph.UNDIRECTED = Symbol('undirected graph');
