/**
 * @file app.service.ts
 * @brief Root application service for health and info.
 * @details Provides business logic for the root controller: welcome message
 * and health status with ISO 8601 timestamp.
 * @author Victor Yeh
 * @date 2026-02-17
 * @copyright MIT Licence
 */

import { Injectable } from "@nestjs/common";

/**
 * @class AppService
 * @type class
 * @brief Root application service.
 * @details Injected into AppController to provide getHello and getHealth data.
 */
@Injectable()
export class AppService {
  /**
   * @fn getHello
   * @type function
   * @brief Returns a welcome message string.
   * @details Used by GET /. Returns a fixed greeting for the API.
   * @returns {string} The welcome message.
   */
  getHello(): string {
    return "Hello from NestJS unit testing introduction.";
  }

  /**
   * @fn getHealth
   * @type function
   * @brief Returns current health status and timestamp.
   * @details Used by GET /health. Timestamp is ISO 8601 format for
   * consistency and monitoring tools.
   * @returns {{ status: string; timestamp: string }} Object with status and ISO 8601 timestamp.
   */
  getHealth(): { status: string; timestamp: string } {
    const timestamp: string = new Date().toISOString();
    return { status: "ok", timestamp };
  }
}
