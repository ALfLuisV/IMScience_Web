import { Module } from '@nestjs/common';
import { ProjectAssociatedService } from './project-associated.service';
import { ProjectAssociatedController } from './project-associated.controller';

@Module({
  controllers: [ProjectAssociatedController],
  providers: [ProjectAssociatedService],
})
export class ProjectAssociatedModule {}
