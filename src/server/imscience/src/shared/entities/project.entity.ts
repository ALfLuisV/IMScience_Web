import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Article } from './article.entity';
import { ProjectParticipation } from './project-participation.entity';
import { ProjectAssociation } from './project-association.entity'; 
import { ExternalMembersProjects } from './external-members-project.entity'; 

@Entity('project')
export class Project {
  @PrimaryColumn()
  project_id: number;

  @Column()
  name: string;

  @Column()
  abstract: string;

  @Column()
  members: number;

  @Column({ type: 'date' })
  validity: Date;

  @OneToMany(() => Article, article => article.project)
  articles: Article[];

  @OneToMany(() => ProjectParticipation, pp => pp.project)
  participations: ProjectParticipation[];

  @OneToMany(() => ProjectAssociation, pa => pa.project)
  associations: ProjectAssociation[];

  @OneToMany(() => ExternalMembersProjects, ep => ep.project)
  externalAssociations: ExternalMembersProjects[];
}