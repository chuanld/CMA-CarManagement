import { ConfigService } from '@nestjs/config';
import { SupabaseClient } from '@supabase/supabase-js';
export declare class SupabaseService {
    private readonly config;
    readonly client: SupabaseClient;
    constructor(config: ConfigService);
}
