import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import {
  addCarSchema,
  adminGetCarsInputSchema,
  publicGetCarsQuerySchema,
  updateCarSchema,
  updateCarStatusSchema,
  type AddCarInput,
  type AdminGetCarsInput,
  type PublicGetCarsQuery,
  type UpdateCarInput,
  type UpdateCarStatusInput,
} from '@car-marketplace/shared-types';
import { ZodValidationPipe } from '../common/zod-validation.pipe';
import { Public } from '../auth/public.decorator';
import { Roles } from '../auth/roles.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { ResolvedUser } from '../auth/auth.service';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Public()
  @Get('filters')
  getFilters() {
    return this.carsService.getFilters();
  }

  @Get('saved')
  getSaved(@CurrentUser() user: ResolvedUser) {
    return this.carsService.findSavedForUser(user.id);
  }

  @Roles('ADMIN')
  @Post('admin/search')
  findAdmin(
    @Body(new ZodValidationPipe(adminGetCarsInputSchema)) dto: AdminGetCarsInput,
  ) {
    return this.carsService.findAdmin(dto);
  }

  @Roles('ADMIN')
  @Get('admin/:id')
  findAdminById(@Param('id') id: string) {
    return this.carsService.findAdminById(id);
  }

  @Roles('ADMIN')
  @Patch('admin/:id')
  updateAdmin(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateCarSchema)) dto: UpdateCarInput,
    @CurrentUser() user: ResolvedUser,
  ) {
    return this.carsService.updateAdmin(id, user, dto);
  }

  @Public()
  @Get(':id')
  findPublicById(@Param('id') id: string, @CurrentUser() user?: ResolvedUser) {
    return this.carsService.findPublicById(id, user?.id);
  }

  @Public()
  @Get()
  findPublic(
    @Query(new ZodValidationPipe(publicGetCarsQuerySchema)) query: PublicGetCarsQuery,
    @CurrentUser() user?: ResolvedUser,
  ) {
    return this.carsService.findPublic(query, user?.id);
  }

  @Post()
  create(
    @Body(new ZodValidationPipe(addCarSchema)) dto: AddCarInput,
    @CurrentUser() user: ResolvedUser,
  ) {
    return this.carsService.create(user, dto);
  }

  @Post(':id/save')
  toggleSaved(@Param('id') id: string, @CurrentUser() user: ResolvedUser) {
    return this.carsService.toggleSaved(id, user.id);
  }

  @Roles('ADMIN')
  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateCarStatusSchema)) dto: UpdateCarStatusInput,
  ) {
    return this.carsService.updateStatus(id, dto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(id);
  }
}
