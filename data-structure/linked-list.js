// Create Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1; // จำนวนสมาชิกเริ่มต้นในลิงค์ลิสต์
    }
    // Add new node
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // Remove last node
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    // Add new node beginning of an link list
    unshif(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    // Remove node beginning of an link list
    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }
    // Get data from link list
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
    // Edit value an link list by index
    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value
            return true;
        }
        return false;
    }
    // Insert new node befor index specific
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(value);
        if (index === 0) return this.unshif(value);
        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
// myLinkedList.pop();
// myLinkedList.pop();
// myLinkedList.unshif(4)
// myLinkedList.shift();
// console.log(myLinkedList.set(1, 9));
// console.log(myLinkedList.get(1));
console.log(myLinkedList.insert(1, 9));
console.log(myLinkedList);