import { Module } from '@nestjs/common';
import { ExternalMemberService } from './external-member.service';
import { ExternalMemberController } from './external-member.controller';

@Module({
  controllers: [ExternalMemberController],
  providers: [ExternalMemberService],
})
export class ExternalMemberModule {}
