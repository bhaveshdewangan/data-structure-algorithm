import { LinkedList } from '../concept/linked-list';
import { NodeStructure } from '../concept/node-structure';

export class Problems extends LinkedList{
    constructor(){super()}

    //Delete the node in linked-list which is greater than user input X
    dltNodeGrterThnX(node: NodeStructure, data: any) {
        let prev= null;
        while(node.element > data ){
            node = node.next;
            console.log('NODE  \n', node);
        }
        let temp = node;
        console.log('temp', temp);
        while(temp.next != null || temp.element > data ){
            
            if(temp.element > data){
                if(temp.next != null){
                    prev.next = temp.next;
                    temp = temp.next;
                }
                else{
                    prev.next = null;
                    break;
                }
            }else{
                prev = temp;
                temp = temp.next;
            }
        }
        return node;
    }
}

var toDo = new Problems()
toDo.addNode(10);
toDo.addNode(10);
toDo.addNode(8);
toDo.addNode(15);
toDo.displayAllNode();
var x = toDo.dltNodeGrterThnX(toDo.head, 9);
toDo.displayAllNode();