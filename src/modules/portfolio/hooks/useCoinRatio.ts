import { RootState } from 'modules/redux/rootReducer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCoinRatioProps } from '../types';

export const useCoinRatio = ({ amount, price }: useCoinRatioProps) => {
  const [ratio, setRatio] = useState(0);
  const { balance } = useSelector((state: RootState) => state.totalBalance);

  useEffect(() => {
    if (!amount || !balance) return;
    const multiply = amount * price;
    setRatio(Math.floor((multiply / balance) * 100 * 100) / 100);
  }, [balance, amount, price]);

  return { ratio };
};
