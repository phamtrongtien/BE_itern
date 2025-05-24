import { Controller, Post, UploadedFile, UseInterceptors, Body, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SharepointService } from './sharepoint.service';
import { memoryStorage } from 'multer';

@Controller('sharepoint')
export class SharepointController {
  constructor(private readonly spService: SharepointService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('accessToken') accessToken: string,
  ) {
    if (!accessToken) {
      throw new BadRequestException('Access token is required');
    }

    if (!file) {
      throw new BadRequestException('File is required');
    }

    const result = await this.spService.uploadFile(file, accessToken);
    return result;
  }
}
