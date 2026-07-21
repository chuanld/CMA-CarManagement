import { SetMetadata } from '@nestjs/common';
import type { UserRole } from '@car-marketplace/database';

export const ROLES_KEY = 'roles';

/** Restricts a route to the given User.role values (checked by RolesGuard). */
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
