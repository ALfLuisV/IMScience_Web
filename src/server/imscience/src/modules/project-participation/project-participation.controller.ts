import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectParticipationService } from './project-participation.service';
import { CreateProjectParticipationDto } from './dto/create-project-participation.dto';
import { UpdateProjectParticipationDto } from './dto/update-project-participation.dto';

@Controller('project-participation')
export class ProjectParticipationController {
  constructor(private readonly projectParticipationService: ProjectParticipationService) {}

  @Post()
  create(@Body() createProjectParticipationDto: CreateProjectParticipationDto) {
    return this.projectParticipationService.create(createProjectParticipationDto);
  }

  @Get()
  findAll() {
    return this.projectParticipationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectParticipationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectParticipationDto: UpdateProjectParticipationDto) {
    return this.projectParticipationService.update(+id, updateProjectParticipationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectParticipationService.remove(+id);
  }
}
