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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateTodoDto = exports.DeleteTodoDto = exports.UpdateTodoDto = exports.CreateTodoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTodoDto {
}
exports.CreateTodoDto = CreateTodoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the todo' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTodoDto.prototype, "name", void 0);
class UpdateTodoDto {
}
exports.UpdateTodoDto = UpdateTodoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current name of the todo' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateTodoDto.prototype, "oldName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'New name for the todo' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateTodoDto.prototype, "newName", void 0);
class DeleteTodoDto {
}
exports.DeleteTodoDto = DeleteTodoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the todo to delete' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DeleteTodoDto.prototype, "name", void 0);
class DuplicateTodoDto {
}
exports.DuplicateTodoDto = DuplicateTodoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the todo to duplicate' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DuplicateTodoDto.prototype, "name", void 0);
//# sourceMappingURL=todo.dto.js.map