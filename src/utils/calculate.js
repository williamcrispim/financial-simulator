function averagePrice(
  currentAmountStocks,
  currentWeightedAverage,
  amountStocks,
  purchasePrice
) {
  return ((currentAmountStocks * currentWeightedAverage) + (amountStocks * purchasePrice)) / (currentAmountStocks + amountStocks);
}

function profitAndLoss(stocks) {
  return (stocks.getUnitCost - stocks.getCurrentWeightedAverage) * stocks.getQuantity;
}

function removeTaxAmount(gain) {
  return gain * 0.2;
}

export default function calculateTax(stocks) {
  if (stocks.getCurrentAmountStocks === 0) {
    stocks.setCurrentWeightedAverage = stocks.getUnitCost;
    stocks.setProfit = 0;
  }

  if (stocks.getType === "buy") {
    // Preço Médio
    stocks.setCurrentWeightedAverage = averagePrice(
      stocks.getCurrentAmountStocks,
      stocks.getCurrentWeightedAverage,
      stocks.getQuantity,
      stocks.getUnitCost
    );

    stocks.setCurrentAmountStocks = stocks.getCurrentAmountStocks + stocks.getQuantity;

    return 0;
  } else if (stocks.getType === "sell") {
    stocks.setCurrentAmountStocks = stocks.getCurrentAmountStocks - stocks.getQuantity;

    //Loss
    if (stocks.getUnitCost < stocks.getCurrentWeightedAverage) {
      stocks.setLoss = profitAndLoss(stocks);

      return 0;
    } else {
      
      //Profit
      stocks.setProfit = profitAndLoss(stocks);

      if (stocks.getProfit > stocks.getLoss && stocks.getLoss !== 0) {
        const varAuxiliarProfit = stocks.getProfit + stocks.getLoss
        stocks.setLoss = stocks.getProfit + stocks.getLoss;
        stocks.setProfit = varAuxiliarProfit;
      }

      if (stocks.getProfit > 0) {
        if ((stocks.getQuantity * stocks.getUnitCost) > 20000) {
          return removeTaxAmount(stocks.getProfit);
        }
      }

      return 0;
    }
  }
}