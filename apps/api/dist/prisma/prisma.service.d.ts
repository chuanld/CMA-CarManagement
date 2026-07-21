import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@car-marketplace/database';
export declare class PrismaService implements OnModuleInit, OnModuleDestroy {
    readonly client: PrismaClient;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
