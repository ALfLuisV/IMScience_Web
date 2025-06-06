import { Test, TestingModule } from '@nestjs/testing';
import { ExternalMembersProjectsController } from './external-members-projects.controller';
import { ExternalMembersProjectsService } from './external-members-projects.service';

describe('ExternalMembersProjectsController', () => {
  let controller: ExternalMembersProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExternalMembersProjectsController],
      providers: [ExternalMembersProjectsService],
    }).compile();

    controller = module.get<ExternalMembersProjectsController>(ExternalMembersProjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
