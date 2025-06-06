import { Test, TestingModule } from '@nestjs/testing';
import { ExternalMembersProjectsService } from './external-members-projects.service';

describe('ExternalMembersProjectsService', () => {
  let service: ExternalMembersProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalMembersProjectsService],
    }).compile();

    service = module.get<ExternalMembersProjectsService>(ExternalMembersProjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
