"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
let TodoService = class TodoService {
    constructor() {
        this.todos = [];
    }
    getAllTodos() {
        return this.todos;
    }
    addTodo(name) {
        const exists = this.todos.some(todo => todo.name === name);
        if (exists) {
            return false;
        }
        const newTodo = {
            name,
            createdAt: new Date()
        };
        this.todos.push(newTodo);
        return true;
    }
    editTodo(oldName, newName) {
        const todoIndex = this.todos.findIndex(todo => todo.name === oldName);
        if (todoIndex === -1) {
            return false;
        }
        this.todos[todoIndex].name = newName;
        return true;
    }
    deleteTodo(name) {
        const initialLength = this.todos.length;
        this.todos = this.todos.filter(todo => todo.name !== name);
        return this.todos.length !== initialLength;
    }
    duplicateTodo(name) {
        const todoToDuplicate = this.todos.find(todo => todo.name === name);
        if (!todoToDuplicate) {
            return false;
        }
        const newName = `${name} (copy)`;
        if (this.todos.some(todo => todo.name === newName)) {
            return false;
        }
        const duplicatedTodo = {
            name: newName,
            createdAt: new Date()
        };
        this.todos.push(duplicatedTodo);
        return true;
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)()
], TodoService);
//# sourceMappingURL=todo.service.js.map