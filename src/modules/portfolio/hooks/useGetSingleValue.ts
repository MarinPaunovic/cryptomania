import { useState, useEffect } from 'react';
import { UseGetSingleValueProps } from '../types';

export const useGetSingleValue = ({ amount, price }: UseGetSingleValueProps) => {
  const [singleValue, setSingleValue] = useState(0);

  useEffect(() => {
    setSingleValue(amount * price);
  }, [amount, price]);

  return { singleValue };
};
