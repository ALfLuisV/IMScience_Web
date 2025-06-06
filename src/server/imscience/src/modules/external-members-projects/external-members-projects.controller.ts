import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExternalMembersProjectsService } from './external-members-projects.service';
import { CreateExternalMembersProjectDto } from './dto/create-external-members-project.dto';
import { UpdateExternalMembersProjectDto } from './dto/update-external-members-project.dto';

@Controller('external-members-projects')
export class ExternalMembersProjectsController {
  constructor(private readonly externalMembersProjectsService: ExternalMembersProjectsService) {}

  @Post()
  create(@Body() createExternalMembersProjectDto: CreateExternalMembersProjectDto) {
    return this.externalMembersProjectsService.create(createExternalMembersProjectDto);
  }

  @Get()
  findAll() {
    return this.externalMembersProjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.externalMembersProjectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExternalMembersProjectDto: UpdateExternalMembersProjectDto) {
    return this.externalMembersProjectsService.update(+id, updateExternalMembersProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.externalMembersProjectsService.remove(+id);
  }
}
