import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Project } from './project.entity';
import { Member } from './member.entity'; 

@Entity('project_participation')
export class ProjectParticipation {
  @PrimaryColumn()
  project_participation_id: number;

  @Column()
  member_id: number;

  @Column()
  project_id: number;

  @Column({ type: 'date' })
  association_date: Date;

  @ManyToOne(() => Member)
  @JoinColumn({ name: 'member_id' })
  member: Member;

  @ManyToOne(() => Project, project => project.participations)
  @JoinColumn({ name: 'project_id' })
  project: Project;
}