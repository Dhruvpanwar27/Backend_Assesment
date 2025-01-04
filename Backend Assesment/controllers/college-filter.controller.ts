import { Controller, Get, Query } from '@nestjs/common';
import { CollegeService } from '../services/college.service';

@Controller('colleges')
export class CollegeFilterController {
  constructor(private readonly collegeService: CollegeService) {}

  @Get()
  async filterColleges(@Query('city') city?: string, @Query('state') state?: string) {
    return this.collegeService.filterColleges(city, state);
  }
}
