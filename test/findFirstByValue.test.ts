import LinkedList from '../src/linkedListBasedOnArray';

test('findFirstByValue method', () => {
  const linkedList = new LinkedList();
  linkedList.append('First node');
  linkedList.append('Second node');
  expect(linkedList.findFirstByValue('Second node').value).toBe('Second node');
});