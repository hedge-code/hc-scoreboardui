import { useEffect, useState } from "react";

//https://raw.githubusercontent.com/uidotdev/usehooks/main/index.js
export default function useKeepValueDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return value || debouncedValue;
}
