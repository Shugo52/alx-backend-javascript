export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(codeSet) {
    this._code = codeSet;
  }

  get name() {
    return this._name;
  }

  set name(nameSet) {
    this._name = this.nameSet
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
