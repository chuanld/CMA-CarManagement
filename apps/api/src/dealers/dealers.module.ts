import { Module } from '@nestjs/common';
import { DealersController } from './dealers.controller';
import { DealersService } from './dealers.service';

@Module({
  controllers: [DealersController],
  providers: [DealersService],
})
export class DealersModule {}
