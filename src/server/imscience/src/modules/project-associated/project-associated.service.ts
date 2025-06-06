import { Injectable } from '@nestjs/common';
import { CreateProjectAssociatedDto } from './dto/create-project-associated.dto';
import { UpdateProjectAssociatedDto } from './dto/update-project-associated.dto';

@Injectable()
export class ProjectAssociatedService {
  create(createProjectAssociatedDto: CreateProjectAssociatedDto) {
    return 'This action adds a new projectAssociated';
  }

  findAll() {
    return `This action returns all projectAssociated`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectAssociated`;
  }

  update(id: number, updateProjectAssociatedDto: UpdateProjectAssociatedDto) {
    return `This action updates a #${id} projectAssociated`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectAssociated`;
  }
}
