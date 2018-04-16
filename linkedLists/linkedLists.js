class LinkedList {

    constructor() {
        this.start = null;
        this.size = 0;
    }

    insert(value) {
        var newNode = new Node(value);

        if (!this.start) {
            this.start = newNode;
        } else {
            var currentNode = this.start;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
        }

        this.size++;
    }

    remove(value) {
        var currentNode = this.start;
        var previousNode;
        var nextNode;

        var foundValue = value === currentNode.value;
        while (!foundValue) {
            previousNode = currentNode;
            currentNode = currentNode.next;

            if (!currentNode) {
                return;
            }

            foundValue = value === currentNode.value;
        }

        nextNode = currentNode.next;

        if (currentNode === this.start) {
            this.start = nextNode;
        } else {
            previousNode.next = nextNode;
        }

        this.size--;
    }

    contains(value) {
        var currentNode = this.start;

        while (value !== currentNode.value) {
            currentNode = currentNode.next;

            if (!currentNode) {
                return false;
            }
        }

        return true;
    }

    size() {
        return this.size;
    }
}