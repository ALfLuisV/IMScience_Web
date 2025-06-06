import { Test, TestingModule } from '@nestjs/testing';
import { ExternalMemberController } from './external-member.controller';
import { ExternalMemberService } from './external-member.service';

describe('ExternalMemberController', () => {
  let controller: ExternalMemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExternalMemberController],
      providers: [ExternalMemberService],
    }).compile();

    controller = module.get<ExternalMemberController>(ExternalMemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
