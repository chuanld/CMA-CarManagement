"use client";
import { useState } from "react";
import { toast } from "sonner";

const useFetch = <T>(cb: any) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (...args: any) => {
    setLoading(true);
    setError(null);
    try {
      const result = await cb(...args);
      setData(result);
      setError(null);
      if(result?.success === false){
        setError(result?.error)
      }
      console.log(result)
    } catch (err: unknown) {
      console.log(err,'rreee')
      const message = err instanceof Error ? err.message : "Unexpected error";
      toast.error(message);
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData, setData };
};

export default useFetch;
