import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Project } from './project.entity';
import { ProjectAssociated } from './project-associated.entity'; 

@Entity('project_association')
export class ProjectAssociation {
  @PrimaryColumn()
  pma_id: number;

  @Column()
  project_id: number;

  @Column()
  member_id: number;

  @Column({ type: 'date' })
  association_date: Date;

  @ManyToOne(() => Project, project => project.associations)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @ManyToOne(() => ProjectAssociated)
  @JoinColumn({ name: 'member_id' })
  member: ProjectAssociated;
}