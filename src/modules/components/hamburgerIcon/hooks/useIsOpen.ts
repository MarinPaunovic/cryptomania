import { useEffect, useState } from 'react';

export const useIsOpen = (menuToggle: string) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (menuToggle === 'open') {
      setIsOpen(true);
      return;
    }
    setIsOpen(false);
  }, [menuToggle]);

  return { isOpen };
};
