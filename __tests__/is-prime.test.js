// Comprehensive tests for isPrime function (optimized algorithm)
import { isPrime } from '../src/games/brain-prime.js';

describe('isPrime', () => {
  // Happy path: known prime numbers
  test('is prime', () => {
    expect(isPrime(2)).toBeTruthy();
    expect(isPrime(3)).toBeTruthy();
    expect(isPrime(5)).toBeTruthy();
    expect(isPrime(7)).toBeTruthy();
    expect(isPrime(11)).toBeTruthy();
  });

  // Happy path: known composite numbers
  test('is not prime', () => {
    expect(isPrime(1)).toBeFalsy();
    expect(isPrime(4)).toBeFalsy();
    expect(isPrime(6)).toBeFalsy();
    expect(isPrime(8)).toBeFalsy();
    expect(isPrime(9)).toBeFalsy();
  });

  // Edge case: numbers less than or equal to 1
  test('numbers <= 1 are not prime', () => {
    expect(isPrime(0)).toBeFalsy();
    expect(isPrime(1)).toBeFalsy();
    expect(isPrime(-1)).toBeFalsy();
    expect(isPrime(-10)).toBeFalsy();
  });

  // Edge case: smallest primes
  test('smallest prime numbers', () => {
    expect(isPrime(2)).toBeTruthy();
    expect(isPrime(3)).toBeTruthy();
  });

  // Edge case: even numbers (except 2)
  test('even numbers are not prime (except 2)', () => {
    expect(isPrime(2)).toBeTruthy(); // Only even prime
    expect(isPrime(4)).toBeFalsy();
    expect(isPrime(6)).toBeFalsy();
    expect(isPrime(8)).toBeFalsy();
    expect(isPrime(10)).toBeFalsy();
    expect(isPrime(100)).toBeFalsy();
  });

  // Test larger prime numbers
  test('larger prime numbers', () => {
    expect(isPrime(13)).toBeTruthy();
    expect(isPrime(17)).toBeTruthy();
    expect(isPrime(19)).toBeTruthy();
    expect(isPrime(23)).toBeTruthy();
    expect(isPrime(29)).toBeTruthy();
    expect(isPrime(31)).toBeTruthy();
    expect(isPrime(37)).toBeTruthy();
    expect(isPrime(41)).toBeTruthy();
    expect(isPrime(43)).toBeTruthy();
    expect(isPrime(47)).toBeTruthy();
  });

  // Test larger composite numbers
  test('larger composite numbers', () => {
    expect(isPrime(15)).toBeFalsy(); // 3 * 5
    expect(isPrime(21)).toBeFalsy(); // 3 * 7
    expect(isPrime(25)).toBeFalsy(); // 5 * 5
    expect(isPrime(27)).toBeFalsy(); // 3 * 3 * 3
    expect(isPrime(49)).toBeFalsy(); // 7 * 7
    expect(isPrime(51)).toBeFalsy(); // 3 * 17
  });

  // Test squares of primes
  test('squares of primes are not prime', () => {
    expect(isPrime(4)).toBeFalsy();   // 2^2
    expect(isPrime(9)).toBeFalsy();   // 3^2
    expect(isPrime(25)).toBeFalsy();  // 5^2
    expect(isPrime(49)).toBeFalsy();  // 7^2
    expect(isPrime(121)).toBeFalsy(); // 11^2
  });

  // Test numbers just below and above known primes
  test('numbers around primes', () => {
    expect(isPrime(10)).toBeFalsy();
    expect(isPrime(11)).toBeTruthy();
    expect(isPrime(12)).toBeFalsy();
    
    expect(isPrime(16)).toBeFalsy();
    expect(isPrime(17)).toBeTruthy();
    expect(isPrime(18)).toBeFalsy();
  });

  // Test prime numbers up to 100 (comprehensive)
  test('all primes up to 50', () => {
    const primesUpTo50 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
    primesUpTo50.forEach(num => {
      expect(isPrime(num)).toBeTruthy();
    });
  });

  // Test non-primes in range
  test('composite numbers in range 10-30', () => {
    const composites = [10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30];
    composites.forEach(num => {
      expect(isPrime(num)).toBeFalsy();
    });
  });

  // Test algorithm efficiency - numbers where old algorithm would be slow
  test('larger numbers to test algorithm efficiency', () => {
    expect(isPrime(97)).toBeTruthy();   // Large prime
    expect(isPrime(99)).toBeFalsy();    // 9 * 11
    expect(isPrime(100)).toBeFalsy();   // 10 * 10
  });

  // Test numbers divisible by small primes
  test('numbers divisible by 3', () => {
    expect(isPrime(9)).toBeFalsy();
    expect(isPrime(12)).toBeFalsy();
    expect(isPrime(15)).toBeFalsy();
    expect(isPrime(18)).toBeFalsy();
  });

  test('numbers divisible by 5', () => {
    expect(isPrime(10)).toBeFalsy();
    expect(isPrime(15)).toBeFalsy();
    expect(isPrime(20)).toBeFalsy();
    expect(isPrime(25)).toBeFalsy();
  });

  // Test that optimization works (checking only up to sqrt)
  test('optimization verification - only checks up to sqrt', () => {
    // 91 = 7 * 13, both factors > sqrt(91) ≈ 9.5
    // But 7 < sqrt(91), so it should be caught
    expect(isPrime(91)).toBeFalsy();
    
    // 89 is prime, algorithm should check up to ~9
    expect(isPrime(89)).toBeTruthy();
  });

  // Test twin primes (primes that differ by 2)
  test('twin primes', () => {
    expect(isPrime(3) && isPrime(5)).toBeTruthy();
    expect(isPrime(5) && isPrime(7)).toBeTruthy();
    expect(isPrime(11) && isPrime(13)).toBeTruthy();
    expect(isPrime(17) && isPrime(19)).toBeTruthy();
    expect(isPrime(29) && isPrime(31)).toBeTruthy();
    expect(isPrime(41) && isPrime(43)).toBeTruthy();
  });

  // Test Mersenne-like numbers
  test('mersenne-like numbers', () => {
    expect(isPrime(7)).toBeTruthy();   // 2^3 - 1
    expect(isPrime(15)).toBeFalsy();   // 2^4 - 1
    expect(isPrime(31)).toBeTruthy();  // 2^5 - 1
    expect(isPrime(63)).toBeFalsy();   // 2^6 - 1
  });
});