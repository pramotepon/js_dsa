// Create Node for stack
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// Create class stack
class Stack {
    constructor(value){
        const newNode = new Node(value)
        this.top = newNode;
        this.length = 1;
    }
}

let myStack = new Stack(2);
console.log(myStack);