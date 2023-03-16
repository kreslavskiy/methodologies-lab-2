import { link } from 'fs';
import LinkedList from '../src/linkedListBasedOnArray';

describe('Linked list based on array', () => {
  let linkedList;
  let secondList;

  beforeAll(() => {
    linkedList = new LinkedList();
    secondList = new LinkedList();
  });

  it('should append one node', () => {
    linkedList.append('First node');
    expect(linkedList.getByIndex(0).value).toBe('First node');
  });

  it('should return length of the list', () => {
    linkedList.append('Second node');
    expect(linkedList.getLength()).toBe(2);
  });

  it('should clear the list', () => {
    linkedList.clear();
    expect(linkedList.getLength()).toBe(0);
  });

  it('should get first node in list by value', () => {
    linkedList.append('First node');
    linkedList.append('Second node');
    expect(linkedList.findFirstByValue('Second node').value).toBe('Second node');
  });

  it('should get last node in list by value', () => {
    expect(linkedList.findLastByValue('First node').value).toBe('First node');
  });

  it('should get node by index', () => {
    expect(linkedList.getByIndex(1).value).toBe('Second node');
  });

  it('should insert node in the list', () => {
    linkedList.insert('Node between 1st and 2nd', 1);
    expect(linkedList.getByIndex(1).value).toBe('Node between 1st and 2nd');
  });

  it('should delete node by index', () => {
    expect(linkedList.getLength()).toBe(3);
    linkedList.delete(1);
    expect(linkedList.getLength()).toBe(2);
  });

  it('should delete all nodes with some value', () => {
    linkedList.append('First node');
    linkedList.append('First node');

    linkedList.printList();

    expect(linkedList.getLength()).toBe(4);

    linkedList.deleteAll('First node');

    linkedList.printList();

    expect(linkedList.getLength()).toBe(1);
  });
});
