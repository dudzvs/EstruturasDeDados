import { ValuePair } from "./valuePair.js";

export class Dictionary {
  constructor() {
    this.table = {};
  }

  /**
   * Converte diversos tipos de dados para sua representação em string.
   *
   * @param {*} data - O dado a ser convertido em string.
   * @returns {string} - A representação em string dos dados fornecidos.
   */
  _toString(data) {
    if (data === null) return "NULL";
    if (data === undefined) return "UNDEFINED";
    else if (typeof data === "string" || data instanceof String) {
      return data;
    }
    return data.toString();
  }

  /**
   * Verifica se a chave esta presente no Dicionario
   *
   * @param {*} key - Chave do dicionario.Sera convertida em uma string
   * @returns {boolean} - Retorna `true` se a chave estiver presente, `false` caso contrário.
   */
  hasKey(key) {
    return this.table[this._toString(key)] != null;
  }

  /**
   * Adiciona um par de chave e valor ao dicionário.
   *
   * @param {*} key - A chave para a entrada no dicionário. Será convertida para uma string.
   * @param {*} value - O valor associado à chave.
   * @returns {boolean} - Retorna `true` se o par foi adicionado com sucesso, `false` caso contrário.
   */
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this._toString(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  /**
   * Remove um par chave-valor do dicionario
   *
   * @param {*} key - Chave que sera removida do dicionario
   * @returns - Retorna `true` caso a chave seja removida com sucesso e `false` caso contrairio
   */
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this._toString(key)];
      return true;
    }

    return false;
  }

  /**
   * Recupera o par chave-valor do dicionario
   *
   * @param {*} key - Chave do dicionario que sera buscada
   * @returns - Retorna par chave-valor caso a chave exista e `false` caso nao;
   */
  get(key) {
    if (!this.hasKey(key)) return false;
    return this.table[this._toString(key)];
  }

  /**
   * Recupera todos os valores da tabela
   * @returns {Array} - Retorna um array com todos os valores da tabela
   */
  keyValues() {
    return Object.values(this.table);
  }

  /**
   * Recupera as chaves do dicionario
   *
   * @returns {Array} - Retorna um array com as chaves do dicionario
   */
  keys() {
    /* const keys = [];
    const valuePair = this.keyValues();

    for (let i = 0; i < valuePair.length; i++) {
      keys.push(valuePair[i].key);
    } 
    return keys;
    */
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  /**
   * Recupera os valores das chaves do dicionario
   * @returns {Array} - Retrona um array com os valores do dicionario
   *
   */
  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }

  /**
   * Redefine a tabela do dicionario
   */
  clear() {
    this.table = {};
  }

  /**
   * Recupera o nº de elementos no dicionario
   * @returns - Retorna o nª de elementos do dicionario
   */
  size() {
    return Object.keys(this.table).length;
  }

  /**
   * Verifica se o dicionario esta vazio
   * @returns - Retorna `true` se estiver vazio, `false` caso contrario
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Cria uma representação em string do dicionário
   * @returns {string} - Uma string representando o dicionário.
   *                    Se estiver vazio, retorna uma string vazia.
   */
  toString() {
    if (this.isEmpty()) return "";

    const valuePair = this.keyValues();
    let objString = `${valuePair[0].toString()}`;

    for (let i = 1; i < valuePair.length; i++) {
      objString = `${objString}, ${valuePair[i].toString()}`;
    }

    return objString;
  }
}
