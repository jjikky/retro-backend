import { IsString } from 'class-validator';

export class FileDto {
  @IsString()
  id: string;

  path: string;
}
