import { Module } from '@nestjs/common';
import { SharepointController } from './sharepoint.controller';
import { SharepointService } from './sharepoint.service';

@Module({
  controllers: [SharepointController],
  providers: [SharepointService]
})
export class SharepointModule {}
