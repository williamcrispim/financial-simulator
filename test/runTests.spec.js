import validateInitialData from "../src/utils/validate.js";
import startCapitalGain from "../src/main.js";
import path from "path";

const expectedAnswers = [
  [{"tax": 0}, {"tax": 0}, {"tax": 0}],
  [{"tax": 0.00}, {"tax": 10000.00}, {"tax": 0.00}],
  [{"tax": 0.00}, {"tax": 0.00}, {"tax": 1000.00}],
  [{"tax": 0}, {"tax": 0}, {"tax": 0}],
  [{"tax": 0.00}, {"tax": 0.00}, {"tax": 0.00}, {"tax": 10000.00}],
  [{"tax": 0.00}, {"tax": 0.00}, {"tax": 0.00}, {"tax": 0.00}, {"tax": 3000.00}],
  [{"tax":0.00}, {"tax":0.00}, {"tax":0.00}, {"tax":0.00}, {"tax":3000.00}, {"tax":0.00}, {"tax":0.00}, {"tax":3700.00}, {"tax":0.00}],
  [{"tax":0.00}, {"tax":80000.00}, {"tax":0.00}, {"tax":60000.00}]
];

describe("Run all test cases with .txt files", () => {
  const logSpy = jest.spyOn(console, 'info');

  test('Case 01 + Case 02', () => {
    const filePath = path.join(__dirname, 'mock', 'case-01+case-02.txt');
    const data = validateInitialData(filePath);
    
    startCapitalGain(data.content);

    expect(logSpy).toHaveBeenCalledWith([{"tax": 0.00},{"tax": 0.00},{"tax": 0.00}]);
    expect(logSpy).toHaveBeenCalledWith([{"tax": 0.00},{"tax": 10000.00},{"tax": 0.00}]);
  });

  for (let i = 0; i < 8; i++) {
    test(`Case 0${i+1}`, () => {
      const filePath = path.join(__dirname, 'mock', `case-0${i+1}.txt`);
      const data = validateInitialData(filePath);
      
      startCapitalGain(data.content);
  
      expect(logSpy).toHaveBeenCalledWith(expectedAnswers[i]);
    });
  }

});