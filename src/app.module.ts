/**
 * @file app.module.ts
 * @brief Root application module.
 * @details Defines the root NestJS module that imports and registers
 * all feature modules. Aggregates AppController and AppService.
 * @author Victor Yeh
 * @date 2026-02-17
 * @copyright MIT Licence
 */

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

/**
 * @class AppModule
 * @type class
 * @brief Root module of the NestJS application.
 * @details Composes the application with AppController and AppService for
 * basic HTTP endpoints.
 */
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
