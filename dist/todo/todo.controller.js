"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const todo_service_1 = require("./todo.service");
const todo_dto_1 = require("./dto/todo.dto");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    getTodoList() {
        return this.todoService.getAllTodos();
    }
    addTodo(createTodoDto) {
        const success = this.todoService.addTodo(createTodoDto.name);
        if (!success) {
            throw new common_1.HttpException('Todo already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        return 'success';
    }
    editTodo(updateTodoDto) {
        const success = this.todoService.editTodo(updateTodoDto.oldName, updateTodoDto.newName);
        if (!success) {
            throw new common_1.HttpException('Todo not found', common_1.HttpStatus.NOT_FOUND);
        }
        return 'success';
    }
    deleteTodo(deleteTodoDto) {
        const success = this.todoService.deleteTodo(deleteTodoDto.name);
        if (!success) {
            throw new common_1.HttpException('Todo not found', common_1.HttpStatus.NOT_FOUND);
        }
        return 'success';
    }
    duplicateTodo(duplicateTodoDto) {
        const success = this.todoService.duplicateTodo(duplicateTodoDto.name);
        if (!success) {
            throw new common_1.HttpException('Todo not found or duplicate name already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        return 'success';
    }
};
exports.TodoController = TodoController;
__decorate([
    (0, common_1.Get)('get_todo_list'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all todos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns list of all todos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], TodoController.prototype, "getTodoList", null);
__decorate([
    (0, common_1.Post)('add_todo'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new todo' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Todo created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Todo already exists' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.CreateTodoDto]),
    __metadata("design:returntype", String)
], TodoController.prototype, "addTodo", null);
__decorate([
    (0, common_1.Patch)('edit_todo'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing todo' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Todo updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Todo not found' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.UpdateTodoDto]),
    __metadata("design:returntype", String)
], TodoController.prototype, "editTodo", null);
__decorate([
    (0, common_1.Delete)('delete_todo'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a todo' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Todo deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Todo not found' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.DeleteTodoDto]),
    __metadata("design:returntype", String)
], TodoController.prototype, "deleteTodo", null);
__decorate([
    (0, common_1.Post)('duplicate_todo_list'),
    (0, swagger_1.ApiOperation)({ summary: 'Duplicate an existing todo' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Todo duplicated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Todo not found' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Duplicate name already exists' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.DuplicateTodoDto]),
    __metadata("design:returntype", String)
], TodoController.prototype, "duplicateTodo", null);
exports.TodoController = TodoController = __decorate([
    (0, swagger_1.ApiTags)('todos'),
    (0, common_1.Controller)('todos'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
//# sourceMappingURL=todo.controller.js.map