/**
 * @file math.util.spec.ts
 * @brief Unit tests for the math utility module.
 * @details Tests the add function with various inputs: positive numbers,
 * negative numbers, zero, and floating-point values. Ensures the utility
 * behaves correctly and prevents regressions.
 * @author Victor Yeh
 * @date 2026-02-17
 * @copyright MIT Licence
 */

import { add } from "../src/utils/math.util";

describe("add", () => {
  /**
   * @brief Test: adding two positive integers returns the correct sum.
   */
  it("should add two positive numbers correctly", () => {
    const result: number = add(2, 3);
    expect(result).toBe(5);
  });

  /**
   * @brief Test: adding zero and a number returns that number.
   */
  it("should return the other number when one operand is zero", () => {
    const result: number = add(0, 7);
    expect(result).toBe(7);
  });

  /**
   * @brief Test: adding negative numbers returns the correct sum.
   */
  it("should add negative numbers correctly", () => {
    const result: number = add(-1, -2);
    expect(result).toBe(-3);
  });

  /**
   * @brief Test: adding floating-point numbers returns the correct sum.
   */
  it("should add floating-point numbers correctly", () => {
    const result: number = add(0.1, 0.2);
    expect(result).toBeCloseTo(0.3);
  });
});
