import { Test, TestingModule } from '@nestjs/testing';
import { ExternalMemberService } from './external-member.service';

describe('ExternalMemberService', () => {
  let service: ExternalMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalMemberService],
    }).compile();

    service = module.get<ExternalMemberService>(ExternalMemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
