import { RecruitmentsService } from './recruitments/recruitments.service';
import { Module } from '@nestjs/common';
import appConfig from './config/app.config';
import { ConfigModule } from '@nestjs/config';
import { RecruitmentsController } from './recruitments/recruitments.controller';
import { RecruitmentsModule } from './recruitments/recruitments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      envFilePath: ['.env'],
    }),
    RecruitmentsModule,
  ],
  controllers: [RecruitmentsController],
  providers: [RecruitmentsService],
})
export class AppModule {}
