"use strict"

import LOGGER from "loglevel";
import readFile from "./readFile.js";
import readLineSync from "readline-sync";

function validateJSON(json) {
  try {
    JSON.parse(json);
  } catch (e) {
    LOGGER.error("JSON format is required.\n", e);
    return false;
  }

  return true;
}

function validateFilePath(path) {
  return {
    jsonFile: path.endsWith(".json"),
    textFile: path.endsWith(".txt")
  }
}

export default function validateInitialData(filePath) {
  const data = {
    validated: false,
    content: []
  }

  if (filePath) {
    const validadeFilePath = validateFilePath(filePath);
    
    if (validateFilePath(filePath).jsonFile) {
      let fileContentJSON = readFile(filePath);

      if (validateJSON(fileContentJSON)) {
        data.validated = true;
        data.content = JSON.parse(fileContentJSON)
      }
    } else if (validadeFilePath.textFile) {
      const fileContentJSON = readFile(filePath);

      fileContentJSON.split(/\r?\n/).forEach(line => {
        if (validateJSON(line)) {
          data.validated = true;
          data.content.push(JSON.parse(line));
        }
      });

    } else {
      LOGGER.error("Wrong file path! Please, try again.");
    }

  } else {
    let inputLoopFinished = false;

    while (!inputLoopFinished) {
      let userInput = readLineSync.prompt();

      if (userInput == "") {
        inputLoopFinished = true;
      } else if (validateJSON(userInput)) {
        data.validated = true;
        data.content.push(JSON.parse(userInput));
      }
    }
  }
  
  return data;
}