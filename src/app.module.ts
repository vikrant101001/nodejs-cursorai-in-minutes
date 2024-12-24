/**
 * Root module of the application
 * Imports all feature modules
 */
import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule],
})
export class AppModule {} 