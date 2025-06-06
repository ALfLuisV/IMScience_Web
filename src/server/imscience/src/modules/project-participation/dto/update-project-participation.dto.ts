import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectParticipationDto } from './create-project-participation.dto';

export class UpdateProjectParticipationDto extends PartialType(CreateProjectParticipationDto) {}
