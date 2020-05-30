"use strict";
exports.__esModule = true;
var NodeStructure = /** @class */ (function () {
    function NodeStructure(element) {
        this.element = element;
        this.adjacents = [];
    }
    NodeStructure.prototype.addAdjacent = function (node) {
        this.adjacents.push(node);
    };
    NodeStructure.prototype.removeAdjacent = function (node) {
        var index = this.adjacents.indexOf(node);
        if (index > -1) {
            this.adjacents.splice(index, 1);
            return node;
        }
    };
    NodeStructure.prototype.getAdjacent = function () {
        return this.adjacents;
    };
    NodeStructure.prototype.isAdjacent = function (node) {
        return this.adjacents.indexOf(node) > -1;
    };
    return NodeStructure;
}());
exports.NodeStructure = NodeStructure;
