import { useEffect } from 'react';

export const useScrollToggle = (isOpen: boolean, element: string) => {
  useEffect(() => {
    let padding = '0px';
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ) {
      padding = '17px';
    }
    const obj = document.getElementById(`${element}`);
    if (!isOpen) {
      document.body.style.overflowY = 'auto';
      if (obj) Object.assign(obj.style, { 'padding-right': '0px' });
      return;
    }
    document.body.style.overflowY = 'hidden';
    if (obj) Object.assign(obj.style, { 'padding-right': padding });
  }, [isOpen, element]);
};
