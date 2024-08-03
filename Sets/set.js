export class Set {
  constructor() {
    this.data = {};
  }

  /**
   * Verifica se o valor está presente nas propriedades do objeto de dados
   * @param {any} value - O valor a ser verificado
   * @returns {boolean} - Retorna `true` se o valor estiver presente no objeto de dados, caso contrário, retorna `false`
   */
  has(value) {
    return Object.prototype.hasOwnProperty.call(this.data, value);
  }

  /**
   * Adiciona um novo valor ao objeto de dados
   * @param {any} value - O valor a ser adicionado
   * @returns {boolean} - Retorna `true` se o valor for adicionado com sucesso, caso contrário, retorna `false`
   */
  add(value) {
    if (!this.has(value)) {
      this.data[value] = value;
      return true;
    }
    return false;
  }

  /**
   * Deleta o valor do objeto de dados
   * @param {any} value - O valor a ser deletado
   * @returns {boolean} - Retorna `true` se o valor for deletado com sucesso, caso contrário, retorna `false`
   */
  delete(value) {
    if (this.has(value)) {
      delete this.data[value];
      return true;
    }
    return false;
  }

  /**
   * Remove todos os dados do objeto
   * @description Este método limpa o objeto de dados, removendo todas as propriedades e valores.
   */
  clear() {
    this.data = {};
  }

  /**
   * Retorna o número de propriedades no objeto de dados
   * @returns {number} - O número de propriedades no objeto de dados
   */
  size() {
    return Object.keys(this.data).length;
  }

  /**
   * Retorna todos os valores armazenados no objeto de dados
   * @returns {Array<any>} - Um array contendo todos os valores armazenados no objeto de dados
   */
  values() {
    return Object.values(this.data);
  }

  /**
   * Retorna a união do conjunto atual com outro conjunto
   * @param {Set} otherSet - O outro conjunto com o qual unir
   * @returns {Set} - Um novo conjunto contendo todos os elementos do conjunto atual e do outro conjunto
   */
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));

    return unionSet;
  }

  /**
   * Retorna a interseção do conjunto atual com outro conjunto
   * @param {Set} otherSet - O outro conjunto com o qual encontrar a interseção
   * @returns {Set} - Um novo conjunto contendo apenas os elementos presentes em ambos os conjuntos
   */
  intersection(otherSet) {
    const intersectionSet = new Set();

    for (const value of this.values()) {
      if (otherSet.has(value)) {
        intersectionSet.add(value);
      }
    }
    return intersectionSet;
  }

  /**
   * Retorna a diferença entre o conjunto atual e outro conjunto
   * @param {Set} otherSet - O outro conjunto com o qual encontrar a diferença
   * @returns {Set} - Um novo conjunto contendo apenas os elementos que estão no conjunto atual e não estão em otherSet
   */
  difference(otherSet) {
    const differenceSet = new Set();

    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  /**
   * Verifica se o conjunto atual é um subconjunto do outro conjunto.
   * @param {Set} otherSet - O conjunto que será comparado.
   * @returns {boolean} `true` se o conjunto atual é um subconjunto de `otherSet`, `false` caso contrário.
   */
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) return false;

    let isSubsetOf = true;

    this.values().every((value) => {
      if (!otherSet.has(value)) {
        isSubsetOf = false;
        return false;
      }
      return true;
    });
    return isSubsetOf;
  }
}
