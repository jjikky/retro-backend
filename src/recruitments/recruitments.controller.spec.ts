import { Test, TestingModule } from '@nestjs/testing';
import { RecruitmentsController } from './recruitments.controller';

describe('RecruitmentsController', () => {
  let controller: RecruitmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecruitmentsController],
    }).compile();

    controller = module.get<RecruitmentsController>(RecruitmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
