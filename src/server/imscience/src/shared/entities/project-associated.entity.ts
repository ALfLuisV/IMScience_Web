import { Entity, Column, PrimaryColumn } from 'typeorm';

export enum ProjectMemberType {
  PERSONAL = 'personal',
  ORGANIZATION = 'organization',
}

@Entity('project_associated')
export class ProjectAssociated {
  @PrimaryColumn()
  project_associated_id: number;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: ProjectMemberType })
  type: ProjectMemberType;

  @Column()
  cpf_cnpj: string;
}