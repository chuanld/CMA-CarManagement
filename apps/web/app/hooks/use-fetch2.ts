import { useState } from "react";
import { toast } from "sonner";

type AsyncFunction<T> = (...args: any[]) => Promise<T>;

export const useFetch2v = <T>(cb: AsyncFunction<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (...args: Parameters<typeof cb>) => {
    setLoading(true);
    setError(null);

    try {
      const result = await cb(...args);
      setData(result);
      return result;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unexpected error";
      toast.error(message);
      setError(err instanceof Error ? err : new Error(String(err)));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};
