// sharepoint.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

export type UploadResult =
  | { success: true; data: any }
  | { success: false; error: string; fileName: string };
@Injectable()
export class SharepointService {
  private siteDomain = '1work.sharepoint.com';
  private sitePath = '/sites/eofficev3';
  private docLibName = 'Test-List';

  async getSiteId(accessToken: string): Promise<string> {
    const url = `https://graph.microsoft.com/v1.0/sites/${this.siteDomain}:${this.sitePath}`;

    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return response.data.id;
  }

  async uploadFile(file: Express.Multer.File, accessToken: string): Promise<UploadResult> {
    try {
      const siteId = await this.getSiteId(accessToken);

      const url = `https://graph.microsoft.com/v1.0/sites/${siteId}/drive/root:/${this.docLibName}/${file.originalname}:/content`;

      const response = await axios.put(url, file.buffer, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': file.mimetype,
        },
      });

      return { success: true, data: response.data };
    } catch (error: any) {
      return { success: false, error: error.message || String(error), fileName: file.originalname };
    }
  }
}
