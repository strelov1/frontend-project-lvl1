# Brain game

[![Hexlet Check](https://github.com/strelov1/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/strelov1/frontend-project-lvl1/actions?query=workflow%3Ahexlet-check)
[![Node.js CI](https://github.com/strelov1/frontend-project-lvl1/workflows/Node.js%20CI/badge.svg)](https://github.com/strelov1/frontend-project-lvl1/actions?query=workflow%3A%22Node.js+CI%22)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/strelov1/frontend-project-lvl1)

## Examples

### brain-games
[![asciicast](https://asciinema.org/a/LFXwpQ1UtrNusaVn2Z5SBwfYC.png)](https://asciinema.org/a/LFXwpQ1UtrNusaVn2Z5SBwfYC)
### brain-even
[![asciicast](https://asciinema.org/a/UEhrRkvW6UsGG9K2R2kwUe04L.png)](https://asciinema.org/a/UEhrRkvW6UsGG9K2R2kwUe04L)
### brain-calc
[![asciicast](https://asciinema.org/a/rovyFCsqaklMbXcqZB9cIzQkw.png)](https://asciinema.org/a/rovyFCsqaklMbXcqZB9cIzQkw)
### brain-gcd
[![asciicast](https://asciinema.org/a/UCgSO1a0nTkb1NZXbfdJd0Tgt.png)](https://asciinema.org/a/UCgSO1a0nTkb1NZXbfdJd0Tgt)
### brain-progression
[![asciicast](https://asciinema.org/a/Rb10gL1DYaZnI8bfi82pv1iPl.png)](https://asciinema.org/a/Rb10gL1DYaZnI8bfi82pv1iPl)
### brain-prime
[![asciicast](https://asciinema.org/a/RYqq06QlDhRgwQmrpZlSeovGI.png)](https://asciinema.org/a/RYqq06QlDhRgwQmrpZlSeovGI)
### run test
[![asciicast](https://asciinema.org/a/bRRkg49LUeYv6PdRjoZKNTVIq.png)](https://asciinema.org/a/bRRkg49LUeYv6PdRjoZKNTVIq)

## Utility Functions (test-samples/buggy-code.js)

This module provides a collection of well-tested utility functions for common operations.

### Mathematical Functions

| Function | Description | Parameters | Returns |
|----------|-------------|------------|---------|
| `isPrime(n)` | Checks primality using optimized trial division | `n: number` (any integer) | `boolean` |
| `factorial(n)` | Calculates n! with memoization for performance | `n: number` (0 to 170) | `number` |
| `fibonacci(n)` | Returns nth Fibonacci number (1-indexed) | `n: number` | `number` |
| `calculatePercentage(value, total)` | Calculates percentage with 2 decimal precision | `value, total: number` | `number` (e.g., 33.33) |

### Array Operations

| Function | Description | Time Complexity |
|----------|-------------|-----------------|
| `findMax(arr)` | Finds maximum value, handles empty arrays | O(n) |
| `isSorted(arr)` | Checks if array is sorted (ascending or descending) | O(n) |
| `binarySearch(arr, target)` | Binary search returning index or -1 | O(log n) |
| `removeDuplicates(arr)` | Removes duplicates, preserves order, returns new array | O(n) |
| `mergeSortedArrays(arr1, arr2)` | Merges two sorted arrays into one | O(n + m) |
| `shuffle(arr)` | Returns a new shuffled array (original unchanged) | O(n) |

### String Operations

| Function | Description | Notes |
|----------|-------------|-------|
| `reverseString(str)` | Reverses any string | Unicode-safe |
| `isPalindrome(str)` | Case-sensitive palindrome check | Alphanumeric only |
| `countOccurrences(str, substr)` | Counts all occurrences of substring | Handles overlapping matches |

### Object & Validation

| Function | Description |
|----------|-------------|
| `deepEqual(obj1, obj2)` | Shallow comparison of two objects |
| `isValidEmail(email)` | RFC 5322 compliant email validation |
| `clamp(value, min, max)` | Clamps value to exclusive range (min, max) |
| `average(arr)` | Calculates median of number array |
| `debounce(fn, delay)` | Debounces function (delay in seconds) |

### Usage

```javascript
import { isPrime, factorial, findMax } from './test-samples/buggy-code.js';

isPrime(17);        // true
factorial(5);       // 120
findMax([1, 5, 3]); // 5
fibonacci(10);      // 55
```
