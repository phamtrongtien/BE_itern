import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TasksService } from './tasks.service';
import { Task } from '../entities/task.entity';
import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { TasksController } from './tasks.controller';
@Module({
  imports: [MikroOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [{
    provide: EntityRepository,
    useFactory: (em: EntityManager) => em.getRepository(Task),
    inject: [EntityManager],
  },TasksService],
  exports: [TasksService],
})
export class TasksModule {}
