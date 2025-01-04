import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { College } from './college.entity';

@Entity()
export class CollegePlacement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => College, (college) => college.placements)
  college: College;

  @Column()
  year: number;

  @Column({ type: 'float', nullable: false })
  highest_placement: number;

  @Column({ type: 'float', nullable: false })
  average_placement: number;

  @Column({ type: 'float', nullable: false })
  median_placement: number;

  @Column({ type: 'float', nullable: false })
  placement_rate: number;
}
