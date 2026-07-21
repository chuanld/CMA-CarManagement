import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthService } from './auth.service';
import { ClerkAuthGuard } from './clerk-auth.guard';
import { RolesGuard } from './roles.guard';

@Module({
  providers: [
    AuthService,
    { provide: APP_GUARD, useClass: ClerkAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
  exports: [AuthService],
})
export class AuthModule {}
