import { NodeStructure } from './node-structure';
export class LinkedList {
    public head: NodeStructure = null; public tail: any; public value: any; public next: any; public prev: any;
    public prevNode = null;
    public size: number;
    public callingCounter: number = 0;
    constructor() { }

    addNode(element) {
        let node = new NodeStructure(element)
        let currentNode = null;

        if (this.head == null) {
            this.head = node;
        }
        else {
            currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node;
        }
    }

    deleteNode() {
        let currentNode = null;
        let previousNode = null;
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
    }

    deleteNodeAtPosition(position: number) {
        let currentNode = null;
        let previousNode = null;
        if (this.head == null) {
            return true;
        }
        else {
            currentNode = this.head;
            let counter = 1;
            if (counter == position) {
                this.head = this.head.next
            }
            do {
                if (currentNode.next) {
                    previousNode = currentNode
                    currentNode = currentNode.next;
                    counter++;
                    if (counter == position) {
                        previousNode.next = currentNode.next
                    }
                }
            }
            while (currentNode.next) { }
            return true;
        }
    }

    addNodeAtPosition(element: any, position: number) {
        let node = new NodeStructure(element)
        let currentNode = null;
        let previousNode = null

        if (this.head == null) {
            return 0;
        }
        else {
            let counter = 1;
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
    }

    displayAllNode(): Number {
        let counter = 0; let nodeChain = ''
        let node = this.head;

        while (node) {
            nodeChain = nodeChain + node.element + '-->';
            counter++;
            node = node.next;
        }
        console.log(nodeChain);
        return counter;
    }

    //Reverse a Linked List in groups of given size | Set 1
    reverseNodeOfGroup(size: number) {
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;
        let counter = 0;
        while (currentNode.next && counter < size) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
            counter++;
        }
        this.head.next = currentNode;
        this.head = prevNode;
    }

    reverseWithRecursive(node: NodeStructure) {
        let currentNode = node;
        if (currentNode.next == null) {
            this.head = currentNode;
            return 0;
        }
        this.reverseWithRecursive(currentNode.next);
        let nextNode = currentNode.next;
        nextNode.next = currentNode;
        currentNode.next = null;
    }

    simpleReverse(head) {
        let currentNode: NodeStructure = JSON.parse(JSON.stringify(head));;
        let prevNode: NodeStructure = null;
        let nextNode: NodeStructure = null;
        if (head == null || head.next == null) {
            return head;
        } else {
            while (currentNode) {
                nextNode = currentNode.next
                currentNode.next = prevNode
                prevNode = currentNode;
                currentNode = nextNode;
            }
            this.head = prevNode
            head = prevNode;
        }
        return head
    }

    // Reverse a sublist of linked list
    reverseSublistOfLinkedList(startIndex: number, endIndex: number, head: NodeStructure) {
        let headCopy = head;
        if (!head) {
            return 0;
        }
        let totleElement = 0;
        while (headCopy) {
            headCopy = headCopy.next;
            totleElement++;
        }
        if (totleElement >= endIndex) {
            let nextNode = null, prevNode = null, currentNode = head;
            let startIndexNode = null
            let start = 1
            while (currentNode && start <= endIndex) {
                if (start >= startIndex && start <= endIndex) {
                    nextNode = currentNode.next;
                    currentNode.next = prevNode;
                    prevNode = currentNode;
                    currentNode = nextNode;
                } else {
                    startIndexNode = currentNode;
                    currentNode = currentNode.next
                }
                start++;
            }
            console.log("startIndexNode ", startIndexNode);
            console.log("CURRENT", currentNode);
            console.log("PREVIOUS", prevNode);
            console.log("NEXT", nextNode);

            if (startIndexNode) {
                startIndexNode.next = prevNode;
            } else {
                startIndexNode = head = prevNode;
            }

            if (currentNode) {
                while (startIndexNode.next) {
                    startIndexNode = startIndexNode.next;
                }
                startIndexNode.next = currentNode;
            }

        }
    }

    checkPalindrom(node) {
        let nodeCopy = this.simpleReverse(JSON.parse(JSON.stringify(node)));
        while (node && nodeCopy) {
            if (node.element !== nodeCopy.element) {
                console.log("NOT PALINDROM");
                return false;
            }
            node = node.next;
            nodeCopy = nodeCopy.next;
        }
        console.log("ITS A PALINDROM");
        return true;
    }
}

// var toDo = new LinkedList();
// for (var i = 0; i < 3; i++) {
//     toDo.addNode(i);
// }
// toDo.simpleReverse(toDo.head)
// toDo.reverseWithRecursive(toDo.head)
// toDo.displayAllNode();

// delete node
// toDo.deleteNode();

// delete node at position
// toDo.deleteNodeAtPosition(1);

// add node at position
// toDo.addNodeAtPosition(7,3);

// reverse node 
// toDo.reverseNodeOfGroup(5);

// Reverse Recursive
// toDo.reverseWithRecursive(toDo.head);
// toDo.displayAllNode();






