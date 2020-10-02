import fs from "fs";

export const parseDictionary = () => {
  const data = fs.readFileSync(
    "src/utils/dictionary/top-10000-most-frequent-words.txt",
    {
      encoding: "utf8",
    }
  );
  const array = data.toString().split("\n");

  return array;
};
