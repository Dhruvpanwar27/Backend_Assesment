import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegeDataController } from './controllers/college-data.controller';
import { CollegeService } from './services/college.service';
import { CollegePlacement } from './entities/college-placement.entity';
import { College } from './entities/college.entity';

@Module({
  imports: [TypeOrmModule.forFeature([College, CollegePlacement])],
  controllers: [CollegeDataController],
  providers: [CollegeService],
})
export class CollegeModule {}