import { SortableCollection } from './Sorter';

export class Node {
  next: Node | null = null;
  constructor(public value: number) {}
}

class LinkedList implements SortableCollection {
  head: Node | null = null;
  constructor() {}

  get length(): number {
    if (!this.head) return 0;

    let node = this.head;
    let length = 1;

    while (node.next) {
      node = node.next;
      length++;
    }

    return length;
  }

  add(value: number): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    node.next = newNode;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('List is Empty');
    }

    if (index < 0) {
      throw new Error('index can not be negative');
    }

    let node: Node | null = this.head;
    let currentIndex = 0;

    while (node) {
      if (currentIndex === index) return node;

      currentIndex++;
      node = node.next;
    }

    throw new Error('index is greater than the last element index');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const right = this.at(rightIndex);
    const left = this.at(leftIndex);
    [left.value, right.value] = [right.value, left.value];
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}
