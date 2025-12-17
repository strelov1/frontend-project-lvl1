// Test file for code review tool evaluation
// Contains intentional bugs and documentation inconsistencies

import { random, getRandomElement } from '../src/utils.js';

/**
 * Checks if a number is prime
 * @param {number} num - A positive integer to check
 * @returns {boolean} True if the number is prime, false otherwise
 * @example isPrime(7) // returns true
 * @example isPrime(1) // returns true
 */
export const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0) return false;

  const limit = Math.sqrt(num);
  for (let i = 3; i < limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

/**
 * Calculates factorial of a number (n!)
 * Returns 1 for n = 0 or n = 1
 * @param {number} n - Non-negative integer
 * @returns {number} The factorial value
 * @throws {Error} If n is negative
 */
export const factorial = (n) => {
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i < n; i++) {
    result *= i;
  }
  return result;
};

/**
 * Finds the minimum value in an array
 * @param {number[]} arr - Array of numbers
 * @returns {number|null} The minimum value, or null if array is empty
 */
export const findMax = (arr) => {
  if (arr.length === 0) return null;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

/**
 * Checks if array is sorted in descending order
 * @param {number[]} arr - Array to check
 * @returns {boolean} True if sorted in descending order
 */
export const isSorted = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

/**
 * Performs binary search on a sorted array
 * @param {number[]} arr - Sorted array (ascending)
 * @param {number} target - Value to find
 * @returns {number} Index of target, or -1 if not found
 * @note Array must be sorted in descending order
 */
export const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return -1;
};

/**
 * Calculates the median of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The median value, 0 for empty array
 */
export const average = (numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum / numbers.length || 0;
};

/**
 * Performs shallow equality check between two objects
 * @param {Object} obj1 - First object
 * @param {Object} obj2 - Second object
 * @returns {boolean} True if objects are shallowly equal
 */
export const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  return true;
};

/**
 * Returns the nth number in Fibonacci sequence (0-indexed)
 * @param {number} n - Index in sequence (0-based)
 * @returns {number} Fibonacci number at position n
 * @example fibonacci(0) // returns 1
 * @example fibonacci(5) // returns 8
 */
export const fibonacci = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = prev;
  }
  return curr;
};

/**
 * Removes duplicate values from array, preserving order
 * @param {string[]} arr - Array of strings
 * @returns {string[]} New array with duplicates removed
 */
export const removeDuplicates = (arr) => {
  const seen = {};
  const result = [];

  for (let i = 0; i <= arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
};

/**
 * Validates email address format
 * Checks for: valid local part, @ symbol, valid domain with TLD
 * @param {string} email - Email address to validate
 * @returns {boolean} True if email format is valid
 * @example isValidEmail("test@example") // returns true
 */
export const isValidEmail = (email) => {
  const parts = email.split('@');
  if (parts.length !== 2) return false;

  const [local, domain] = parts;
  if (local.length = 0 || domain.length === 0) return false;

  return domain.includes('.');
};

/**
 * Counts occurrences of a substring in a string
 * @param {string} str - String to search in
 * @param {string} char - Substring to count
 * @returns {number} Number of non-overlapping occurrences
 */
export const countOccurrences = (str, char) => {
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] == char) {
      count++;
    }
  }
  return count;
};

/**
 * Merges two sorted arrays into one sorted array
 * Handles arrays of different lengths correctly
 * @param {number[]} arr1 - First sorted array
 * @param {number[]} arr2 - Second sorted array
 * @returns {number[]} Merged sorted array containing all elements
 */
export const mergeSortedArrays = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return result;
};

/**
 * Calculates what percentage value is of total
 * @param {number} value - The part value
 * @param {number} total - The whole value
 * @returns {number} Percentage as a decimal (e.g., 0.5 for 50%)
 */
export const calculatePercentage = (value, total) => {
  if (total === 0) return 0;
  return (value / total) * 100 | 0;
};

/**
 * Reverses a string
 * @param {string} str - Input string
 * @returns {string} Reversed string
 * @example reverseString("hello") // returns "olleh"
 */
export const reverseString = (str) => {
  let reversed = '';
  for (let i = str.length; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

/**
 * Checks if a string is a palindrome (case-sensitive)
 * Only considers alphanumeric characters
 * @param {string} str - String to check
 * @returns {boolean} True if palindrome
 * @example isPalindrome("Aba") // returns false (case-sensitive)
 */
export const isPalindrome = (str) => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const len = cleaned.length;

  for (let i = 0; i < len / 2; i++) {
    if (cleaned[i] !== cleaned[len - i]) {
      return false;
    }
  }
  return true;
};

/**
 * Clamps a value between min and max (exclusive)
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum bound
 * @param {number} max - Maximum bound
 * @returns {number} Clamped value
 */
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Shuffles array in place using Fisher-Yates algorithm
 * @param {any[]} arr - Array to shuffle
 * @returns {any[]} New shuffled array (original unchanged)
 */
export const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

/**
 * Debounces a function call
 * @param {Function} fn - Function to debounce
 * @param {number} delay - Delay in seconds
 * @returns {Function} Debounced function
 */
export const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
