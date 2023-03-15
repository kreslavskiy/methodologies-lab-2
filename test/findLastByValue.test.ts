import LinkedList from '../src/linkedListBasedOnArray';

test('findLastByValue method', () => {
  const linkedList = new LinkedList();
  linkedList.append('First node');
  linkedList.append('Second node');
  expect(linkedList.findLastByValue('First node').value).toBe('First node');
});