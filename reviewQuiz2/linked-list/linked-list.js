class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
  constructor() {
    this.firstNode = null;
    this.listSize = 0;
  }

  size() {
    return this.listSize;
  }

  remove(valueToRemove) {
    let currentNode = this.firstNode;
    let previousNode;
    let nextNode;

    let foundValue = valueToRemove === currentNode.value;
    while (!foundValue) {
        previousNode = currentNode;
        currentNode = currentNode.next;

        if (!currentNode) {
            return;
        }

        foundValue = valueToRemove === currentNode.value;
    }

    nextNode = currentNode.next;

    if (currentNode === this.firstNode) {
        this.firstNode = nextNode;
    } else {
        previousNode.next = nextNode;
    }

    this.listSize--;
  }

  insert(newValue) {
    let nodeToInsert = new Node(newValue);
    
    if (!this.firstNode) {
      this.firstNode = nodeToInsert;
    } else {
      let currentNode = this.firstNode;
      
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = nodeToInsert;
    }
    this.listSize++;
  }

  contains(value) {
      let currentNode = this.firstNode;

      while (value !== currentNode.value) {
          currentNode = currentNode.next;

          if (!currentNode) {
              return false;
          }
      }

      return true;
  }
}