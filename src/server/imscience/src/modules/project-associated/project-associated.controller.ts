import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectAssociatedService } from './project-associated.service';
import { CreateProjectAssociatedDto } from './dto/create-project-associated.dto';
import { UpdateProjectAssociatedDto } from './dto/update-project-associated.dto';

@Controller('project-associated')
export class ProjectAssociatedController {
  constructor(private readonly projectAssociatedService: ProjectAssociatedService) {}

  @Post()
  create(@Body() createProjectAssociatedDto: CreateProjectAssociatedDto) {
    return this.projectAssociatedService.create(createProjectAssociatedDto);
  }

  @Get()
  findAll() {
    return this.projectAssociatedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectAssociatedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectAssociatedDto: UpdateProjectAssociatedDto) {
    return this.projectAssociatedService.update(+id, updateProjectAssociatedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectAssociatedService.remove(+id);
  }
}
