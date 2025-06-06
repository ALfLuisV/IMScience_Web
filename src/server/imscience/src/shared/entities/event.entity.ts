import { Entity, Column, PrimaryColumn } from 'typeorm';

export enum EventMode {
  ONLINE = 'online',
  ONSITE = 'onsite',
}

@Entity('events')
export class Event {
  @PrimaryColumn()
  event_id: number;

  @Column()
  name: string;

  @Column({ type: 'date' })
  event_date: Date;

  @Column()
  location: string;

  @Column({ type: 'enum', enum: EventMode })
  mode: EventMode;

  @Column()
  type: string;

  @Column()
  audiencia: string;
}