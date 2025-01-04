import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class College {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'int', unsigned: true, default: 0 })
  score: number;

  @Column()
  city_id: number;

  @Column()
  state_id: number;
}