import { Controller, Get, Param } from '@nestjs/common';
import { CollegeService } from '../services/college.service';

@Controller('college_data')
export class CollegeDataController {
  constructor(private readonly collegeService: CollegeService) {}

  @Get(':college_id')
  async getPlacementData(@Param('college_id') collegeId: number) {
    return this.collegeService.getPlacementData(collegeId);
  }
}