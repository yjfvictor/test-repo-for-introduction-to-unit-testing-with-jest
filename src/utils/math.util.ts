/**
 * @file math.util.ts
 * @brief Utility functions for basic arithmetic operations.
 * @details Provides pure functions for numeric calculations, used by the
 * application and covered by unit tests to ensure correctness.
 * @author Victor Yeh
 * @date 2026-02-17
 * @copyright MIT Licence
 */

/**
 * @fn add
 * @type function
 * @brief Adds two numbers and returns their sum.
 * @details Performs standard numeric addition. Handles integers and
 * floating-point values. Algorithm: return the sum of the two parameters
 * using the JavaScript + operator for numbers.
 * @param {number} a - First operand (in).
 * @param {number} b - Second operand (in).
 * @returns {number} The sum of a and b.
 */
export function add(a: number, b: number): number {
  return a + b;
}
