import { RootState } from 'modules/redux/rootReducer';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useCurrencyConvert } from 'shared';

export const useGetTotalBalance = () => {
  const [totalBalance, setTotalBalance] = useState<string>();
  const { balance } = useSelector((state: RootState) => state.totalBalance);
  const { currency } = useCurrencyConvert(balance);

  useEffect(() => {
    if (!balance) return;
    setTotalBalance(currency);
  }, [balance, currency]);

  return { totalBalance };
};
