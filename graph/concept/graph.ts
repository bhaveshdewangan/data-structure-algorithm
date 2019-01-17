import { NodeStructure } from "./node-structure"
export class Graph {
    public edgeDirection = ''; 
    public node = null;
    static DIRECTED: any;
    static UNDIRECTED: any;
    constructor(edgeDirection = Graph.DIRECTED){
        this.edgeDirection = edgeDirection;
        this.node = new Map();
    }

    addEdge(source: any, destination: any){
        var sourceNode:NodeStructure = this.addVertex(source);
        var destinationNode:NodeStructure = this.addVertex(destination);
        sourceNode.adjacents.push(destinationNode);
        if(this.edgeDirection === Graph.UNDIRECTED){
            destinationNode.adjacents.push(sourceNode);
        }
        return [sourceNode, destinationNode];
    }
    
    addVertex(value: any): NodeStructure {
        if(this.node.has(value)){
            return this.node.get(value);
        }else {
            var vertex = new NodeStructure(value)
            this.node.set(value, vertex);
            return vertex;
        }
    }

    removeVertex(value: any){
        var current = this.node.get(value);
        if(current){
            for(let node of this.node.value()){
                node.removeAdjacent(current);
            }
        }
        return this.node.delete(value);
    }

    removeEdge(source, destination){
        var sourceNode = this.node.get(source);
        var destinationNode = this.node.get(destination);
        if(sourceNode && destinationNode){
            source.removeAdjacent(destinationNode);
            if(this.edgeDirection === Graph.UNDIRECTED){
                destinationNode.removeAdjacent(source);
            }
        }
        return [sourceNode, destinationNode];
    }
}

Graph.DIRECTED = Symbol('directed graph');
Graph.UNDIRECTED = Symbol('undirected graph');
