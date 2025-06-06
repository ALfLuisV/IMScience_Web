import { Test, TestingModule } from '@nestjs/testing';
import { ProjectParticipationService } from './project-participation.service';

describe('ProjectParticipationService', () => {
  let service: ProjectParticipationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectParticipationService],
    }).compile();

    service = module.get<ProjectParticipationService>(ProjectParticipationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
