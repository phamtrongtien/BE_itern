import { Test, TestingModule } from '@nestjs/testing';
import { SharepointController } from './sharepoint.controller';

describe('SharepointController', () => {
  let controller: SharepointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SharepointController],
    }).compile();

    controller = module.get<SharepointController>(SharepointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
