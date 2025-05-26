import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from 'mongodb';

@Entity({ collection: 'tasks' })
export class Task {
  @PrimaryKey()
  _id!: ObjectId;

  @Property()
  title!: string;

  @Property()
  attachmentUrl?: string[];

  @Property()
  completed: boolean = false;

  @Property()
  createdAt: Date = new Date(); 
}