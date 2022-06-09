const Node = require('../../src/lib/list-node')

describe('list-node.js', () => {
  context('one node', () => {
    let node
    beforeEach(() => {
      node = new Node('start here')
    })
    it('has a value', () => {
      expect(node.val).to.equal('start here')
    })

    it('has no next link', () => {
      expect(node.next).to.equal(null)
    })
  })

  context('two nodes', () => {
    let node
    let node2
    beforeEach(() => {
      node2 = new Node('go here first')
      node = new Node('start here', node2)
    })

    it('has a second node in the list', () => {
      expect(node.next).not.not.equal(null)
      expect(node.next.val).to.equal('go here first')
    })
  })
})
