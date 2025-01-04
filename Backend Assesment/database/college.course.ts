import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class CollegeWiseCourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  college_id: number;

  @Column()
  course_name: string;

  @Column()
  course_duration: number;

  @Column({ type: 'float' })
  course_fee: number;
}