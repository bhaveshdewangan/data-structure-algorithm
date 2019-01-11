import { NodeStructure } from './node-structure';

export class Tree {
    public root: NodeStructure = null;
    public sortedNode = [];
    constructor(){}

    insertNode(node: NodeStructure, data){
        if(node == null)
            return node = new NodeStructure(data);
        if(node.element > data)
            node.leftNode = this.insertNode(node.leftNode,data);
        else
            node.rightNode = this.insertNode(node.rightNode, data);

        return node;
    }

    printInOrder(root: NodeStructure){
        if(root == null)
            return;
        this.printInOrder(root.leftNode);
        console.log('-->', root.element);
        this.sortedNode.push(root.element);
        this.printInOrder(root.rightNode);
    }

    printPreOrder(root: NodeStructure){
        if(root == null)
            return;
        console.log('-->', root.element);
        this.printPreOrder(root.leftNode);
        this.printPreOrder(root.rightNode);
    }

    printPostOrder(root: NodeStructure){
        if(root == null)
            return;
        this.printPostOrder(root.leftNode);
        this.printPostOrder(root.rightNode);
        console.log('-->', root.element);

    }

    deleteNode(node: NodeStructure, key){
        if(node == null){
            return null;
        }
        else if(key < node.element){
            node.leftNode = this.deleteNode(node.leftNode, key);
            return node;
        }
        else if(key > node.element){
            node.rightNode = this.deleteNode(node.rightNode, key);
            return node;
        }
        else{
            if(node.leftNode === null && node.rightNode === null){
                node = null;
                return node;
            }
            if( node.leftNode == null){
                node = node.rightNode;
                return node;
            }
            if( node.rightNode == null){
                node = node.leftNode;
                return node;
            }
            else {
                let maxNode = this.maxOfLeftChild(node.leftNode);
                this.deleteNode(node, maxNode.element)
                if(this.search(node, maxNode.element))
                    console.log('element found');
                else{
                    console.log('element not found');
                    this.printInOrder(node);
                }
                node.element = maxNode.element;
                console.log('node right left child', node.element, node.leftNode, node.rightNode);    
                return node;
            }
        }
    }

    maxOfLeftChild(node: NodeStructure){
        while(node.rightNode != null){
            node = node.rightNode;
        }
        return node;
    };

    search(root:NodeStructure, data){
        if(root == null)
            return false;
        if(data < root.element) {
            return this.search(root.leftNode, data);
        }else if (data > root.element){
            return this.search(root.rightNode, data);
        }else{
            return true;
        }
    }

    balanceBinaryTreeConversion(sortedNodeArray:Array<number>, start:number, end:number){

        if(start>= end)
            return null;
        let mid = (start+end)/2
        let rootNode: any = sortedNodeArray[mid];
        rootNode.leftNode = this.balanceBinaryTreeConversion(sortedNodeArray, 0, mid-1)
        rootNode.rightNode = this.balanceBinaryTreeConversion(sortedNodeArray, mid+1, end)

        return rootNode;
    }

    prepToBalanceBST(node: NodeStructure){
        this.printInOrder(node)
        let size = this.sortedNode.length;
        this.balanceBinaryTreeConversion( this.sortedNode, 0, size-1)
    }

    sizeOfTree(node: NodeStructure){
        if(node==null)
            return 0;
        else{
            return(this.sizeOfTree(node.leftNode) + 1 + this.sizeOfTree(node.rightNode));
        }
    }

    depthOfTree(node: NodeStructure){
        if(node == null)
            return 0;
        else{
            let leftDepth = this.depthOfTree(node.leftNode);
            let rightDepth = this.depthOfTree(node.rightNode);

            if(leftDepth > rightDepth)
                return (leftDepth + 1);
            else
                return (rightDepth + 1);
        }
    }
}

let toDo = new Tree();
toDo.root = toDo.insertNode(toDo.root, 8);
toDo.insertNode(toDo.root, 3);toDo.insertNode(toDo.root, 1);
toDo.insertNode(toDo.root, 6);toDo.insertNode(toDo.root, 10);
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