/**
 * TodoController handles HTTP requests for todo operations
 * It defines the API endpoints and routes requests to the TodoService
 */
import { Controller, Get, Post, Patch, Delete, Body, HttpStatus, HttpException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TodoService } from './todo.service';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto, UpdateTodoDto, DeleteTodoDto, DuplicateTodoDto } from './dto/todo.dto';

@ApiTags('todos')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('get_todo_list')
  @ApiOperation({ summary: 'Get all todos' })
  @ApiResponse({ status: 200, description: 'Returns list of all todos' })
  getTodoList(): Todo[] {
    return this.todoService.getAllTodos();
  }

  @Post('add_todo')
  @ApiOperation({ summary: 'Create a new todo' })
  @ApiResponse({ status: 201, description: 'Todo created successfully' })
  @ApiResponse({ status: 400, description: 'Todo already exists' })
  addTodo(@Body() createTodoDto: CreateTodoDto): string {
    const success = this.todoService.addTodo(createTodoDto.name);
    if (!success) {
      throw new HttpException('Todo already exists', HttpStatus.BAD_REQUEST);
    }
    return 'success';
  }

  @Patch('edit_todo')
  @ApiOperation({ summary: 'Update an existing todo' })
  @ApiResponse({ status: 200, description: 'Todo updated successfully' })
  @ApiResponse({ status: 404, description: 'Todo not found' })
  editTodo(@Body() updateTodoDto: UpdateTodoDto): string {
    const success = this.todoService.editTodo(updateTodoDto.oldName, updateTodoDto.newName);
    if (!success) {
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }
    return 'success';
  }

  @Delete('delete_todo')
  @ApiOperation({ summary: 'Delete a todo' })
  @ApiResponse({ status: 200, description: 'Todo deleted successfully' })
  @ApiResponse({ status: 404, description: 'Todo not found' })
  deleteTodo(@Body() deleteTodoDto: DeleteTodoDto): string {
    const success = this.todoService.deleteTodo(deleteTodoDto.name);
    if (!success) {
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }
    return 'success';
  }

  @Post('duplicate_todo_list')
  @ApiOperation({ summary: 'Duplicate an existing todo' })
  @ApiResponse({ status: 201, description: 'Todo duplicated successfully' })
  @ApiResponse({ status: 404, description: 'Todo not found' })
  @ApiResponse({ status: 400, description: 'Duplicate name already exists' })
  duplicateTodo(@Body() duplicateTodoDto: DuplicateTodoDto): string {
    const success = this.todoService.duplicateTodo(duplicateTodoDto.name);
    if (!success) {
      throw new HttpException('Todo not found or duplicate name already exists', HttpStatus.BAD_REQUEST);
    }
    return 'success';
  }
} 