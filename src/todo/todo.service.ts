/**
 * TodoService handles all business logic for todo operations
 * It manages an in-memory storage of todos and provides CRUD functionality
 */
import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodoService {
  // In-memory storage for todos
  private todos: Todo[] = [];

  /**
   * Retrieves all todos from the in-memory storage
   * @returns Array of all todos
   */
  getAllTodos(): Todo[] {
    return this.todos;
  }

  /**
   * Adds a new todo if it doesn't already exist
   * @param name - The name of the todo to add
   * @returns boolean indicating success or failure
   */
  addTodo(name: string): boolean {
    // Check if todo already exists
    const exists = this.todos.some(todo => todo.name === name);
    
    if (exists) {
      return false;
    }

    // Create new todo and add to storage
    const newTodo: Todo = {
      name,
      createdAt: new Date()
    };
    
    this.todos.push(newTodo);
    return true;
  }

  /**
   * Updates an existing todo with a new name
   * @param oldName - Current name of the todo
   * @param newName - New name to update the todo with
   * @returns boolean indicating if update was successful
   */
  editTodo(oldName: string, newName: string): boolean {
    const todoIndex = this.todos.findIndex(todo => todo.name === oldName);
    
    if (todoIndex === -1) {
      return false;
    }

    this.todos[todoIndex].name = newName;
    return true;
  }

  /**
   * Deletes a todo by its name
   * @param name - Name of the todo to delete
   * @returns boolean indicating if deletion was successful
   */
  deleteTodo(name: string): boolean {
    const initialLength = this.todos.length;
    this.todos = this.todos.filter(todo => todo.name !== name);
    
    return this.todos.length !== initialLength;
  }

  /**
   * Duplicates an existing todo with a new name
   * @param name - Name of the todo to duplicate
   * @returns boolean indicating if duplication was successful
   */
  duplicateTodo(name: string): boolean {
    // Find the todo to duplicate
    const todoToDuplicate = this.todos.find(todo => todo.name === name);
    
    if (!todoToDuplicate) {
      return false;
    }

    // Create new todo with same name + " (copy)"
    const newName = `${name} (copy)`;
    
    // Check if the copy name already exists
    if (this.todos.some(todo => todo.name === newName)) {
      return false;
    }

    // Create and add the duplicate
    const duplicatedTodo: Todo = {
      name: newName,
      createdAt: new Date()
    };
    
    this.todos.push(duplicatedTodo);
    return true;
  }
} 