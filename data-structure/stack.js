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
    // Remove node top stack
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}
let myStack = new Stack(3);
myStack.push(2)
myStack.push(1)
myStack.pop();
console.log(myStack);