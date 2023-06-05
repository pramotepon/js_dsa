class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// Create class Queue
class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }
    // Add new node
    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
}

let myQueue = new Queue(1);
myQueue.enqueue(2);
console.log(myQueue);