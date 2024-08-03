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
   * Remove o par chave-valor do dicionário.
   *
   * @param {*} key - A chave do dicionário que será removida. Será convertida em uma string.
   * @returns {boolean} - Retorna `true` se a chave foi removida com sucesso, `false` se a chave não existia no dicionário.
   */
  remove(key) {
    if (!this.hasKey(key)) return false;

    delete this.table[this._toString(key)];
    return true;
  }
}
