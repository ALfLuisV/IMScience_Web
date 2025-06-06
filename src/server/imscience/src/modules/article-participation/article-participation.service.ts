import { Injectable } from '@nestjs/common';
import { CreateArticleParticipationDto } from './dto/create-article-participation.dto';
import { UpdateArticleParticipationDto } from './dto/update-article-participation.dto';

@Injectable()
export class ArticleParticipationService {
  create(createArticleParticipationDto: CreateArticleParticipationDto) {
    return 'This action adds a new articleParticipation';
  }

  findAll() {
    return `This action returns all articleParticipation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} articleParticipation`;
  }

  update(id: number, updateArticleParticipationDto: UpdateArticleParticipationDto) {
    return `This action updates a #${id} articleParticipation`;
  }

  remove(id: number) {
    return `This action removes a #${id} articleParticipation`;
  }
}
