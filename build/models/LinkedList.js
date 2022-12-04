"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.Node = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
exports.Node = Node;
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    get length() {
        if (!this.head)
            return 0;
        let node = this.head;
        let length = 1;
        while (node.next) {
            node = node.next;
            length++;
        }
        return length;
    }
    add(value) {
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
    at(index) {
        if (!this.head) {
            throw new Error('List is Empty');
        }
        if (index < 0) {
            throw new Error('index can not be negative');
        }
        let node = this.head;
        let currentIndex = 0;
        while (node) {
            if (currentIndex === index)
                return node;
            currentIndex++;
            node = node.next;
        }
        throw new Error('index is greater than the last element index');
    }
    compare(leftIndex, rightIndex) {
        return this.at(leftIndex).value > this.at(rightIndex).value;
    }
    swap(leftIndex, rightIndex) {
        const right = this.at(rightIndex);
        const left = this.at(leftIndex);
        [left.value, right.value] = [right.value, left.value];
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
