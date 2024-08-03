export class Dictionary {
  constructor() {
    this.table = {};
  }

  _toString(data) {
    if (data === null) return "NULL";
    if (data === undefined) return "UNDEFINED";
    else if (typeof data === "string" || data instanceof String) {
      return data;
    }
    return data.toString();
  }
}
