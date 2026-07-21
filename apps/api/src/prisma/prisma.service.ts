import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { db, PrismaClient } from '@car-marketplace/database';

/**
 * Wraps the shared `db` singleton from @car-marketplace/database so Nest
 * manages its connection lifecycle explicitly, instead of relying on the
 * Next.js-HMR-specific globalThis caching that singleton also does.
 */
@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  readonly client: PrismaClient = db;

  async onModuleInit() {
    await this.client.$connect();
  }

  async onModuleDestroy() {
    await this.client.$disconnect();
  }
}
