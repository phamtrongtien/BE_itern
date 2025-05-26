// src/tasks/tasks.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from '../schema/tasks.schema';
import { Model, Types } from 'mongoose';
import { CreateTaskDto } from '../dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(taskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(taskDto);
    return createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
    }
    async delete(id: string): Promise<boolean> {
        if (!Types.ObjectId.isValid(id)) {
          return false;  // hoặc ném lỗi
        }
        const result = await this.taskModel.deleteOne({ _id: new Types.ObjectId(id) });
        return result.deletedCount > 0;
      }
}
