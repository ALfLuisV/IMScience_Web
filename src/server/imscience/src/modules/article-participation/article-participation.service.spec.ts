import { Test, TestingModule } from '@nestjs/testing';
import { ArticleParticipationService } from './article-participation.service';

describe('ArticleParticipationService', () => {
  let service: ArticleParticipationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleParticipationService],
    }).compile();

    service = module.get<ArticleParticipationService>(ArticleParticipationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
