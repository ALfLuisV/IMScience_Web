import { Entity, Column, PrimaryColumn } from 'typeorm';

export enum MemberPosition {
  PROFESSOR = 'professor',
  PHD_STUDENT = 'phd_student',
  MSC_STUDENT = 'msc_student',
  UNDERGRADE_STUDENT = 'undergrade_student',
  VOLUNTEER = 'volunteer',
}

@Entity('members')
export class Member {
  @PrimaryColumn()
  member_id: number;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: MemberPosition })
  position: MemberPosition;

  @Column()
  description: string;

  @Column()
  profile_pic: string;
}
