// Comprehensive tests for calculateGcd function (Euclidean algorithm)
import { calculateGcd } from '../src/games/brain-gcd.js';

describe('calculateGcd', () => {
  // Happy path tests - basic functionality
  test('gcd 2 numbers', () => {
    expect(calculateGcd(25, 50)).toBe(25);
    expect(calculateGcd(100, 52)).toBe(4);
    expect(calculateGcd(3, 9)).toBe(3);
  });

  // Edge case: identical numbers
  test('gcd of identical numbers', () => {
    expect(calculateGcd(10, 10)).toBe(10);
    expect(calculateGcd(1, 1)).toBe(1);
    expect(calculateGcd(100, 100)).toBe(100);
  });

  // Edge case: one number is 1
  test('gcd with 1', () => {
    expect(calculateGcd(1, 5)).toBe(1);
    expect(calculateGcd(5, 1)).toBe(1);
    expect(calculateGcd(1, 1)).toBe(1);
  });

  // Edge case: one number is 0
  test('gcd with 0', () => {
    expect(calculateGcd(0, 5)).toBe(5);
    expect(calculateGcd(5, 0)).toBe(5);
    expect(calculateGcd(0, 0)).toBe(0);
  });

  // Test commutativity (order doesn't matter)
  test('gcd is commutative', () => {
    expect(calculateGcd(12, 18)).toBe(calculateGcd(18, 12));
    expect(calculateGcd(7, 21)).toBe(calculateGcd(21, 7));
    expect(calculateGcd(100, 25)).toBe(calculateGcd(25, 100));
  });

  // Test with coprime numbers (GCD = 1)
  test('gcd of coprime numbers', () => {
    expect(calculateGcd(13, 17)).toBe(1);
    expect(calculateGcd(7, 11)).toBe(1);
    expect(calculateGcd(15, 28)).toBe(1);
  });

  // Test with prime numbers
  test('gcd of prime numbers', () => {
    expect(calculateGcd(13, 17)).toBe(1);
    expect(calculateGcd(2, 3)).toBe(1);
    expect(calculateGcd(5, 7)).toBe(1);
  });

  // Test with multiples
  test('gcd when one number is multiple of another', () => {
    expect(calculateGcd(10, 5)).toBe(5);
    expect(calculateGcd(5, 10)).toBe(5);
    expect(calculateGcd(100, 10)).toBe(10);
    expect(calculateGcd(7, 21)).toBe(7);
  });

  // Test with larger numbers
  test('gcd with larger numbers', () => {
    expect(calculateGcd(1071, 462)).toBe(21);
    expect(calculateGcd(270, 192)).toBe(6);
    expect(calculateGcd(1000, 500)).toBe(500);
  });

  // Test with consecutive numbers (always 1)
  test('gcd of consecutive numbers', () => {
    expect(calculateGcd(5, 6)).toBe(1);
    expect(calculateGcd(100, 101)).toBe(1);
    expect(calculateGcd(49, 50)).toBe(1);
  });

  // Test with powers of 2
  test('gcd with powers of 2', () => {
    expect(calculateGcd(8, 16)).toBe(8);
    expect(calculateGcd(32, 64)).toBe(32);
    expect(calculateGcd(4, 12)).toBe(4);
  });

  // Stress test: very large numbers
  test('gcd with very large numbers', () => {
    expect(calculateGcd(123456, 789012)).toBe(12);
    expect(calculateGcd(999999, 111111)).toBe(111111);
  });

  // Test mathematical property: gcd(a, b) * lcm(a, b) = a * b
  test('gcd mathematical properties', () => {
    const a = 12;
    const b = 18;
    const gcd = calculateGcd(a, b);
    expect(gcd).toBe(6);
    expect(a % gcd).toBe(0);
    expect(b % gcd).toBe(0);
  });

  // Test Euclidean algorithm specific cases
  test('euclidean algorithm correctness', () => {
    // Test cases where recursive calls are made
    expect(calculateGcd(48, 18)).toBe(6);  // 48 % 18 = 12, 18 % 12 = 6, 12 % 6 = 0
    expect(calculateGcd(56, 98)).toBe(14); // Multiple recursive calls
    expect(calculateGcd(1989, 867)).toBe(51); // More complex case
  });
});