import { auth } from "@clerk/nextjs/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

/**
 * Server-side fetch wrapper for the NestJS API (apps/api). Attaches the
 * current Clerk session token so ClerkAuthGuard can resolve the caller.
 * Single place to hold the API base URL and auth-header logic, so each
 * migrated domain doesn't repeat this wiring.
 */
export async function apiFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  const { getToken } = await auth();
  const token = await getToken();

  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...init.headers,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(await extractErrorMessage(res, path));
  }

  return res.json() as Promise<T>;
}

/** Nest's exception filters return { message, error, statusCode }; message can be a string or a zod-issues array. */
async function extractErrorMessage(res: Response, path: string): Promise<string> {
  try {
    const body = await res.json();
    if (typeof body.message === "string") return body.message;
    if (Array.isArray(body.message)) {
      return body.message
        .map((issue: unknown) =>
          typeof issue === "string"
            ? issue
            : ((issue as { message?: string })?.message ?? JSON.stringify(issue)),
        )
        .join(", ");
    }
  } catch {
    // response body wasn't JSON
  }
  return `API ${path} failed: ${res.status}`;
}
