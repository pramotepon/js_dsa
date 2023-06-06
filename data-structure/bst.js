class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// Create binary search tree
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    // Add new node
    insert(value) {
        const newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) return undefined;
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }
}
let myBST = new BinarySearchTree();
myBST.insert(57);
myBST.insert(21);
myBST.insert(76);

console.log(myBST);