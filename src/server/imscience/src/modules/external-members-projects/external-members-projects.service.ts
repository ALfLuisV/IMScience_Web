import { Injectable } from '@nestjs/common';
import { CreateExternalMembersProjectDto } from './dto/create-external-members-project.dto';
import { UpdateExternalMembersProjectDto } from './dto/update-external-members-project.dto';

@Injectable()
export class ExternalMembersProjectsService {
  create(createExternalMembersProjectDto: CreateExternalMembersProjectDto) {
    return 'This action adds a new externalMembersProject';
  }

  findAll() {
    return `This action returns all externalMembersProjects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} externalMembersProject`;
  }

  update(id: number, updateExternalMembersProjectDto: UpdateExternalMembersProjectDto) {
    return `This action updates a #${id} externalMembersProject`;
  }

  remove(id: number) {
    return `This action removes a #${id} externalMembersProject`;
  }
}
