import { ValuePair } from "./valuePair.js";
import { LinkedList } from "../LinkedLists/SingleLinkedList/singleList.js";

export class HashTable {
  constructor(initialCapacity = 7) {
    this.table = {};
    this.capacity = initialCapacity;
    this.size = 0;
  }

  _djb2(str) {
    let hash = 5381;

    for (let i = 0; i < str.length; i++) {
      hash = (hash * 33) ^ str.charCodeAt(i);
    }

    return hash >>> 0;
  }

  _hash(key) {
    return this._djb2(key) % this.capacity;
  }

  put(key, data) {
    if (key != null && data != null) {
      const index = this._hash(key);

      if (this.table[index] == null) {
        this.table[index] = new LinkedList();
      }
      this.table[index].push(new ValuePair(key, data));
      this.size++;
      return true;
    }
    return false;
  }
}
