export class NodeStructure {
    public element:any;
    public leftNode: NodeStructure;
    public rightNode: NodeStructure;
    constructor(data){
        this.element = data;
        this.leftNode = null;
        this.rightNode = null;
    }
}