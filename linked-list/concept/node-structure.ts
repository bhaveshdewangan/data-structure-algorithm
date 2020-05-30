export class NodeStructure {
    public element:any;
    public next:NodeStructure;

    constructor(element){
        this.element = element;
        this.next = null;
    }
}

