import { FileType } from '../../../../domain/file';

export class FileResponseDto {
  file: FileType;

  uploadSignedUrl: string;
}
