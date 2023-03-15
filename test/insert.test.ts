import LinkedList from '../src/linkedListBasedOnArray';

test('insert method', () => {
  const linkedList = new LinkedList();
  linkedList.append('First node');
  linkedList.append('Second node');

  linkedList.insert('Node between 1st and 2nd', 1);
  expect(linkedList.getByIndex(1).value).toBe('Node between 1st and 2nd');
});