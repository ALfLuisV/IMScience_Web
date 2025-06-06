import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Project } from './project.entity';

@Entity('articles')
export class Article {
  @PrimaryColumn()
  article_id: number;

  @Column()
  project: number;

  @ManyToOne(() => Project, project => project.articles)
  @JoinColumn({ name: 'project' })
  projectRef: Project;

  @Column()
  field: string;

  @Column()
  abstract: string;

  @Column()
  referencias: string;

  @Column()
  doi: string;

  @Column()
  demo: string;

  @Column()
  acknowledgment: string;

  @Column()
  conference_name: string;

  @Column()
  keywords: string;

  @Column({ type: 'date' })
  conference_date: Date;

  @Column()
  conference_place: string;
}