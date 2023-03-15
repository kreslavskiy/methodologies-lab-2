import LinkedList from '../src/linkedListBasedOnArray';

test('clear method', () => {
  const linkedList = new LinkedList();
  linkedList.append('First node');
  linkedList.append('Second node');
  linkedList.append('Third node');

  linkedList.clear();
  expect(linkedList.getLength()).toBe(0);
});