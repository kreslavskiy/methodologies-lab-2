import LinkedList from "src/linkedListBasedOnArray.js";
import { afterAll, beforeAll, describe, expect, it, test } from '@jest/globals';

test('Append method', () => {
  const linkedList = new LinkedList();
  linkedList.append('First node');
  expect(linkedList[0].value).toBe('First node');
});
