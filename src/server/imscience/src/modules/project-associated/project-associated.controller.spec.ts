import { Test, TestingModule } from '@nestjs/testing';
import { ProjectAssociatedController } from './project-associated.controller';
import { ProjectAssociatedService } from './project-associated.service';

describe('ProjectAssociatedController', () => {
  let controller: ProjectAssociatedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectAssociatedController],
      providers: [ProjectAssociatedService],
    }).compile();

    controller = module.get<ProjectAssociatedController>(ProjectAssociatedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
