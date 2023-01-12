import { useEffect } from 'react';

export const useScrollToggle = (isOpen: boolean) => {
  useEffect(() => {
    const styles = {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      'padding-right': '17px',
    };
    if (!isOpen) {
      const obj = document.getElementById('homepage');
      if (obj) Object.assign(obj.style, { position: 'static', 'padding-right': '0px' });
      return;
    }

    const obj = document.getElementById('homepage');
    if (obj) Object.assign(obj.style, styles);
  }, [isOpen]);
};
