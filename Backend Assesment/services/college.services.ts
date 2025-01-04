import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CollegePlacement } from '../entities/college-placement.entity';
import { CollegeCourse } from '../entities/college-course.entity';
import { College } from '../entities/college.entity';

@Injectable()
export class CollegeService {
  constructor(
    @InjectRepository(CollegePlacement)
    private readonly collegePlacementRepository: Repository<CollegePlacement>,
  ) {}

  async getPlacementData(collegeId: number) {
    // Section 1: avg_section
    const avgSection = await this.collegePlacementRepository
      .createQueryBuilder('placement')
      .select('placement.year', 'year')
      .addSelect('AVG(placement.highest_placement)', 'avg_highest')
      .addSelect('AVG(placement.average_placement)', 'avg_average')
      .addSelect('AVG(placement.median_placement)', 'avg_median')
      .addSelect('AVG(placement.placement_rate)', 'avg_rate')
      .where('placement.college_id = :collegeId', { collegeId })
      .andWhere('placement.highest_placement > 0')
      .andWhere('placement.average_placement > 0')
      .andWhere('placement.median_placement > 0')
      .andWhere('placement.placement_rate > 0')
      .groupBy('placement.year')
      .getRawMany();

    // Section 2: placement_section
    const placementSection = await this.collegePlacementRepository.find({
      where: { collegeId },
      order: { year: 'ASC' },
    });

    const placementTrend = placementSection.map((placement, index) => {
      if (index === 0) return { ...placement, placement_trend: 'N/A' };

      const prevPlacement = placementSection[index - 1];
      const trend =
        placement.placement_rate > prevPlacement.placement_rate
          ? 'UP'
          : 'DOWN';
      return { ...placement, placement_trend: trend };
    });

    return {
      avg_section: avgSection,
      placement_section: placementTrend,
    };
  }
  export class CollegeService {
    constructor(
      @InjectRepository(CollegeCourse)
      private readonly collegeCourseRepository: Repository<CollegeCourse>,
      @InjectRepository(College)
      private readonly collegeRepository: Repository<College>,
    ) {}
  
    // Logic for /college_courses/{college_id}
    async getCollegeCourses(collegeId: number) {
      return this.collegeCourseRepository.find({
        where: { collegeId },
        order: { courseFee: 'DESC' },
      });

  async filterColleges(city?: string, state?: string) {
    const query = this.collegeRepository.createQueryBuilder('college');

    if (city) {
      query.andWhere('college.city_id = :city', { city });
    }

    if (state) {
      query.andWhere('college.state_id = :state', { state });
    }

    return query.orderBy('college.score', 'DESC').getMany();
  }
}
