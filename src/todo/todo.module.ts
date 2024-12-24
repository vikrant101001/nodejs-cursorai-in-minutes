/**
 * TodoModule bundles all todo-related components
 * It imports required modules and declares components
 */
import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {} 