// sharepoint.controller.ts
import { Controller, Post, UploadedFiles, UseInterceptors, Body, BadRequestException } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { SharepointService, UploadResult } from './sharepoint.service';
import { memoryStorage } from 'multer';

@Controller('sharepoint')
export class SharepointController {
  constructor(private readonly spService: SharepointService) {}

  @Post('upload')
  @UseInterceptors(FilesInterceptor('file', 10, { storage: memoryStorage() }))
  async uploadFiles(
    @UploadedFiles() files: Express.Multer.File[],
    @Body('accessToken') accessToken: string,
  ): Promise<UploadResult[]> {
    if (!accessToken) throw new BadRequestException('Access token is required');
    if (!files || files.length === 0) throw new BadRequestException('At least one file is required');

    const results: UploadResult[] = [];
    for (const file of files) {
      const res = await this.spService.uploadFile(file, accessToken);
      results.push(res);
    }
    console.log(results)
    return results;
  }
}
