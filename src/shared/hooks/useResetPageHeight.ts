import { useEffect } from 'react';

export const useResetPageHeight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('beforeunload', () => {
      window.scrollTo(0, 0);
    });
    return () => {
      window.removeEventListener('beforeunload', () => {
        window.scrollTo(0, 0);
      });
    };
  }, []);
};
