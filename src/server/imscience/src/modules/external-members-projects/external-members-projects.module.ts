import { Module } from '@nestjs/common';
import { ExternalMembersProjectsService } from './external-members-projects.service';
import { ExternalMembersProjectsController } from './external-members-projects.controller';

@Module({
  controllers: [ExternalMembersProjectsController],
  providers: [ExternalMembersProjectsService],
})
export class ExternalMembersProjectsModule {}
