class NumberListNode {
    constructor(data, nextNode) {
        this.data = data;
        this.nextNode = null;

        if (nextNode) {
            this.nextNode = nextNode;
        }
    }

    getNext() {
        return this.nextNode;
    }

    setNext(nextNode) {
        this.nextNode = nextNode;
    }
}