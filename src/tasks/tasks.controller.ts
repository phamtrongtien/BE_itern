import { Controller, Post, Body, Get, Delete, Param, NotFoundException } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { Task } from '../entities/task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Delete(':id')
async delete(@Param('id') id: string): Promise<{ deleted: boolean }> {
  console.log('Delete task id:', id); // Debug line
  const deleted = await this.tasksService.delete(id);
  if (!deleted) {
    throw new NotFoundException(`Task with id ${id} not found`);
  }
  return { deleted };
}

}
