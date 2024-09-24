import { Test, TestingModule } from '@nestjs/testing';
import { RecruitmentsService } from './recruitments.service';

describe('RecruitmentsService', () => {
  let service: RecruitmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecruitmentsService],
    }).compile();

    service = module.get<RecruitmentsService>(RecruitmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
