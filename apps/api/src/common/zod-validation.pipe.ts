import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import type { ZodType } from 'zod';

/**
 * nestjs-zod's createZodDto() depends on @nest-zod/z, which pins zod v3
 * internally — its type inference breaks against this workspace's zod v4
 * schemas. This is a minimal replacement: pass a shared zod schema per
 * route param, get a typed, validated value back.
 */
export class ZodValidationPipe<T> implements PipeTransform<unknown, T> {
  constructor(private readonly schema: ZodType<T>) {}

  transform(value: unknown, _metadata: ArgumentMetadata): T {
    const result = this.schema.safeParse(value);
    if (!result.success) {
      throw new BadRequestException(result.error.issues);
    }
    return result.data;
  }
}
