export class NodeStructure {
    public element: number;
    public adjacents: NodeStructure[];
    constructor(element: any){
        this.element = element;
        this.adjacents =  [];
    }

    addAdjacent(node: NodeStructure){
        this.adjacents.push(node);
    }

    removeAdjacent(node: NodeStructure){
        let index = this.adjacents.indexOf(node);
        if(index > -1){
            this.adjacents.splice(index, 1);
            return node;
        }
    }

    getAdjacent(){
        return this.adjacents;
    }

    isAdjacent(node:NodeStructure){
        return this.adjacents.indexOf(node) > -1;
    }
}