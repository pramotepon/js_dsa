// Graph & Vertex
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    // Add vertext
    addVertext(vertext) {
        if (!this.adjacencyList[vertext]) {
            this.adjacencyList[vertext] = [];
            return true;
        }
        return false;
    }
    // Link vertex by edge
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }
}
let myGraph = new Graph();
myGraph.addVertext("A");
myGraph.addVertext("B");
myGraph.addEdge("A", "B");
console.log(myGraph);