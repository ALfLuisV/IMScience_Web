import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleParticipationDto } from './create-article-participation.dto';

export class UpdateArticleParticipationDto extends PartialType(CreateArticleParticipationDto) {}
