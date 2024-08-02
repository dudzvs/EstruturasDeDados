import { Node } from "../SingleLinkedList/node.js";

export class DoublyNode extends Node {
  constructor(value, next, prev = null) {
    super(value, next);
    this.prev = prev;
  }
}
