import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HelloModule } from './hello/hello.module';
import { SharepointModule } from './sharepoint/sharepoint.module';
import { TasksModule } from './tasks/tasks.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from './mikro-orm.config';
@Module({
  imports: [
    MikroOrmModule.forRoot(mikroOrmConfig),
    HelloModule,
    SharepointModule,
    TasksModule,
  ],
})
export class AppModule {}
