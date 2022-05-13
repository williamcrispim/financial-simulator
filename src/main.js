"use strict"

import Operation from"./model/Operation.js";
import calculateTax from "./utils/calculate.js";

export default function startCapitalGain(data) {
  const responseList = [];

  for (let operationList of data) {
    const response = [];
    const stocks = new Operation();

    for (let operation of operationList) {
      stocks.setType = operation["operation"];
      stocks.setUnitCost = operation["unit-cost"];
      stocks.setQuantity = operation["quantity"];
      
      response.push({
        "tax": calculateTax(stocks)
      });
    }

    responseList.push(response);
  }

  responseList.forEach(item => console.info(item));
}