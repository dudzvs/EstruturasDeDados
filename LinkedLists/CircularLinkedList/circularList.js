import { Node } from "../SingleLinkedList/node.js";
import { LinkedList } from "../SingleLinkedList/singleList.js";

export class CircularLinkedList extends LinkedList {
  constructor() {
    super();
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
      const node = new Node(value);
      let current = this.head;

      if (index === 0) {
        if (this.head === null) {
          node.next = this.head;
          this.head = node;
        } else {
          node.next = current;
          current = this.getElementAt(this.size());
          this.head = node;
          current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        if (this.count === 1) {
          this.head = null;
        } else {
          const removedNode = this.head;
          current = this.getElementAt(this.size());
          this.head = this.head.next;
          current.next = this.head;
          current = removedNode;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.value;
    }
    return null;
  }
}
