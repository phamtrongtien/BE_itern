import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dto/create-task.dto';

@Injectable()
export class TasksService {
    constructor(
        private readonly taskRepository: EntityRepository<Task>,
      ) {}
      

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create({
      ...createTaskDto,
      completed: createTaskDto.completed ?? false,
      createdAt: new Date(),
    });
    await this.taskRepository.persistAndFlush(task);
    return task;
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.findAll();
  }

  async delete(id: string): Promise<boolean> {
    const task = await this.taskRepository.findOne(id);
    if (!task) return false;
    await this.taskRepository.removeAndFlush(task);
    return true;
  }
}
