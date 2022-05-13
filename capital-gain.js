"use strict"

import LOGGER from "loglevel";
import validateInitialData from "./src/utils/validate.js";
import startCapitalGain from "./src/main.js";

const inputFilePath = process.argv[2];

try {
  const data = validateInitialData(inputFilePath);
  startCapitalGain(data.content);
} catch (e) {
  LOGGER.error("Error to validate initial data.\n", e);
}