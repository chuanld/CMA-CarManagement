import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {
  createDealerSchema,
  toggleDealerArchiveSchema,
  updateDealerSchema,
  type CreateDealerInput,
  type ToggleDealerArchiveInput,
  type UpdateDealerInput,
} from '@car-marketplace/shared-types';
import { ZodValidationPipe } from '../common/zod-validation.pipe';
import { Roles } from '../auth/roles.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { ResolvedUser } from '../auth/auth.service';
import { DealersService } from './dealers.service';

@Roles('ADMIN')
@Controller('dealers')
export class DealersController {
  constructor(private readonly dealersService: DealersService) {}

  @Get()
  findAll(@CurrentUser() user: ResolvedUser) {
    return this.dealersService.findAllForOwner(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: ResolvedUser) {
    return this.dealersService.findOneForOwner(id, user.id);
  }

  @Post()
  create(
    @Body(new ZodValidationPipe(createDealerSchema)) dto: CreateDealerInput,
    @CurrentUser() user: ResolvedUser,
  ) {
    return this.dealersService.create(user, dto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateDealerSchema)) dto: UpdateDealerInput,
    @CurrentUser() user: ResolvedUser,
  ) {
    return this.dealersService.update(id, user.id, dto);
  }

  @Patch(':id/archive')
  toggleArchive(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(toggleDealerArchiveSchema))
    dto: ToggleDealerArchiveInput,
    @CurrentUser() user: ResolvedUser,
  ) {
    return this.dealersService.toggleArchive(id, user.id, dto.isArchived);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user: ResolvedUser) {
    return this.dealersService.remove(id, user.id);
  }
}
