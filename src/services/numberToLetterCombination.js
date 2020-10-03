import { numberLetterMapping } from "../utils/numberLetterMapping";

const createLetterGroupArray = (number) => {
  const letterGroupArray = [];

  [...number].forEach((digit) => {
    letterGroupArray.push(numberLetterMapping[digit]);
  });

  return letterGroupArray;
};

const combineLetterGroups = (a, b) => {
  const combinations = [];

  a.reduce((_, c) => {
    b.forEach((d) => {
      combinations.push(c + d);
    });
  }, "");

  return combinations;
};

export const numberToLetterCombination = (number) => {
  if (!number || number === "") return [];

  const letterGroupArray = createLetterGroupArray(number);
  const combinations = letterGroupArray.reduce(combineLetterGroups);

  return combinations;
};
