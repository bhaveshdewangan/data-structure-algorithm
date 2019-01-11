"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var tree_1 = require("../concept/tree");
var Problems = /** @class */ (function (_super) {
    __extends(Problems, _super);
    function Problems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Problems.prototype.mirror = function (node) {
        if (node == null)
            return null;
        else {
            this.mirror(node.leftNode);
            this.mirror(node.rightNode);
            var temp = void 0;
            temp = node.leftNode;
            node.leftNode = node.rightNode;
            node.rightNode = temp;
        }
    };
    Problems.prototype.lowestCommonAncestor = function (node, n1, n2) {
        while (node != null) {
            if (node.element > n1 && node.element > n2) {
                node = node.leftNode;
            }
            else if (node.element < n1 && node.element < n2) {
                node = node.rightNode;
            }
            else {
                break;
            }
        }
        return node;
    };
    Problems.prototype.reverseAlternateLevel = function (node) {
        var nodeBag = [];
        this.collectAlternateNodes(node, nodeBag, 0, 0);
        this.reverseAlternateNodes(nodeBag);
        this.modifyTree(node, nodeBag, 0, 0);
    };
    Problems.prototype.collectAlternateNodes = function (node, nodeBag, index, counter) {
        if (node == null)
            return null;
        this.collectAlternateNodes(node.leftNode, nodeBag, index, counter + 1);
        if (counter % 2 != 0) {
            nodeBag.push(node.element);
        }
        this.collectAlternateNodes(node.rightNode, nodeBag, index, counter + 1);
    };
    Problems.prototype.reverseAlternateNodes = function (nodeBag) {
        var start = 0;
        var end = nodeBag.length - 1;
        while (end > start) {
            var temp = nodeBag[start];
            nodeBag[start] = nodeBag[end];
            nodeBag[end] = temp;
            start++;
            end--;
        }
        console.log(nodeBag);
    };
    Problems.prototype.modifyTree = function (node, nodeBag, index, counter) {
        this._index = index;
        if (node == null)
            return null;
        this.modifyTree(node.leftNode, nodeBag, this._index, counter + 1);
        if (counter % 2 != 0) {
            console.log('value', node.element, nodeBag[this._index], this._index);
            node.element = nodeBag[this._index];
            this._index = this._index + 1;
        }
        this.modifyTree(node.rightNode, nodeBag, this._index, counter + 1);
    };
    return Problems;
}(tree_1.Tree));
exports.Problems = Problems;
var toDo = new Problems();
toDo.root = toDo.insertNode(toDo.root, 8);
toDo.insertNode(toDo.root, 3);
toDo.insertNode(toDo.root, 1);
toDo.insertNode(toDo.root, 6);
toDo.insertNode(toDo.root, 10);
toDo.insertNode(toDo.root, 9);
toDo.insertNode(toDo.root, 12);
//Mirror of BST
// toDo.mirror(toDo.root);
// toDo.printInOrder(toDo.root);
//Find Lowest Common Ancestor
// console.log('LCA1',toDo.lowestCommonAncestor(toDo.root, 1, 6));
// console.log('LCA2',toDo.lowestCommonAncestor(toDo.root, 8, 10));
// console.log('LCA3',toDo.lowestCommonAncestor(toDo.root, 3, 6));
//Make odd height node in reverse order
// toDo.printInOrder(toDo.root);
toDo.reverseAlternateLevel(toDo.root);
toDo.printInOrder(toDo.root);
