import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberModule } from './modules/member/member.module';
import { ProjectModule } from './modules/project/project.module';
import { ArticleModule } from './modules/article/article.module';
import { ProjectAssociatedModule } from './modules/project-associated/project-associated.module';
import { ProjectAssociationModule } from './modules/project-association/project-association.module';
import { ProjectParticipationModule } from './modules/project-participation/project-participation.module';
import { ExternalMembersProjectsModule } from './modules/external-members-projects/external-members-projects.module';
import { ExternalMemberModule } from './modules/external-member/external-member.module';
import { ArticleParticipationModule } from './modules/article-participation/article-participation.module';
import { EventModule } from './modules/event/event.module';
import { Member } from '@shared/entities/member.entity';
import { Project } from '@shared/entities/project.entity';
import { Article } from '@shared/entities/article.entity';
import { ProjectAssociated } from '@shared/entities/project-associated.entity';
import { ProjectAssociation } from '@shared/entities/project-association.entity';
import { ExternalMembersProjects } from '@shared/entities/external-members-project.entity';
import { ExternalMember } from '@shared/entities/external-member.entity';
import { ProjectParticipation } from '@shared/entities/project-participation.entity';
import { ArticleParticipation } from '@shared/entities/article-participation.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT!,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: true,
      extra: {
        ssl: { rejectUnauthorized: false },
      },
    }),

    TypeOrmModule.forFeature([
      Member,
      Project,
      Article,
      ProjectAssociated,
      ProjectAssociation,
      ProjectParticipation,
      ExternalMembersProjects,
      ExternalMember,
      ArticleParticipation,
      Event,
    ]),

    MemberModule,
    ProjectModule,
    ArticleModule,
    ProjectAssociatedModule,
    ProjectAssociationModule,
    ProjectParticipationModule,
    ExternalMembersProjectsModule,
    ExternalMemberModule,
    ArticleParticipationModule,
    EventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
