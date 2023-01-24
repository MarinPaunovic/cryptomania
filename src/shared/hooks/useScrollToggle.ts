import { useEffect } from 'react';

export const useScrollToggle = (isOpen: boolean, element: string) => {
  useEffect(() => {
    const obj = document.getElementById(`${element}`);
    const styles = {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      height: 'fit-content',
      'padding-right': '17px',
    };

    if (!isOpen) {
      const obj = document.getElementById(`${element}`);
      if (obj) Object.assign(obj.style, { position: 'static', 'padding-right': '0px' });
      return;
    }

    if (obj) Object.assign(obj.style, styles);
  }, [isOpen, element]);
};
