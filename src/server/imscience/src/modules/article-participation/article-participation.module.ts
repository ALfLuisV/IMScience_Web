import { Module } from '@nestjs/common';
import { ArticleParticipationService } from './article-participation.service';
import { ArticleParticipationController } from './article-participation.controller';

@Module({
  controllers: [ArticleParticipationController],
  providers: [ArticleParticipationService],
})
export class ArticleParticipationModule {}
