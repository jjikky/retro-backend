import { Module } from '@nestjs/common';
import { RecruitmentsService } from './recruitments.service';

@Module({
  providers: [RecruitmentsService]
})
export class RecruitmentsModule {}
