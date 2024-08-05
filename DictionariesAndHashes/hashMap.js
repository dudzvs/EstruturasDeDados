import { ValuePair } from "./valuePair.js";

export class HashTable {
  constructor(initialCapacity = 7) {
    this.table = {};
    this.capacity = initialCapacity;
  }

  _djb2(str) {
    let hash = 5381;

    for (let i = 0; i < str.length; i++) {
      hash = (hash * 33) ^ str.charCodeAt(i);
    }

    return hash >>> 0;
  }
}
