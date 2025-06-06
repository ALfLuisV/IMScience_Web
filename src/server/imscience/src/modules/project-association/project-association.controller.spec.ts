import { Test, TestingModule } from '@nestjs/testing';
import { ProjectAssociationController } from './project-association.controller';
import { ProjectAssociationService } from './project-association.service';

describe('ProjectAssociationController', () => {
  let controller: ProjectAssociationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectAssociationController],
      providers: [ProjectAssociationService],
    }).compile();

    controller = module.get<ProjectAssociationController>(ProjectAssociationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
