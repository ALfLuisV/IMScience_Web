import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Project } from './project.entity';
import { ExternalMember } from './external-member.entity';

@Entity('external_members_projects')
export class ExternalMembersProjects {
  @PrimaryColumn()
  external_members_projects_id: number;

  @Column()
  project_id: number;

  @Column()
  external_member_id: number;

  @Column({ type: 'date' })
  association_date: Date;

  @ManyToOne(() => Project, project => project.externalAssociations)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @ManyToOne(() => ExternalMember)
  @JoinColumn({ name: 'external_member_id' })
  externalMember: ExternalMember;
}