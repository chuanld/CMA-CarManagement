import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { ResolvedUser } from './auth.service';

/** Injects the User row resolved by ClerkAuthGuard (undefined on @Public() routes with no token). */
export const CurrentUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): ResolvedUser | undefined => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
