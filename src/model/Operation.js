"use strict"

export default class Operation {

  constructor(
    type = null,
    unitCost = 0,
    quantity = 0
  ) {
    this._type = type;
    this._unitCost = unitCost;
    this._quantity = quantity;
    this._currentAmountStocks = 0;
    this._currentWeightedAverage = 0;
    this._loss = 0;
    this._profit = 0;
  }

  get getType() {
    return this._type;
  }

  /**
   * @param {String} value
   */
  set setType(value) {
    this._type = value;
  }

  get getUnitCost() {
    return this._unitCost;
  }

  /**
   * @param {Number} value
   */
  set setUnitCost(value) {
    this._unitCost = value;
  }

  get getQuantity() {
    return this._quantity;
  }

  /**
   * @param {Number} value
   */
  set setQuantity(value) {
    this._quantity = value;
  }

  get getCurrentAmountStocks() {
    return this._currentAmountStocks;
  }

  /**
   * @param {Number} value
   */
  set setCurrentAmountStocks(value) {
    this._currentAmountStocks = value;
  }

  get getCurrentWeightedAverage() {
    return this._currentWeightedAverage;
  }

  /**
   * @param {Number} value
   */
  set setCurrentWeightedAverage(value) {
    this._currentWeightedAverage = value;
  }

  get getLoss() {
    return this._loss;
  }

  /**
   * @param {Number} value
   */
  set setLoss(value) {
    this._loss = value;
  }

  get getProfit() {
    return this._profit;
  }

  /**
   * @param {Number} value
   */
  set setProfit(value) {
    this._profit = value;
  }
}