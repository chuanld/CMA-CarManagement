import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { Request } from 'express';
import type { UserRole } from '@car-marketplace/database';
import { ROLES_KEY } from './roles.decorator';
import type { ResolvedUser } from './auth.service';

/**
 * Replaces the ad-hoc getAdmin() role checks duplicated across
 * admin.ts/dealers.ts/cars.ts/purchases.ts with a single declarative guard.
 * Runs after ClerkAuthGuard, which populates request.user.
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles || requiredRoles.length === 0) return true;

    const { user } = context
      .switchToHttp()
      .getRequest<Request & { user?: ResolvedUser }>();

    if (!user) {
      throw new ForbiddenException('Authentication required');
    }
    if (!requiredRoles.includes(user.role)) {
      throw new ForbiddenException('Insufficient role');
    }
    return true;
  }
}
