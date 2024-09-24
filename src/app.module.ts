import { RecruitmentsService } from './recruitments/recruitments.service';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import appConfig from './config/app.config';
import { ConfigModule } from '@nestjs/config';
import { RecruitmentsController } from './recruitments/recruitments.controller';
import { RecruitmentsModule } from './recruitments/recruitments.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
