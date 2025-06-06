import { PartialType } from '@nestjs/mapped-types';
import { CreateExternalMembersProjectDto } from './create-external-members-project.dto';

export class UpdateExternalMembersProjectDto extends PartialType(CreateExternalMembersProjectDto) {}
