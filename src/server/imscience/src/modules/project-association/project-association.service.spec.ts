import { Test, TestingModule } from '@nestjs/testing';
import { ProjectAssociationService } from './project-association.service';

describe('ProjectAssociationService', () => {
  let service: ProjectAssociationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectAssociationService],
    }).compile();

    service = module.get<ProjectAssociationService>(ProjectAssociationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
