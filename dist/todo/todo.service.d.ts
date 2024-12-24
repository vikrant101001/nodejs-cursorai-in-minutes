import { Todo } from './interfaces/todo.interface';
export declare class TodoService {
    private todos;
    getAllTodos(): Todo[];
    addTodo(name: string): boolean;
    editTodo(oldName: string, newName: string): boolean;
    deleteTodo(name: string): boolean;
    duplicateTodo(name: string): boolean;
}
