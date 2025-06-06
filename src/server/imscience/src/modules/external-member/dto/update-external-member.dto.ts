import { PartialType } from '@nestjs/mapped-types';
import { CreateExternalMemberDto } from './create-external-member.dto';

export class UpdateExternalMemberDto extends PartialType(CreateExternalMemberDto) {}
