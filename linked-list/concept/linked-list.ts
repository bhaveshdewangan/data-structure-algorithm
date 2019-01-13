import { NodeStructure } from './node-structure';
export class LinkedList {
    public head:NodeStructure = null; public tail:any; public value:any; public next:any; public prev:any; 
    public prevNode = null;
    public size:number;
    public callingCounter: number = 0;
    constructor() {}
    
    addNode(element) {
        let node = new NodeStructure(element)
        let currentNode = null;

        if(this.head == null){
            this.head = node;
        }
        else{
            currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = node;
        }
    }

    deleteNode(){
        let currentNode = null;
        let previousNode = null;
        if(this.head == null){
            return true;
        }
        else{
            currentNode = this.head;
            if(!currentNode.next)
                this.head = null;
            else{
                while(currentNode.next){
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = null;
                return true;
            }
        }
    }

    deleteNodeAtPosition(position: number){
        let currentNode = null;
        let previousNode = null;
        if(this.head == null){
            return true;
        }
        else{
            currentNode = this.head;
            let counter = 1;
            if(counter==position){
                this.head = this.head.next
            }
            do{
                if(currentNode.next){
                    previousNode = currentNode
                    currentNode = currentNode.next;
                    counter++;
                    if(counter == position){
                        previousNode.next = currentNode.next
                    }
                }
            }
            while(currentNode.next){ }
            return true;
        }
    }

    addNodeAtPosition(element:any,position: number) {
        let node = new NodeStructure(element)
        let currentNode = null;
        let previousNode = null
        
        if(this.head == null){
            return 0;
        }
        else{
            let counter = 1;
            currentNode = this.head;
            while(currentNode.next){
                previousNode = currentNode;
                currentNode = currentNode.next;
                counter++;
                if(counter == position){
                    previousNode.next = node;
                    node.next = currentNode;
                }
            }
        }
    }

    displayAllNode(): Number {
        let counter = 0; let nodeChain = ''
        let node = this.head;
        
        while(node){
            nodeChain = nodeChain + node.element + '-->';
            counter++;
            node = node.next;
        }
        console.log(nodeChain);
        return counter;
    }

    //Reverse a Linked List in groups of given size | Set 1
    reverseNodeOfGroup(size:number){
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;
        let counter = 0;

        // Simple-Reverse
        // while(currentNode ){
        //     nextNode = currentNode.next;
        //     currentNode.next = prevNode;
        //     prevNode = currentNode;
        //     currentNode = nextNode;
        //     counter++;
        //}

        while(currentNode.next && counter<size){
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
            counter++;
        }
        this.head.next = currentNode;
        this.head = prevNode;
    }

    reverseWithRecursive(currentNode: NodeStructure){
        console.log('the calling counter , value : ', ++this.callingCounter , currentNode.element);
        let currNode = currentNode;
        if(currNode.next ==  null)
        {
            this.head = currNode;
            return 0;
        }
        this.reverseWithRecursive(currNode.next);
        console.log('currNode ---> \n', currNode);
        let nextNode = currNode.next;
        // console.log('next node value', nextNode);
        nextNode.next = currNode;
        // console.log('next node  next value ', nextNode.next);
        console.log('current node ----> \n', nextNode );
        console.log('Next Node ----> \n', nextNode.next);
        currentNode.next = null;
        
    }
}

var toDo = new LinkedList();
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




