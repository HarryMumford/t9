# Predictive text approach

## Task

Implement an algorithm that returns an array of strings when given a numerical string based on T9 predictions

## Approach

1. Identify inputs and outputs
2. Consider edge cases
3. Outline an order of tests with simplest first
4. Following TDD red-green-refactor cycle, implement the algorithm

### Inputs and outputs

| Inputs  | Outputs                                                                    |
| ------- | -------------------------------------------------------------------------- |
| `"2"`   | `["a", "b", "c"]`                                                          |
| `"23"`  | `["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]`                   |
| `"27"`  | `["ap", "aq", "ar", "as", "bp", "bq", "br", "bs", "cp", "cq", "cr", "cs"]` |
| `"222"` | array with length 27 (2^3)                                                 |

### Edge cases

I will protect algorithm from invalid inputs (e.g. non-strings) on the client side by limiting the input options (i.e. key input)

| Inputs | Outputs |
| ------ | ------- |
| `""`   | `[]`    |

### Tests in order of complexity

```
'returns empty array when given empty string'
'returns ["a", "b", "c"] when given "2"'
'returns ["ap", "aq", "ar", "as", "bp", "bq", "br", "bs", "cp", "cq", "cr", "cs"] when given "27"'
"returns 108 combinations when given 2227"
```
