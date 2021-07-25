export class NodeStructure {
    public element;
    public adjacencyList: NodeStructure[] = [];
    constructor(element) {
        this.element = element;
    }

    addAdjacent(node: NodeStructure) {
        let isExist = this.adjacencyList.find(item => item.element == node.element);
        if (!isExist) {
            this.adjacencyList.push(node)
        }
    }

    removeAdjacent(node: NodeStructure) {
        let index = this.adjacencyList.findIndex(item => item.element == node.element);
        if (index > -1) {
            this.adjacencyList.splice(index, 1);
            return node;
        }
    }

    isAlreadyEdge(node: NodeStructure) {
        let index = this.adjacencyList.findIndex(item => item.element == node.element);
        if (index > -1) {
            return true;
        }
        return false;
    }

    getAdjacent() {
        return this.adjacencyList;
    }

    isAdjacent(node: NodeStructure) {
        return this.adjacencyList.indexOf(node) > -1;
    }
}