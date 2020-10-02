# Challenge

1. Return all real-word predictions when given a numerical string.
2. Implement using a Trie structure
3. Sort by frequency of use
4. Possibly update frequency

## Architecture

| Class       | methods                         | Responsibility                                              |
| ----------- | ------------------------------- | ----------------------------------------------------------- |
| `Predictor` | getAllPredictions(numberStr)    | Gets all the predictions, populates the Trie?               |
| `Trie`      | insert(word), getAllWordsAtNode | Gets all the predictions at a given node, inserts all words |
