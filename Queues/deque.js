// Fila(double-ended queue) onde você pode adicionar e remover elementos de ambos os extremos (início e fim) de forma eficiente.

export class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.data = {};
  }

  addBack(element) {
    this.data[this.count] = element;
    this.count++;
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.data[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.data[0] = element;
    }
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.data[this.lowestCount];
    delete this.data[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.data[this.count - 1];
    delete this.data[this.count - 1];
    this.count--;
    return result;
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  toString() {
    if (this.isEmpty()) {
      return undefined;
    }

    let objString = `${this.data[this.lowestCount]}`;

    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.data[i]}`;
    }

    return objString;
  }
}
