"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClerkAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const backend_1 = require("@clerk/backend");
const public_decorator_1 = require("./public.decorator");
const auth_service_1 = require("./auth.service");
let ClerkAuthGuard = class ClerkAuthGuard {
    reflector;
    config;
    authService;
    clerkClient;
    secretKey;
    constructor(reflector, config, authService) {
        this.reflector = reflector;
        this.config = config;
        this.authService = authService;
        this.secretKey = this.config.getOrThrow('CLERK_SECRET_KEY');
        this.clerkClient = (0, backend_1.createClerkClient)({ secretKey: this.secretKey });
    }
    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        const request = context.switchToHttp().getRequest();
        const token = this.extractToken(request);
        if (!token) {
            if (isPublic)
                return true;
            throw new common_1.UnauthorizedException('Missing bearer token');
        }
        try {
            const payload = await (0, backend_1.verifyToken)(token, { secretKey: this.secretKey });
            const clerkUser = await this.clerkClient.users.getUser(payload.sub);
            request.user =
                await this.authService.resolveCurrentUser({
                    clerkUserId: clerkUser.id,
                    email: clerkUser.emailAddresses[0]?.emailAddress ?? '',
                    firstName: clerkUser.firstName,
                    lastName: clerkUser.lastName,
                    imageUrl: clerkUser.imageUrl,
                });
            return true;
        }
        catch {
            if (isPublic)
                return true;
            throw new common_1.UnauthorizedException('Invalid or expired token');
        }
    }
    extractToken(request) {
        const header = request.headers.authorization;
        if (!header)
            return undefined;
        const [type, token] = header.split(' ');
        return type === 'Bearer' ? token : undefined;
    }
};
exports.ClerkAuthGuard = ClerkAuthGuard;
exports.ClerkAuthGuard = ClerkAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        config_1.ConfigService,
        auth_service_1.AuthService])
], ClerkAuthGuard);
//# sourceMappingURL=clerk-auth.guard.js.map