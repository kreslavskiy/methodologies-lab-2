import LinkedList from '../src/linkedListBasedOnArray';

test('Append method', () => {
  const linkedList = new LinkedList();
  linkedList.append('First node');
  expect(linkedList.getByIndex(0).value).toBe('First node');
});
