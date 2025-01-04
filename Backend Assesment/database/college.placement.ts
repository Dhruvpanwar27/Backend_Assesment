import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class CollegePlacement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  college_id: number;

  @Column()
  year: number;

  @Column({ type: 'float' })
  highest_placement: number;

  @Column({ type: 'float' })
  average_placement: number;

  @Column({ type: 'float' })
  median_placement: number;

  @Column({ type: 'float' })
  placement_rate: number;
}