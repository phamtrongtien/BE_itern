// src/tasks/dto/create-task.dto.ts
export class CreateTaskDto {
    readonly title: string;
    readonly attachmentUrl?: string[];
    readonly completed?: boolean;
  }
  