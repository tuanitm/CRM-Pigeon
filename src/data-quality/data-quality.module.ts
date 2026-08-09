import { Module } from '@nestjs/common';
import { DataQualityService } from './data-quality.service';
import { PrismaModule } from '../shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DataQualityService],
  exports: [DataQualityService],
})
export class DataQualityModule {}
