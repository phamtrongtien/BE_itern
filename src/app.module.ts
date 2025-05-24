import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HelloModule } from './hello/hello.module';
import { SharepointModule } from './sharepoint/sharepoint.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Be_intern'),
    HelloModule,
    SharepointModule,
  ],
})
export class AppModule {}
