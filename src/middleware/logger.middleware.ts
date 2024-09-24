import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction): void {
    const { method, originalUrl } = req;
    const start = process.hrtime();

    res.on('finish', () => {
      const diff = process.hrtime(start);
      const timeInMs = diff[0] * 1e3 + diff[1] * 1e-6;
      const { statusCode } = res;

      this.logger.log(
        `${method} ${originalUrl} ${statusCode} - ${timeInMs.toFixed(3)}ms`,
      );
    });

    next();
  }
}
