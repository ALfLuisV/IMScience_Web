import { Test, TestingModule } from '@nestjs/testing';
import { ProjectAssociatedService } from './project-associated.service';

describe('ProjectAssociatedService', () => {
  let service: ProjectAssociatedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectAssociatedService],
    }).compile();

    service = module.get<ProjectAssociatedService>(ProjectAssociatedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
