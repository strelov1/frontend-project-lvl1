// Comprehensive tests for progression functions (Array.from refactored version)
import { generateProgressions, arrayReplaceValue } from '../src/games/brain-progression.js';

describe('generateProgressions', () => {
  // Happy path: basic progressions
  test('generate progressions', () => {
    expect(generateProgressions(5, 10, 3))
      .toEqual([5, 8, 11, 14, 17, 20, 23, 26, 29, 32]);
    expect(generateProgressions(2, 5, 2))
      .toEqual([2, 4, 6, 8, 10]);
    expect(generateProgressions(0, 3, 5))
      .toEqual([0, 5, 10]);
  });

  // Edge case: length = 1
  test('progression with single element', () => {
    expect(generateProgressions(5, 1, 3)).toEqual([5]);
    expect(generateProgressions(0, 1, 1)).toEqual([0]);
    expect(generateProgressions(10, 1, 5)).toEqual([10]);
  });

  // Edge case: length = 0
  test('progression with zero length', () => {
    expect(generateProgressions(5, 0, 3)).toEqual([]);
    expect(generateProgressions(0, 0, 1)).toEqual([]);
  });

  // Edge case: step = 0
  test('progression with zero step', () => {
    expect(generateProgressions(5, 5, 0)).toEqual([5, 5, 5, 5, 5]);
    expect(generateProgressions(10, 3, 0)).toEqual([10, 10, 10]);
  });

  // Edge case: step = 1
  test('progression with step 1', () => {
    expect(generateProgressions(1, 5, 1)).toEqual([1, 2, 3, 4, 5]);
    expect(generateProgressions(0, 10, 1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  // Test with negative start
  test('progression with negative start', () => {
    expect(generateProgressions(-5, 5, 2)).toEqual([-5, -3, -1, 1, 3]);
    expect(generateProgressions(-10, 3, 5)).toEqual([-10, -5, 0]);
  });

  // Test with negative step
  test('progression with negative step (descending)', () => {
    expect(generateProgressions(10, 5, -2)).toEqual([10, 8, 6, 4, 2]);
    expect(generateProgressions(0, 4, -3)).toEqual([0, -3, -6, -9]);
  });

  // Test with large step
  test('progression with large step', () => {
    expect(generateProgressions(0, 5, 100)).toEqual([0, 100, 200, 300, 400]);
    expect(generateProgressions(1, 3, 1000)).toEqual([1, 1001, 2001]);
  });

  // Test with large length
  test('progression with large length', () => {
    const result = generateProgressions(0, 100, 1);
    expect(result.length).toBe(100);
    expect(result[0]).toBe(0);
    expect(result[99]).toBe(99);
  });

  // Test correct arithmetic progression formula
  test('progression follows arithmetic sequence formula', () => {
    const start = 7;
    const length = 8;
    const step = 3;
    const progression = generateProgressions(start, length, step);
    
    // Each element should be: start + i * step
    progression.forEach((value, index) => {
      expect(value).toBe(start + index * step);
    });
  });

  // Test with decimal/float values
  test('progression with decimal values', () => {
    expect(generateProgressions(1.5, 4, 0.5)).toEqual([1.5, 2.0, 2.5, 3.0]);
    expect(generateProgressions(0.1, 3, 0.1)).toEqual([0.1, 0.2, 0.30000000000000004]); // Float precision
  });

  // Test immutability - multiple calls don't interfere
  test('function is pure and produces independent results', () => {
    const result1 = generateProgressions(5, 3, 2);
    const result2 = generateProgressions(5, 3, 2);
    
    expect(result1).toEqual(result2);
    expect(result1).not.toBe(result2); // Different array instances
  });
});

describe('arrayReplaceValue', () => {
  // Happy path: basic replacement
  test('replace array value', () => {
    expect(arrayReplaceValue([5, 8, 11, 14, 17, 20], 14, '..'))
      .toEqual([5, 8, 11, '..', 17, 20]);
    expect(arrayReplaceValue([2, 4, 6, 8, 10], 6, '..'))
      .toEqual([2, 4, '..', 8, 10]);
    expect(arrayReplaceValue([0, 5, 10], 5, '..'))
      .toEqual([0, '..', 10]);
  });

  // Edge case: value not in array
  test('replace when value not found', () => {
    expect(arrayReplaceValue([1, 2, 3, 4], 5, '..')).toEqual([1, 2, 3, 4]);
    expect(arrayReplaceValue([10, 20, 30], 15, 'X')).toEqual([10, 20, 30]);
  });

  // Edge case: empty array
  test('replace in empty array', () => {
    expect(arrayReplaceValue([], 5, '..')).toEqual([]);
  });

  // Edge case: single element array
  test('replace in single element array', () => {
    expect(arrayReplaceValue([5], 5, '..')).toEqual(['..']);
    expect(arrayReplaceValue([5], 10, '..')).toEqual([5]);
  });

  // Test: multiple occurrences of value
  test('replace all occurrences of value', () => {
    expect(arrayReplaceValue([5, 5, 5], 5, '..')).toEqual(['..', '..', '..']);
    expect(arrayReplaceValue([1, 2, 1, 3, 1], 1, 'X')).toEqual(['X', 2, 'X', 3, 'X']);
  });

  // Test: replace at different positions
  test('replace at first position', () => {
    expect(arrayReplaceValue([1, 2, 3], 1, '..')).toEqual(['..', 2, 3]);
  });

  test('replace at last position', () => {
    expect(arrayReplaceValue([1, 2, 3], 3, '..')).toEqual([1, 2, '..']);
  });

  test('replace at middle position', () => {
    expect(arrayReplaceValue([1, 2, 3, 4, 5], 3, '..')).toEqual([1, 2, '..', 4, 5]);
  });

  // Test: different replacement values
  test('replace with different types', () => {
    expect(arrayReplaceValue([1, 2, 3], 2, 'XX')).toEqual([1, 'XX', 3]);
    expect(arrayReplaceValue([1, 2, 3], 2, null)).toEqual([1, null, 3]);
    expect(arrayReplaceValue([1, 2, 3], 2, undefined)).toEqual([1, undefined, 3]);
    expect(arrayReplaceValue([1, 2, 3], 2, 99)).toEqual([1, 99, 3]);
  });

  // Test: replace with string values in array
  test('replace string values', () => {
    expect(arrayReplaceValue(['a', 'b', 'c'], 'b', 'X')).toEqual(['a', 'X', 'c']);
    expect(arrayReplaceValue(['hello', 'world'], 'hello', 'bye')).toEqual(['bye', 'world']);
  });

  // Test: replace zero
  test('replace zero value', () => {
    expect(arrayReplaceValue([0, 1, 2], 0, '..')).toEqual(['..', 1, 2]);
    expect(arrayReplaceValue([5, 0, 10], 0, 'X')).toEqual([5, 'X', 10]);
  });

  // Test: replace negative numbers
  test('replace negative numbers', () => {
    expect(arrayReplaceValue([-5, -3, -1], -3, '..')).toEqual([-5, '..', -1]);
    expect(arrayReplaceValue([5, -10, 15], -10, 0)).toEqual([5, 0, 15]);
  });

  // Test: immutability - original array not modified
  test('original array is not modified', () => {
    const original = [1, 2, 3, 4, 5];
    const result = arrayReplaceValue(original, 3, '..');
    
    expect(result).toEqual([1, 2, '..', 4, 5]);
    expect(original).toEqual([1, 2, 3, 4, 5]); // Original unchanged
  });

  // Test: works with progression output
  test('integration with generateProgressions', () => {
    const progression = generateProgressions(5, 5, 3);
    const element = progression[2]; // 11
    const result = arrayReplaceValue(progression, element, '..');
    
    expect(result).toEqual([5, 8, '..', 14, 17]);
  });

  // Test: strict equality matching
  test('uses strict equality for matching', () => {
    expect(arrayReplaceValue([1, '1', 1], 1, 'X')).toEqual(['X', '1', 'X']);
    expect(arrayReplaceValue([1, '1', 1], '1', 'X')).toEqual([1, 'X', 1]);
  });

  // Test: large arrays
  test('works with large arrays', () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    const result = arrayReplaceValue(largeArray, 500, 'replaced');
    
    expect(result[500]).toBe('replaced');
    expect(result.length).toBe(1000);
    expect(result[499]).toBe(499);
    expect(result[501]).toBe(501);
  });
});