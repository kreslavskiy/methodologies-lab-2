import LinkedList from '../src/linkedListBasedOnArray';

test('getLength method', () => {
  const linkedList = new LinkedList();
  linkedList.append('First node');
  linkedList.append('Second node');
  expect(linkedList.getLength()).toBe(2);
});