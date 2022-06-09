const LinkedList = require('../../src/lib/list')
const Node = require('../../src/lib/list-node')

describe('list.js', () => {
  it('has no head', () => {
    const list = new LinkedList()
    expect(list.head).to.equal(null)
  })

  it('has a head with a specific value', () => {
    const node = new Node('start here')
    const list = new LinkedList(node)

    expect(list.head).to.eql(node)
    expect(list.head.val).to.eql('start here')
  })

  it('can push a second node onto the list', () => {
    const node = new Node('start here')
    const list = new LinkedList(node)

    list.push('go here first')
    expect(node.next).to.not.equal(null)
    expect(node.next.val).to.equal('go here first')
  })

  it('can initialize empty and add two nodes onto the list', () => {
    const list = new LinkedList()

    list.push('start here')
    list.push('go here first')
    expect(list.head.val).to.equal('start here')
    expect(list.head.next.val).to.equal('go here first')
  })

  it('can delete a node', () => {
    const list = new LinkedList()

    list.push('start here')
    list.push('go here first')
    list.push('go here next')

    list.delete('go here first')

    expect(list.head.val).to.equal('start here')
    expect(list.head.next.val).to.equal('go here next')
    expect(list.head.next.next).to.equal(null)
  })
})
