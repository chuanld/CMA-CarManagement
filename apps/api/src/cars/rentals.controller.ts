import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import {
  createRentalSchema,
  paginationQuerySchema,
  type CreateRentalInput,
  type PaginationQuery,
} from '@car-marketplace/shared-types';
import { ZodValidationPipe } from '../common/zod-validation.pipe';
import { CurrentUser } from '../auth/current-user.decorator';
import type { ResolvedUser } from '../auth/auth.service';
import { CarsService } from './cars.service';

@Controller('rentals')
export class RentalsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findMine(
    @Query(new ZodValidationPipe(paginationQuerySchema)) query: PaginationQuery,
    @CurrentUser() user: ResolvedUser,
  ) {
    return this.carsService.findRentalsForUser(user.id, query.page, query.limit);
  }

  @Post()
  create(
    @Body(new ZodValidationPipe(createRentalSchema)) dto: CreateRentalInput,
    @CurrentUser() user: ResolvedUser,
  ) {
    return this.carsService.createRental(user, dto);
  }
}
