"use client";

import { useCallback } from "react";
import { useSearchParams } from "next/navigation";

/**
 * Create a query string with the given name and value.
 * @returns {Function} Function to create a query string.
 * @example
 * ```tsx
 * import { useCreateQueryString } from "@bolabali/hooks";
 *
 * export default function MyComponent() {
 *  const createQueryString = useCreateQueryString();
 *
 *  const queryString = createQueryString("name", "value");
 *
 *  return <p>{queryString}</p>;
 * }
 * ```
 */
export function useCreateQueryString() {
  const searchParams = useSearchParams();
  return useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );
}