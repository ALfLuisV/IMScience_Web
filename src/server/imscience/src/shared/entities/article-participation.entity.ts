import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Member } from './member.entity'; 
import { Article } from './article.entity';

@Entity('article_participation')
export class ArticleParticipation {
  @PrimaryColumn()
  article_participation_id: number;

  @Column()
  member_id: number;

  @Column()
  article_id: number;

  @Column()
  position: string;

  @ManyToOne(() => Member)
  @JoinColumn({ name: 'member_id' })
  member: Member;

  @ManyToOne(() => Article)
  @JoinColumn({ name: 'article_id' })
  article: Article;
}