import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * Storage-only Supabase access for the backend (e.g. cleaning up car images
 * on delete). Uploads themselves stay client-side per the confirmed
 * migration decision — this is the one place the backend still touches
 * Supabase Storage directly, using the same anon key apps/web already uses
 * (lib/supabase.ts) since the "car-images" bucket's policies already allow it.
 */
@Injectable()
export class SupabaseService {
  readonly client: SupabaseClient;

  constructor(private readonly config: ConfigService) {
    this.client = createClient(
      this.config.getOrThrow<string>('NEXT_PUBLIC_SUPABASE_URLV2'),
      this.config.getOrThrow<string>('NEXT_PUBLIC_SUPABASE_ANON_KEYV2'),
    );
  }
}
