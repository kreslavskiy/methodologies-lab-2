export default class LinkedListNode {
  readonly value: any;
  next: LinkedListNode | null = null;

  constructor(value: any) {
    this.value = value;
  }
}
