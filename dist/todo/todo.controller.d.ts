import { TodoService } from './todo.service';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto, UpdateTodoDto, DeleteTodoDto, DuplicateTodoDto } from './dto/todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    getTodoList(): Todo[];
    addTodo(createTodoDto: CreateTodoDto): string;
    editTodo(updateTodoDto: UpdateTodoDto): string;
    deleteTodo(deleteTodoDto: DeleteTodoDto): string;
    duplicateTodo(duplicateTodoDto: DuplicateTodoDto): string;
}
