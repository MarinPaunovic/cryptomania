import { useState, useEffect } from 'react';

export const useCurrencyConvert = (number: number) => {
  const [currency, setCurrency] = useState<string>('');

  const convertedCurrency = number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  useEffect(() => {
    setCurrency(convertedCurrency);
  }, [convertedCurrency]);

  return { currency };
};
