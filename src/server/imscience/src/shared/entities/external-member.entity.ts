import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('external_members')
export class ExternalMember {
  @PrimaryColumn()
  external_members_id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  cpf: string;

  @Column()
  country: string;

  @Column()
  institution: string;
}