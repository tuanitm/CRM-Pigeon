import { Module } from '@nestjs/common';
import { Customer360Controller } from './customer-360.controller';

@Module({
  controllers: [Customer360Controller],
})
export class AdminModule {}
