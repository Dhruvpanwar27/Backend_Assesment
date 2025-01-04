import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CollegePlacement } from './entities/college-placement.entity';

@Injectable()
export class CollegeService {
  constructor(
    @InjectRepository(CollegePlacement)
    private readonly placementRepo: Repository<CollegePlacement>,
  ) {}

  async getPlacementData(collegeId: number) {
    // Section 1: Average placement data
    const avgData = await this.placementRepo
      .createQueryBuilder('placement')
      .select('placement.year', 'year')
      .addSelect('AVG(placement.highest_placement)', 'avg_highest')
      .addSelect('AVG(placement.average_placement)', 'avg_average')
      .addSelect('AVG(placement.median_placement)', 'avg_median')
      .addSelect('AVG(placement.placement_rate)', 'avg_rate')
      .where('placement.college_id = :collegeId', { collegeId })
      .andWhere('placement.highest_placement > 0')
      .groupBy('placement.year')
      .getRawMany();

    // Section 2: Placement trend
    const placements = await this.placementRepo.find({
      where: { college_id: collegeId },
      order: { year: 'DESC' },
    });

    let placementTrend = 'STABLE';
    if (placements.length >= 2) {
      const [latest, previous] = placements;
      placementTrend =
        latest.placement_rate > previous.placement_rate
          ? 'UP'
          : latest.placement_rate < previous.placement_rate
          ? 'DOWN'
          : 'STABLE';
    }

    return { avgData, placements, placementTrend };
  }
}
