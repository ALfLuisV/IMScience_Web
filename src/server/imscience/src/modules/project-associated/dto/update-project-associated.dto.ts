import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectAssociatedDto } from './create-project-associated.dto';

export class UpdateProjectAssociatedDto extends PartialType(CreateProjectAssociatedDto) {}
