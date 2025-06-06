import { Injectable } from '@nestjs/common';
import { CreateProjectAssociationDto } from './dto/create-project-association.dto';
import { UpdateProjectAssociationDto } from './dto/update-project-association.dto';

@Injectable()
export class ProjectAssociationService {
  create(createProjectAssociationDto: CreateProjectAssociationDto) {
    return 'This action adds a new projectAssociation';
  }

  findAll() {
    return `This action returns all projectAssociation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectAssociation`;
  }

  update(id: number, updateProjectAssociationDto: UpdateProjectAssociationDto) {
    return `This action updates a #${id} projectAssociation`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectAssociation`;
  }
}
