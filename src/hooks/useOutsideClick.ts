import { useEffect, useRef } from 'react';

export function useOutsideClick<T extends HTMLElement>(
  callback?: VoidFunction,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback?.();
      }
    };
    window.addEventListener('mousedown', onClick);
    return () => window.removeEventListener('mousedown', onClick);
  }, [callback]);
  return ref;
}
