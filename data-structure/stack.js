// Create Node for stack
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// Create class stack
class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode;
        this.length = 1;
    }
    // Add new node to top stack
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }
}

let myStack = new Stack(2);
// console.log(myStack.push(3));
console.log(myStack);