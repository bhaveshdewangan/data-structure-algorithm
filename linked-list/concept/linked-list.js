"use strict";
exports.__esModule = true;
var node_structure_1 = require("./node-structure");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.prevNode = null;
        this.callingCounter = 0;
    }
    LinkedList.prototype.addNode = function (element) {
        var node = new node_structure_1.NodeStructure(element);
        var currentNode = null;
        if (this.head == null) {
            this.head = node;
        }
        else {
            currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    };
    LinkedList.prototype.deleteNode = function () {
        var currentNode = null;
        var previousNode = null;
        if (this.head == null) {
            return true;
        }
        else {
            currentNode = this.head;
            if (!currentNode.next)
                this.head = null;
            else {
                while (currentNode.next) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = null;
                return true;
            }
        }
    };
    LinkedList.prototype.deleteNodeAtPosition = function (position) {
        var currentNode = null;
        var previousNode = null;
        if (this.head == null) {
            return true;
        }
        else {
            currentNode = this.head;
            var counter = 1;
            if (counter == position) {
                this.head = this.head.next;
            }
            do {
                if (currentNode.next) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                    counter++;
                    if (counter == position) {
                        previousNode.next = currentNode.next;
                    }
                }
            } while (currentNode.next);
            { }
            return true;
        }
    };
    LinkedList.prototype.addNodeAtPosition = function (element, position) {
        var node = new node_structure_1.NodeStructure(element);
        var currentNode = null;
        var previousNode = null;
        if (this.head == null) {
            return 0;
        }
        else {
            var counter = 1;
            currentNode = this.head;
            while (currentNode.next) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                counter++;
                if (counter == position) {
                    previousNode.next = node;
                    node.next = currentNode;
                }
            }
        }
    };
    LinkedList.prototype.displayAllNode = function () {
        var counter = 0;
        var nodeChain = '';
        var node = this.head;
        while (node) {
            nodeChain = nodeChain + node.element + '-->';
            counter++;
            node = node.next;
        }
        console.log(nodeChain);
        return counter;
    };
    //Reverse a Linked List in groups of given size | Set 1
    LinkedList.prototype.reverseNodeOfGroup = function (size) {
        var currentNode = this.head;
        var prevNode = null;
        var nextNode = null;
        var counter = 0;
        // Simple-Reverse
        // while(currentNode ){
        //     nextNode = currentNode.next;
        //     currentNode.next = prevNode;
        //     prevNode = currentNode;
        //     currentNode = nextNode;
        //     counter++;
        //}
        while (currentNode.next && counter < size) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
            counter++;
        }
        this.head.next = currentNode;
        this.head = prevNode;
    };
    LinkedList.prototype.reverseWithRecursive = function (currentNode) {
        console.log('the calling counter , value : ', ++this.callingCounter, currentNode.element);
        var currNode = currentNode;
        if (currNode.next == null) {
            this.head = currNode;
            return 0;
        }
        this.reverseWithRecursive(currNode.next);
        console.log('currNode ---> \n', currNode);
        var nextNode = currNode.next;
        // console.log('next node value', nextNode);
        nextNode.next = currNode;
        // console.log('next node  next value ', nextNode.next);
        console.log('current node ----> \n', nextNode);
        console.log('Next Node ----> \n', nextNode.next);
        currentNode.next = null;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
// var toDo = new LinkedList();
// var toDoNext = new LinkedList()
// var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for(var i=0; i<3; i++){
//     toDo.addNode(i);
//     toDoNext.addNode(i);
// }
// delete node
// toDo.deleteNode();
// delete node at position
// toDo.deleteNodeAtPosition(1);
// add node at position
// toDo.addNodeAtPosition(7,3);
// reverse node 
// toDo.reverseNodeOfGroup(5);
// toDoNext.reverseNodeOfGroup(8);
// Reverse Recursive
// toDo.reverseWithRecursive(toDo.head);
// toDo.displayAllNode();
