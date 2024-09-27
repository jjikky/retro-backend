import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FilesS3PresignedService } from './files.service';
import { FileUploadDto } from './dto/file.dto';

@Controller({
  path: 'files',
  version: '1',
})
export class FilesS3PresignedController {
  constructor(private readonly filesService: FilesS3PresignedService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('upload')
  async uploadFile(@Body() file: FileUploadDto) {
    return this.filesService.create(file);
  }
}
