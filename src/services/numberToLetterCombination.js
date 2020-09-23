import { numberLetterMapping } from "../data/numberLetterMapping";

const createLetterGroupArray = (number) => {
  const letterGroupArray = [];

  [...number].forEach((digit) => {
    letterGroupArray.push(numberLetterMapping[digit]);
  });

  return letterGroupArray;
};

const combine = (a, b) => {
  const combinations = [];

  a.reduce((_, c) => {
    b.map((d) => {
      combinations.push(c + d);
    });
  }, "");

  return combinations;
};

export const numberToLetterCombination = (number) => {
  if (!number || number === "") return [];

  const letterGroupArray = createLetterGroupArray(number);
  const combinations = letterGroupArray.reduce(combine);

  return combinations;
};
