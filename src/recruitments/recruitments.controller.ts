import { Get, HttpStatus, HttpCode } from '@nestjs/common';
import { RecruitmentsService } from './recruitments.service';
import { Controller } from '@nestjs/common';

@Controller({
  path: 'recruitments',
  version: '1',
})
export class RecruitmentsController {
  constructor(private readonly recruitmentsService: RecruitmentsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findOne(): string {
    return '';
  }
}
