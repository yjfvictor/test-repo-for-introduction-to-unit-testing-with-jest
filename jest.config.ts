/**
 * @file jest.config.ts
 * @brief Jest configuration for unit tests.
 * @details Configures Jest to work with NestJS and TypeScript. Specifies test
 * environment (Node), module resolution, transform settings via ts-jest, and
 * coverage thresholds. Used when running npm test.
 * @author Victor Yeh
 * @date 2026-02-17
 * @copyright MIT Licence
 */

/* eslint-disable require-jsdoc */

import type { Config } from 'jest';

/**
 * @var config
 * @type Config
 * @brief Jest configuration object.
 * @details Exported configuration used by Jest when running tests.
 */
const config: Config = {
  /**
   * @var moduleFileExtensions
   * @type string[]
   * @brief File extensions Jest will recognise as modules.
   * @details Enables resolution of .ts and .js files for TypeScript projects.
   */
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],

  /**
   * @var rootDir
   * @type string
   * @brief Root directory for test discovery.
   * @details Points to project root so both src and test directories are included.
   */
  rootDir: '.',

  /**
   * @var testRegex
   * @type string
   * @brief Regular expression matching test file names.
   * @details Matches .spec.ts, .spec.tsx, .test.ts and .test.tsx files.
   */
  testRegex: '.*\\.spec\\.(t|j)sx?$',

  /**
   * @var transform
   * @type Record<string, string>
   * @brief Transform configuration for TypeScript files.
   * @details Uses ts-jest to compile TypeScript before running tests.
   */
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },

  /**
   * @var collectCoverageFrom
   * @type string[]
   * @brief Glob patterns for files to include in coverage.
   * @details Excludes test files, main bootstrap, and module definitions.
   */
  collectCoverageFrom: [
    'src/**/*.(t|j)s',
    '!src/main.ts',
    '!src/**/*.module.ts',
  ],

  /**
   * @var coverageDirectory
   * @type string
   * @brief Directory for coverage reports.
   * @details Coverage output is written to ./coverage.
   */
  coverageDirectory: './coverage',

  /**
   * @var testEnvironment
   * @type string
   * @brief Runtime environment for tests.
   * @details Uses Node for NestJS and utility tests (no browser DOM).
   */
  testEnvironment: 'node',

  /**
   * @var testPathIgnorePatterns
   * @type string[]
   * @brief Patterns to skip when discovering tests.
   * @details Avoids double-running tests if any overlap.
   */
  testPathIgnorePatterns: [],

  /**
   * @var moduleNameMapper
   * @type Record<string, string>
   * @brief Path aliases for module resolution.
   * @details Optional: map path aliases if used in tsconfig.
   */
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
