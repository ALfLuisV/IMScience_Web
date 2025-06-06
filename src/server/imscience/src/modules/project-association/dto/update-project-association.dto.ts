import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectAssociationDto } from './create-project-association.dto';

export class UpdateProjectAssociationDto extends PartialType(CreateProjectAssociationDto) {}
