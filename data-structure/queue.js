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
    // Remove first node
    dequeue(){
        if(this.length === 0) return undefined;
        let temp = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = this.first.next;
            this.next = null;
        }
        this.length--;
        return temp;
    }
}

let myQueue = new Queue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
console.log(myQueue);