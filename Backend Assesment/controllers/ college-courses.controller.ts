import { Controller, Get, Param } from '@nestjs/common';
import { CollegeService } from '../services/college.service';

@Controller('college_courses')
export class CollegeCoursesController {
  constructor(private readonly collegeService: CollegeService) {}

  @Get(':college_id')
  async getCourses(@Param('college_id') collegeId: number) {
    return this.collegeService.getCollegeCourses(collegeId);
  }
}