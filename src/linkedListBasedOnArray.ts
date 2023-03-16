import LinkedListNode from './linkedListNode';

export default class LinkedList extends Array<LinkedListNode> {
  append(value: any) {
    const node = new LinkedListNode(value);
    this.push(node);
  }

  getLength(): number {
    return this.length;
  }

  getByIndex(index: number): LinkedListNode {
    if (index < 0 || index > this.length) throw new Error('Invalid index');
    return this[index].value;
  }

  insert(value: any, index: number) {
    if (index < 0 || index > this.length) throw new Error('Invalid index');
    const node = new LinkedListNode(value);
    this.splice(index, 0, node);
  }

  findFirstByValue(value: any): number {
    let nodeToFind: LinkedListNode;
    for (const node of this) {
      if (node.value === value) {
        nodeToFind = node;
        break;
      }
    }
    return !!nodeToFind ? this.indexOf(nodeToFind) : -1;
  }

  findLastByValue(value: any): number {
    let nodeToFind: LinkedListNode;
    for (const node of this) {
      if (node.value === value) nodeToFind = node;
    }
    return !!nodeToFind ? this.lastIndexOf(nodeToFind) : -1;
  }

  clear() {
    while (this.length > 0) {
      this.pop();
    }
  }

  delete(index: number) {
    if (index < 0 || index > this.length) throw new Error('Invalid index');
    const toDelete = this.getByIndex(index);
    this.splice(index, 1);
    return toDelete;
  }

  deleteAll(value: any) {
    for (let i = 0; i < this.length; i++) {
      if (this[i].value === value) {
        this.splice(i, 1); 
        i--; 
      }
    }
  }

  printList() {
    const output = [];
    for (const node of this) {
      output.push(`${this.indexOf(node)}. ${node.value}`);
    }
    console.log(output.join(' => '));
  }

  clone(): LinkedList {
    const clone = new LinkedList();
    for (const node of this) {
      clone.append(node.value);
    }
    return clone;
  }

  reverseList() {
    this.reverse();
  }

  extend(list: LinkedList) {
    for (const node of list) {
      this.append(node.value);
    }
  }
}
