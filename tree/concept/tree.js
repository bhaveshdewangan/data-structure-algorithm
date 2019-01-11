"use strict";
exports.__esModule = true;
var node_structure_1 = require("./node-structure");
var Tree = /** @class */ (function () {
    function Tree() {
        this.root = null;
        this.sortedNode = [];
    }
    Tree.prototype.insertNode = function (node, data) {
        if (node == null)
            return node = new node_structure_1.NodeStructure(data);
        if (node.element > data)
            node.leftNode = this.insertNode(node.leftNode, data);
        else
            node.rightNode = this.insertNode(node.rightNode, data);
        return node;
    };
    Tree.prototype.printInOrder = function (root) {
        if (root == null)
            return;
        this.printInOrder(root.leftNode);
        console.log('-->', root.element);
        this.sortedNode.push(root.element);
        this.printInOrder(root.rightNode);
    };
    Tree.prototype.printPreOrder = function (root) {
        if (root == null)
            return;
        console.log('-->', root.element);
        this.printPreOrder(root.leftNode);
        this.printPreOrder(root.rightNode);
    };
    Tree.prototype.printPostOrder = function (root) {
        if (root == null)
            return;
        this.printPostOrder(root.leftNode);
        this.printPostOrder(root.rightNode);
        console.log('-->', root.element);
    };
    Tree.prototype.deleteNode = function (node, key) {
        if (node == null) {
            return null;
        }
        else if (key < node.element) {
            node.leftNode = this.deleteNode(node.leftNode, key);
            return node;
        }
        else if (key > node.element) {
            node.rightNode = this.deleteNode(node.rightNode, key);
            return node;
        }
        else {
            if (node.leftNode === null && node.rightNode === null) {
                node = null;
                return node;
            }
            if (node.leftNode == null) {
                node = node.rightNode;
                return node;
            }
            if (node.rightNode == null) {
                node = node.leftNode;
                return node;
            }
            else {
                var maxNode = this.maxOfLeftChild(node.leftNode);
                this.deleteNode(node, maxNode.element);
                if (this.search(node, maxNode.element))
                    console.log('element found');
                else {
                    console.log('element not found');
                    this.printInOrder(node);
                }
                node.element = maxNode.element;
                console.log('node right left child', node.element, node.leftNode, node.rightNode);
                return node;
            }
        }
    };
    Tree.prototype.maxOfLeftChild = function (node) {
        while (node.rightNode != null) {
            node = node.rightNode;
        }
        return node;
    };
    ;
    Tree.prototype.search = function (root, data) {
        if (root == null)
            return false;
        if (data < root.element) {
            return this.search(root.leftNode, data);
        }
        else if (data > root.element) {
            return this.search(root.rightNode, data);
        }
        else {
            return true;
        }
    };
    Tree.prototype.balanceBinaryTreeConversion = function (sortedNodeArray, start, end) {
        if (start >= end)
            return null;
        var mid = (start + end) / 2;
        var rootNode = sortedNodeArray[mid];
        rootNode.leftNode = this.balanceBinaryTreeConversion(sortedNodeArray, 0, mid - 1);
        rootNode.rightNode = this.balanceBinaryTreeConversion(sortedNodeArray, mid + 1, end);
        return rootNode;
    };
    Tree.prototype.prepToBalanceBST = function (node) {
        this.printInOrder(node);
        var size = this.sortedNode.length;
        this.balanceBinaryTreeConversion(this.sortedNode, 0, size - 1);
    };
    Tree.prototype.sizeOfTree = function (node) {
        if (node == null)
            return 0;
        else {
            return (this.sizeOfTree(node.leftNode) + 1 + this.sizeOfTree(node.rightNode));
        }
    };
    Tree.prototype.depthOfTree = function (node) {
        if (node == null)
            return 0;
        else {
            var leftDepth = this.depthOfTree(node.leftNode);
            var rightDepth = this.depthOfTree(node.rightNode);
            if (leftDepth > rightDepth)
                return (leftDepth + 1);
            else
                return (rightDepth + 1);
        }
    };
    return Tree;
}());
exports.Tree = Tree;
var toDo = new Tree();
toDo.root = toDo.insertNode(toDo.root, 8);
toDo.insertNode(toDo.root, 3);
toDo.insertNode(toDo.root, 1);
toDo.insertNode(toDo.root, 6);
toDo.insertNode(toDo.root, 10);
// toDo.insertNode(toDo.root, 7);
// toDo.insertNode(toDo.root, 14);toDo.insertNode(toDo.root, 4);
// toDo.insertNode(toDo.root, 5);
//DELETE NODE
// toDo.deleteNode(toDo.root, 6)
// if(toDo.search(toDo.root, 3)){
//     console.log('FOUND');
// }
// else{
//     console.log('NOT-FOUND');
// }
//CONVERSION OF BALANCE BST
//toDo.prepToBalanceBST(toDo.root);
//COUNT THE SIZE OF TREE
var size = toDo.sizeOfTree(toDo.root);
console.log('SIZE', size);
//DEPTH OF THE TREE
var depth = toDo.depthOfTree(toDo.root);
console.log('DEPTH', depth);
