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
}
let myGraph = new Graph();
myGraph.addVertext("A");
console.log(myGraph);
console.log(myGraph.addVertext("A"));