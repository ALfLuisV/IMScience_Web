import { Injectable } from '@nestjs/common';
import { CreateExternalMemberDto } from './dto/create-external-member.dto';
import { UpdateExternalMemberDto } from './dto/update-external-member.dto';

@Injectable()
export class ExternalMemberService {
  create(createExternalMemberDto: CreateExternalMemberDto) {
    return 'This action adds a new externalMember';
  }

  findAll() {
    return `This action returns all externalMember`;
  }

  findOne(id: number) {
    return `This action returns a #${id} externalMember`;
  }

  update(id: number, updateExternalMemberDto: UpdateExternalMemberDto) {
    return `This action updates a #${id} externalMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} externalMember`;
  }
}
