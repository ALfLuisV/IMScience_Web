import { Test, TestingModule } from '@nestjs/testing';
import { ProjectParticipationController } from './project-participation.controller';
import { ProjectParticipationService } from './project-participation.service';

describe('ProjectParticipationController', () => {
  let controller: ProjectParticipationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectParticipationController],
      providers: [ProjectParticipationService],
    }).compile();

    controller = module.get<ProjectParticipationController>(ProjectParticipationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
