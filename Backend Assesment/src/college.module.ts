import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegeDataController } from './controllers/college-data.controller';
import { CollegeCoursesController } from './controllers/college-courses.controller';
import { CollegeFilterController } from './controllers/college-filter.controller';
import { CollegeService } from './services/college.service';
import { College } from './entities/college.entity';
import { CollegePlacement } from './entities/college-placement.entity';
import { CollegeCourse } from './entities/college-course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([College, CollegePlacement, CollegeCourse])],
  controllers: [CollegeDataController, CollegeCoursesController, CollegeFilterController],
  providers: [CollegeService],
})
export class CollegeModule {}