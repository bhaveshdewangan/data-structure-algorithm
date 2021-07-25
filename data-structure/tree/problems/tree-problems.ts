import { NodeStructure } from '../concept/node-structure';
import { Tree } from '../concept/tree';

export class Problems extends Tree {
    // constructor(){super()}
    public _index: number;

    mirror(node: NodeStructure) {
        if (node == null)
            return null;
        else {
            this.mirror(node.leftNode);
            this.mirror(node.rightNode);

            let temp: NodeStructure;
            temp = node.leftNode;
            node.leftNode = node.rightNode;
            node.rightNode = temp;
        }
    }

    lowestCommonAncestor(node: NodeStructure, n1: Number, n2: Number) {
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
    }

    reverseAlternateLevel(node: NodeStructure) {
        let nodeBag = [];

        this.collectAlternateNodes(node, nodeBag, 0, 0)
        this.reverseAlternateNodes(nodeBag);
        this.modifyTree(node, nodeBag, 0, 0);
    }

    collectAlternateNodes(node: NodeStructure, nodeBag: any[], index: number, counter: number): any {
        if (node == null)
            return null;
        this.collectAlternateNodes(node.leftNode, nodeBag, index, counter + 1)

        if (counter % 2 != 0) {
            nodeBag.push(node.element);
        }

        this.collectAlternateNodes(node.rightNode, nodeBag, index, counter + 1);
    }

    reverseAlternateNodes(nodeBag: any[]) {
        let start = 0;
        let end = nodeBag.length - 1;

        while (end > start) {
            let temp = nodeBag[start];
            nodeBag[start] = nodeBag[end];
            nodeBag[end] = temp;

            start++;
            end--;
        }
        console.log(nodeBag);
    }

    modifyTree(node: NodeStructure, nodeBag: any[], index: number, counter: number) {
        this._index = index;
        if (node == null)
            return null;
        this.modifyTree(node.leftNode, nodeBag, this._index, counter + 1)

        if (counter % 2 != 0) {
            console.log('value', node.element, nodeBag[this._index], this._index);
            node.element = nodeBag[this._index];
            this._index = this._index + 1;
        }
        this.modifyTree(node.rightNode, nodeBag, this._index, counter + 1);
    }

    borderNodeLeftToRight(node: NodeStructure, level, dir) {
        if (node == null) {
            return null
        }
        level++
        if (dir == 'left') {
            this.printBorder(node.leftNode, level, dir);
            level--;
        }
        console.log(`--> ${node.element} current level - ${level}`);
        if (level == 0 && dir == 'left') {
            console.log('DIRECTION CHANGED', node.rightNode.element)
            dir = 'right'
        }
        if (dir == 'right') {
            this.printBorder(node.rightNode, level, dir);
        }
    }
}

var toDo = new Problems()
toDo.root = toDo.insertNode(toDo.root, 8);
toDo.insertNode(toDo.root, 3); toDo.insertNode(toDo.root, 1);
toDo.insertNode(toDo.root, 6); toDo.insertNode(toDo.root, 10);
toDo.insertNode(toDo.root, 9); toDo.insertNode(toDo.root, 12);


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



