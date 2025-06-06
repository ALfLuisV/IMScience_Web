import { Module } from '@nestjs/common';
import { ProjectParticipationService } from './project-participation.service';
import { ProjectParticipationController } from './project-participation.controller';

@Module({
  controllers: [ProjectParticipationController],
  providers: [ProjectParticipationService],
})
export class ProjectParticipationModule {}
