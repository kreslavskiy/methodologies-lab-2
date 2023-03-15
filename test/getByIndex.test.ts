import LinkedList from '../src/linkedListBasedOnArray';

test('getByIndex method', () => {
  const linkedList = new LinkedList();
  linkedList.append('First node');
  linkedList.append('Second node');
  expect(linkedList.getByIndex(1).value).toBe('Second node');
});