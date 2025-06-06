import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticleParticipationService } from './article-participation.service';
import { CreateArticleParticipationDto } from './dto/create-article-participation.dto';
import { UpdateArticleParticipationDto } from './dto/update-article-participation.dto';

@Controller('article-participation')
export class ArticleParticipationController {
  constructor(private readonly articleParticipationService: ArticleParticipationService) {}

  @Post()
  create(@Body() createArticleParticipationDto: CreateArticleParticipationDto) {
    return this.articleParticipationService.create(createArticleParticipationDto);
  }

  @Get()
  findAll() {
    return this.articleParticipationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleParticipationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleParticipationDto: UpdateArticleParticipationDto) {
    return this.articleParticipationService.update(+id, updateArticleParticipationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleParticipationService.remove(+id);
  }
}
