import { Test, TestingModule } from '@nestjs/testing';
import { ArticleParticipationController } from './article-participation.controller';
import { ArticleParticipationService } from './article-participation.service';

describe('ArticleParticipationController', () => {
  let controller: ArticleParticipationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleParticipationController],
      providers: [ArticleParticipationService],
    }).compile();

    controller = module.get<ArticleParticipationController>(ArticleParticipationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
