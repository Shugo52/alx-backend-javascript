import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amountSet) {
    this._amount = amountSet;
  }

  get currency() {
    return this._currency; 
  }

  set currency(currencySet) {
    this._currency = currencySet;
  }

  displayFullPrice() {
    return `${this._amount} (${this._currency})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
