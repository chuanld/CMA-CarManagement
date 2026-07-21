import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from '../auth/current-user.decorator';
import type { ResolvedUser } from '../auth/auth.service';

@Controller('users')
export class UsersController {
  /**
   * Equivalent of the Next.js app's actions/user.ts `currentUser()`.
   * Requires auth (no @Public()) — ClerkAuthGuard already resolved and
   * JIT-provisioned the row, so this just returns what's on the request.
   */
  @Get('me')
  getMe(@CurrentUser() user: ResolvedUser): ResolvedUser {
    return user;
  }
}
