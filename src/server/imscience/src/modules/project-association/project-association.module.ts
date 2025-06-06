import { Module } from '@nestjs/common';
import { ProjectAssociationService } from './project-association.service';
import { ProjectAssociationController } from './project-association.controller';

@Module({
  controllers: [ProjectAssociationController],
  providers: [ProjectAssociationService],
})
export class ProjectAssociationModule {}
