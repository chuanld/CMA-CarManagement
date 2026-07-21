import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { AuthService } from './auth.service';
export declare class ClerkAuthGuard implements CanActivate {
    private readonly reflector;
    private readonly config;
    private readonly authService;
    private readonly clerkClient;
    private readonly secretKey;
    constructor(reflector: Reflector, config: ConfigService, authService: AuthService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractToken;
}
