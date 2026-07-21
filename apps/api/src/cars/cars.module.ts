import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { RentalsController } from './rentals.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController, RentalsController],
  providers: [CarsService],
})
export class CarsModule {}
