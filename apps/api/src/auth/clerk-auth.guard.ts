import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { createClerkClient, verifyToken, type ClerkClient } from '@clerk/backend';
import type { Request } from 'express';
import { IS_PUBLIC_KEY } from './public.decorator';
import { AuthService } from './auth.service';

/**
 * Verifies the Clerk session JWT sent as `Authorization: Bearer <token>`,
 * then resolves (and JIT-provisions) the local User row via AuthService.
 * Replaces middleware.ts's clerkMiddleware route-gating from the Next.js app
 * with per-route guards instead — routes require auth by default; opt out
 * with @Public().
 */
@Injectable()
export class ClerkAuthGuard implements CanActivate {
  private readonly clerkClient: ClerkClient;
  private readonly secretKey: string;

  constructor(
    private readonly reflector: Reflector,
    private readonly config: ConfigService,
    private readonly authService: AuthService,
  ) {
    this.secretKey = this.config.getOrThrow<string>('CLERK_SECRET_KEY');
    this.clerkClient = createClerkClient({ secretKey: this.secretKey });
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractToken(request);

    if (!token) {
      if (isPublic) return true;
      throw new UnauthorizedException('Missing bearer token');
    }

    try {
      const payload = await verifyToken(token, { secretKey: this.secretKey });
      const clerkUser = await this.clerkClient.users.getUser(payload.sub);

      (request as Request & { user?: unknown }).user =
        await this.authService.resolveCurrentUser({
          clerkUserId: clerkUser.id,
          email: clerkUser.emailAddresses[0]?.emailAddress ?? '',
          firstName: clerkUser.firstName,
          lastName: clerkUser.lastName,
          imageUrl: clerkUser.imageUrl,
        });

      return true;
    } catch {
      if (isPublic) return true;
      throw new UnauthorizedException('Invalid or expired token');
    }
  }

  private extractToken(request: Request): string | undefined {
    const header = request.headers.authorization;
    if (!header) return undefined;
    const [type, token] = header.split(' ');
    return type === 'Bearer' ? token : undefined;
  }
}
