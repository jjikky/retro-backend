import { IsNumber, IsString } from 'class-validator';

export class FileUploadDto {
  @IsString()
  fileName: string;

  @IsNumber()
  fileSize: number;
}
