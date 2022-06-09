const Node = require('./list-node')

class LinkedList {
  constructor (head = null) {
    this.head = head
  }

  push(val) {
    let current = this.head
    let node = new Node(val)

    if (this.head === null) {
      this.head = node
    } else {
      while(current.next) {
        current = current.next
      }
      current.next = node
    }
  }

  delete(val) {
    let current = this.head

    if (this.head.val === val) {
      this.head = this.head.next
    } else {
      while(current.next) {
        if (current.next.val === val) {
          current.next = current.next.next
        }
        current = current.next
      }
    }
  }
}

module.exports = LinkedList