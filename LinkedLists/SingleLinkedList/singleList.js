import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
  }

  _isEqual(a, b) {
    return a === b;
  }

  /**
   * Adiciona um novo elemento no final da lista.
   * @param {any} element - O valor a ser inserido no novo nó.
   */
  push(element) {
    const node = new Node(element);

    if (!this.head) {
      // Se a lista está vazia, o novo nó se torna o início da lista
      this.head = node;
    } else {
      // Caso contrário, percorre a lista até o final e adiciona o novo nó
      let current = this.head;

      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  /**
   * Insere um novo elemento na posição especificada da lista.
   * @param {any} element - O valor a ser inserido no novo nó.
   * @param {number} index - A posição onde o novo nó deve ser inserido. O índice pode ser de 0 (início da lista) até o tamanho atual da lista (fim da lista).
   * @returns {boolean} - Retorna `true` se a inserção for bem-sucedida e `false` se o índice estiver fora do intervalo válido.
   */
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);

      if (index === 0) {
        // Insere o novo nó no início da lista
        node.next = this.head;
        this.head = node;
      } else {
        // Insere o novo nó em uma posição intermediária
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  /**
   * Retorna o nó na posição especificada.
   * @param {number} index - A posição do nó a ser retornado.
   * @returns {Node|undefined} - O nó na posição especificada ou `undefined` se o índice estiver fora do intervalo válido.
   */
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;

      for (let i = 0; i < index && current != null; i++) {
        current = current.next;
      }

      return current;
    }
    return undefined;
  }

  /**
   * Remove o primeiro nó que contém o valor especificado.
   * @param {any} element - O valor do nó a ser removido.
   * @returns {any} - O valor do nó removido ou `undefined` se o elemento não for encontrado.
   */
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  /**
   * Remove o nó na posição especificada.
   * @param {number} index - A posição do nó a ser removido.
   * @returns {any} - O valor do nó removido ou `undefined` se o índice estiver fora do intervalo válido.
   */
  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;

      if (index === 0) {
        // Remove o nó do início da lista
        this.head = current.next;
      } else {
        // Remove o nó de uma posição intermediária
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.value;
    }
    return undefined;
  }

  /**
   * Retorna o índice do primeiro nó que contém o valor especificado.
   * @param {any} element - O valor a ser buscado na lista.
   * @returns {number} - O índice do nó que contém o valor especificado ou -1 se o elemento não for encontrado.
   */
  indexOf(element) {
    let current = this.head;

    for (let i = 0; i < this.count && current != null; i++) {
      if (this._isEqual(current.value, element)) {
        return i;
      }

      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  size() {
    return this.count;
  }

  toString() {
    if (this.head === null) {
      return "";
    }
    let objString = `${this.head.value}`;
    let current = this.head.next;

    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString} -> ${current.value}`;
      current = current.next;
    }

    return objString;
  }
}
