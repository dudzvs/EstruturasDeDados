import { ValuePair } from "./valuePair.js";
import { LinkedList } from "../LinkedLists/SingleLinkedList/singleList.js";

export class HashTable {
  constructor(initialCapacity = 7) {
    this.table = {};
    this.capacity = initialCapacity;
    this.size = 0;
  }

  /**
   * Calcula o valor do hash para uma string usando a função DJB2.
   *
   * @param {string} str - A string para o qual o valor hash sera calculado.
   * @returns {number} - O valor do hash calculado para a string.
   */
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

  /**
   * Adiciona um novo par de chave-valor á tabela hash.
   *
   * @param {string} key - A chave do par-valor que sera adicionada.
   * @param {*} data - O valor associado a chave.
   * @returns {boolean} - Retorna `true` se o par foi adicionado com sucesso, `false` caso contrario.
   */
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

  /**
   * Recupera o valor associado a uma chave na tabela hash.
   *
   * @param {string} key - A chave cujo o valor sera recuperado
   * @returns {*} - O valor associado a chave se encontrado, caso contrario retorna `undefined`
   */
  get(key) {
    const index = this._hash(key);
    const linkedList = this.table[index];

    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();

      while (current != null) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }

  /**
   * Remove o par chave-valor associado a uma chave da tabela hash.
   *
   * @param {string} key - A chave do par chave-valor a ser removido.
   * @returns {boolean} - Retorna `true` se o par foi removido com sucesso, caso contrário, retorna `false`.
   */
  remove(key) {
    const index = this._hash(key);
    const linkedList = this.table[index];

    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();

      while (current != null) {
        if (current.element.key === key) {
          linkedList.remove(current.element);

          if (linkedList.isEmpty()) {
            delete this.table[index];
          }
          this.size--;
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
}
