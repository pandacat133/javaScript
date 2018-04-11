class LinkedList {

    constructor() {
        this.start;
        this.size;
    }

    insert(value) {
        var node = new Node(value),
            currentNode = this.head;

        // 1st use-case: an empty list
        if (!currentNode) {
            this.head = node;
            this._length++;

            return node;
        }

        // 2nd use-case: a non-empty list
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;

        this._length ++;

        return node;
    }

    remove(value) {

    }

    contains(value) {

    }

    size() {

    }
}