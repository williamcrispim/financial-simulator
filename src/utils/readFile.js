"use strict"

import LOGGER from "loglevel";
import fs from "fs";

export default function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (e) {
    LOGGER.error("Error to process JSON file.\n", e);
  }
};