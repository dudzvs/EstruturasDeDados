// Fila(queue) é uma estrutura de dados que segue o princípio de "primeiro a entrar, primeiro a sair" (FIFO - First In, First Out). Os elementos são inseridos no final da fila e removidos do início.

export class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.data = {};
  }

  // Add a new element to the end of the list
  enqueue(element) {
    this.data[this.count] = element;
    this.count++;
  }

  // Remove the first element, following the FIFO principle, and return it
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.data[this.lowestCount];
    delete this.data[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.data[this.lowestCount];
  }

  size() {
    return this.count - this.lowestCount;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    while (!this.isEmpty()) {
      this.dequeue();
    }
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
