import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop({ default: false })
  completed: boolean;

  @Prop({ type: [String], default: [] })
  attachmentUrl: string[];
}

export const TaskSchema = SchemaFactory.createForClass(Task);
