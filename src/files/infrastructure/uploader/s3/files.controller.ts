import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { FilesS3Service } from './files.service';
import { FileResponseDto } from './dto/file-response.dto';

@Controller({
  path: 'files',
  version: '1',
})
export class FilesS3Controller {
  constructor(private readonly filesService: FilesS3Service) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.MulterS3.File,
  ): Promise<FileResponseDto> {
    return this.filesService.create(file);
  }
}
