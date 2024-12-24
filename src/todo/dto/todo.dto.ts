/**
 * Data Transfer Objects for todo operations
 * These classes define the structure of request payloads
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({ description: 'Name of the todo' })
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateTodoDto {
  @ApiProperty({ description: 'Current name of the todo' })
  @IsString()
  @IsNotEmpty()
  oldName: string;

  @ApiProperty({ description: 'New name for the todo' })
  @IsString()
  @IsNotEmpty()
  newName: string;
}

export class DeleteTodoDto {
  @ApiProperty({ description: 'Name of the todo to delete' })
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class DuplicateTodoDto {
  @ApiProperty({ description: 'Name of the todo to duplicate' })
  @IsString()
  @IsNotEmpty()
  name: string;
} 