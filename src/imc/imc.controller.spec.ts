import { Test, TestingModule } from '@nestjs/testing';
import { ImcController } from './imc.controller';

describe('ImcController', () => {
  let controller: ImcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImcController],
    }).compile();

    controller = module.get<ImcController>(ImcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
