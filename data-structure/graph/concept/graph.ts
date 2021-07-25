import { NodeStructure } from "./node-structure"

enum GraphDirection {
    DIRECTED = "Directed Graph",
    UNDIRECTED = "Undirected Graph"
}

class Graph {
    public node = null;
    public edgeDirection: GraphDirection;
    constructor(direction = GraphDirection.UNDIRECTED) {
        this.node = new Map();
        this.edgeDirection = direction;
    }

    addVertex(value) {
        if (this.node.has(value)) {
            return this.node.get(value)
        } else {
            const node = new NodeStructure(value)
            this.node.set(value, node)
            return node;
        }
    }

    addEdge(source: any, destination: any) {
        let sourceNode: NodeStructure = this.addVertex(source)
        let destinationNode: NodeStructure = this.addVertex(destination)
        if (!sourceNode.isAlreadyEdge(destinationNode)) {
            sourceNode.adjacencyList.push(destinationNode)
            if (this.edgeDirection === GraphDirection.UNDIRECTED) {
                destinationNode.adjacencyList.push(sourceNode);
            }
        }
        return [sourceNode, destinationNode];
    }

    removeVertex(value) {
        const node = this.node.get(value)
        if (node) {
            for (let item of this.node.value()) {
                item.removeAdjacent(node)
            }
        }
    }

    removeEdge(source, destination) {
        let sourceNode: NodeStructure = this.node.get(source)
        let destinationNode: NodeStructure = this.node.get(destination)
        if (sourceNode && destinationNode) {
            sourceNode.removeAdjacent(destinationNode)
            if (this.edgeDirection === GraphDirection.UNDIRECTED) {
                destinationNode.removeAdjacent(sourceNode);
            }
        }
    }

    // using dfs explore element present in graph or not
    dfs(node, v: any, t, visisted) {
        // node is the adjacency list
        // v is the node that's being visited
        // t is the final destination

        if (v?.element === t) {
            return true;
        }
        if (visisted[v]) {
            return false
        }
        visisted[v] = true;

        for (let neibhour of node.get(v?.element).adjacencyList) {
            if (!visisted[neibhour.node]) {
                let reached = this.dfs(node, neibhour, t, visisted);
                if (reached) {
                    return true;
                }
            }
        }
        return false
    }

    // dfs traverse
    dfsTraversal(v: any, visisted) {
        visisted[v.element] = true;
        console.log(`We traversed ${v.element}`)
        for (let i = 0; i < v.adjacencyList.length; i++) {
            if (!visisted[v.adjacencyList[i].element]) {
                this.dfsTraversal(v.adjacencyList[i], visisted)
            }
        }
    }

    isCyclicThroughDFS(v: NodeStructure, visited, parent) {
        visited[v.element] = true;
        console.log(`VISITED NODE ${v.element}`);
        if (v.adjacencyList.length > 0) {
            for (let adjacentNode of v.adjacencyList) {
                if (!visited[adjacentNode.element]) {
                    this.isCyclicThroughDFS(adjacentNode, visited, v.element)
                } else if (adjacentNode.element != parent) {
                    return true;
                }
            }
        }
        return false
    }


    bfsTraversal(node, v: any) {
        let queue = [];
        let visisted = {}
        queue.push(v.element)
        visisted[v.element] = true;
        while (queue.length) {
            let element = queue.shift();
            console.log(`We traversed ${element} \n`)
            let newNode = node.get(element);
            for (let i = 0; i < newNode.adjacencyList.length; i++) {
                if (!visisted[newNode.adjacencyList[i].element]) {
                    queue.push(newNode.adjacencyList[i].element);
                    visisted[newNode.adjacencyList[i].element] = true;
                }
            }
        }
    }

    bfsTraversalClone(v: NodeStructure) {
        const visited = {}
        visited[v.element] = true;
        const queue = [v.element];
        while (!!queue.length) {
            const poppedQueueElement = queue.shift();
            console.log(`VISITED NODE ${poppedQueueElement}`);
            const node = this.node.get(poppedQueueElement);
            let count = 0
            for (const adjacentNode of node.adjacencyList) {
                count++;
                if (!visited[adjacentNode.element]) {
                    queue.push(adjacentNode.element)
                    visited[adjacentNode.element] = true;
                }
            }
            console.log(`COUNT FOR NODE ${poppedQueueElement} is ${count}`)
        }
    }

    isCyclicThroughBFS(v: NodeStructure) {
        const visisted = {}
        const queue = []
        visisted[v.element] = true;
        queue.push({ element: v.element, parent: -1 })
        while (!!queue.length) {
            const poppedElement = queue.shift();
            let node = this.node.get(poppedElement.element);
            for (const adjacent of node.adjacencyList) {
                if (!visisted[adjacent.element]) {
                    visisted[adjacent.element] = true;
                    queue.push({ element: adjacent.element, parent: poppedElement.element })
                    console.log(`QUEUE PUSED ELEMNET - ${adjacent.element} PARENT - ${poppedElement.element}`)
                } else if (adjacent.element != poppedElement.parent) {
                    console.log(`%c CYCLIC CONDITION MEET FOR ELEMENT - ${adjacent.element} PARENT - ${poppedElement.element}`, 'background:#D0021B; color:white')
                    return true;
                }
            }
        }
        return false;
    }

    shortestPathWithBfs(s: NodeStructure, d: NodeStructure) {
        const visited = {}
        const pathMapping = {}
        const queue = [s.element]
        visited[s.element] = true;

        while (queue.length) {
            const currentVertax = queue.shift();
            const node = this.node.get(currentVertax);

            for (let adjacent of node.adjacencyList) {
                if (!visited[adjacent.element]) {
                    visited[adjacent.element] = true;
                    queue.push(adjacent.element);
                    pathMapping[adjacent.element] = currentVertax;
                    if (adjacent.element == d.element) {
                        break;
                    }
                }
            }
        }
        if (!pathMapping[d.element]) {
            return `path not found`;
        }
        let path = [d.element];
        let current = d.element
        while (pathMapping[current]) {
            current = pathMapping[current]
            path.unshift(current)
        }
        return `${path.join('-->')}`
    }

    dijkstra(source: NodeStructure, nodeList: any[]) {
        const minDistance = {};
        const visited = {};
        const parent = {}
        for (const node of nodeList) {
            minDistance[node] = Number.MAX_VALUE;
        }
        minDistance[source.element] = 0;
        while (Object.keys(visited).length < nodeList.length) {
            let vertex; let min = Number.MAX_VALUE
            for (let [key, value] of Object.entries(minDistance)) {
                if (value < min && !visited[key]) {
                    vertex = key;
                    min = Number(value);
                }
            }
            visited[vertex] = true;
            console.log("NEXT VERTEX", vertex, minDistance)
            const node = this.node.get(Number(vertex));
            for (let adjacent of node.adjacencyList) {
                if (minDistance[adjacent.element] > (minDistance[vertex] + adjancyMatrix[vertex][adjacent.element])) {
                    minDistance[adjacent.element] = minDistance[vertex] + adjancyMatrix[vertex][adjacent.element]
                    parent[adjacent.element] = Number(vertex)
                }
            }
        }
        return { minDistance, parent };
    }

    dijkstraClone(source: NodeStructure, nodeList: any) {
        const pathLookUp = {};
        const visited = {};
        const minDistance = {}
        for (let node of nodeList) {
            minDistance[node] = Number.MAX_VALUE
        }
        minDistance[source.element] = 0
        while (Object.keys(visited).length < nodeList.length) {
            let minVertex, min = Number.MAX_VALUE;
            for (let [key, value] of Object.entries(minDistance)) {
                if (!visited[key] && value < min) {
                    minVertex = key;
                    min = Number(value);
                }
            }
            visited[minVertex] = true;
            const node = this.node.get(Number(minVertex));
            for (let adjacent of node.adjacencyList) {
                if (minDistance[adjacent.element] > (minDistance[minVertex] + adjancyMatrix[minVertex][adjacent.element])) {
                    minDistance[adjacent.element] = minDistance[minVertex] + adjancyMatrix[minVertex][adjacent.element]
                    pathLookUp[adjacent.element] = Number(minVertex);
                }
            }

        }
        return { minDistance, pathLookUp }
    }
}

const adjancyMatrix = [
    [0, 5, 2, 0],
    [5, 0, 0, 1],
    [2, 0, 0, 2],
    [0, 1, 2, 0]
]

let rootNode = new Graph();
// rootNode.addVertex(5)
// rootNode.addVertex(8)
// rootNode.addVertex(10)

// rootNode.addEdge(5, 8)
// rootNode.addEdge(5, 10)
// rootNode.addEdge(10, 8)
// rootNode.addEdge(10, 18)

rootNode.addVertex(0)
rootNode.addVertex(1)
rootNode.addVertex(2)
rootNode.addVertex(3)

rootNode.addEdge(0, 1)
rootNode.addEdge(0, 2)
rootNode.addEdge(1, 3)
rootNode.addEdge(2, 3)

console.log(rootNode.node);

// let vertexToBeFind = 5;
// console.log(`IS ${vertexToBeFind} PRESENT: `, rootNode.dfs(rootNode.node, rootNode.node.get(0), vertexToBeFind, {}))

// console.log("%cDFS Traverse:\n", 'background:lightgreen; color:red')
// rootNode.dfsTraversal(rootNode.node.get(0), {})

// console.log("%cBFS Traverse:\n", 'background:lightgrey; color:red')
// rootNode.bfsTraversal(rootNode.node, rootNode.node.get(0))


// console.log("BFS Traverse Clone: \n")
// rootNode.bfsTraversalClone(rootNode.node.get(5))

console.log("%cIs Cyclic Graph BFS\n", 'background:maroon; color:white')
console.log(rootNode.isCyclicThroughBFS(rootNode.node.get(0)))

console.log("%cIs Cyclic Graph DFS\n", 'background:darkblue; color:white')
console.log(rootNode.isCyclicThroughDFS(rootNode.node.get(0), {}, -1))

// console.log(`%c PATH FROM ${rootNode.node.get(5).element} to ${rootNode.node.get(18).element}\n`, 'background: #222; color: #00D100')
// console.log(`%c ${rootNode.shortestPathWithBfs(rootNode.node.get(5), rootNode.node.get(18))}`, 'background: #222; color: #FF735C')

// console.log(`%c PATH FROM ${rootNode.node.get(0).element} to ${rootNode.node.get(3).element}\n`, 'background: #222; color: #00D100')
// console.log(`%c ${rootNode.shortestPathWithBfs(rootNode.node.get(0), rootNode.node.get(3))}`, 'background: #222; color: #FF735C')

// console.log(rootNode.dijkstra(rootNode.node.get(0),[0,1,2,3]));
// console.log(rootNode.dijkstraClone(rootNode.node.get(0),[0,1,2,3]));

