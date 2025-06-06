import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExternalMemberService } from './external-member.service';
import { CreateExternalMemberDto } from './dto/create-external-member.dto';
import { UpdateExternalMemberDto } from './dto/update-external-member.dto';

@Controller('external-member')
export class ExternalMemberController {
  constructor(private readonly externalMemberService: ExternalMemberService) {}

  @Post()
  create(@Body() createExternalMemberDto: CreateExternalMemberDto) {
    return this.externalMemberService.create(createExternalMemberDto);
  }

  @Get()
  findAll() {
    return this.externalMemberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.externalMemberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExternalMemberDto: UpdateExternalMemberDto) {
    return this.externalMemberService.update(+id, updateExternalMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.externalMemberService.remove(+id);
  }
}
