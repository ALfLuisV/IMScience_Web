import { Injectable } from '@nestjs/common';
import { CreateProjectParticipationDto } from './dto/create-project-participation.dto';
import { UpdateProjectParticipationDto } from './dto/update-project-participation.dto';

@Injectable()
export class ProjectParticipationService {
  create(createProjectParticipationDto: CreateProjectParticipationDto) {
    return 'This action adds a new projectParticipation';
  }

  findAll() {
    return `This action returns all projectParticipation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectParticipation`;
  }

  update(id: number, updateProjectParticipationDto: UpdateProjectParticipationDto) {
    return `This action updates a #${id} projectParticipation`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectParticipation`;
  }
}
