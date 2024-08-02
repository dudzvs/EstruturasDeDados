import { LinkedList } from "../SingleLinkedList/singleList.js";
import { DoublyNode } from "./doublyNode.js";

export class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = null;
  }

  /**
   * Insere um novo nó com o valor especificado na posição dada na lista duplamente ligada.
   * @param {any} value - O valor a ser inserido no novo nó.
   * @param {number} index - A posição onde o novo nó deve ser inserido.
   * O índice pode ser de 0 (início da lista) até o tamanho atual da lista (fim da lista).
   * @returns {boolean} - Retorna `true` se a inserção for bem-sucedida e `false` se o índice estiver fora do intervalo válido.
   */
  insert(value, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(value);
      let current = this.head;

      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        current.prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }

  /**
   * Remove o nó na posição especificada da lista.
   * @param {number} index - A posição do nó a ser removido.
   *                         O índice deve estar entre 0 (início da lista) e `this.count - 1` (última posição da lista).
   * @returns {any} - O valor do nó removido ou `undefined` se o índice estiver fora do intervalo válido.
   */
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = current.next;

        if (this.count === 1) {
          this.tail = null;
        } else {
          current.next.prev = null;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.value;
    }
    return null;
  }
}
