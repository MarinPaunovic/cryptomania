import { useEffect, useState } from 'react';
export const useTimer = () => {
  const [isCopy, setIsCopy] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopy(true);
    }, 2500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return isCopy;
};
