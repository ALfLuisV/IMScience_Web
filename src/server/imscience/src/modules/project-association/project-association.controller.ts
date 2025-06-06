import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectAssociationService } from './project-association.service';
import { CreateProjectAssociationDto } from './dto/create-project-association.dto';
import { UpdateProjectAssociationDto } from './dto/update-project-association.dto';

@Controller('project-association')
export class ProjectAssociationController {
  constructor(private readonly projectAssociationService: ProjectAssociationService) {}

  @Post()
  create(@Body() createProjectAssociationDto: CreateProjectAssociationDto) {
    return this.projectAssociationService.create(createProjectAssociationDto);
  }

  @Get()
  findAll() {
    return this.projectAssociationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectAssociationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectAssociationDto: UpdateProjectAssociationDto) {
    return this.projectAssociationService.update(+id, updateProjectAssociationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectAssociationService.remove(+id);
  }
}
