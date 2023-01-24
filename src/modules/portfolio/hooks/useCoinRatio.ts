import { RootState } from 'modules/redux/rootReducer';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCoinRatioProps } from '../types';

export const useCoinRatio = ({ amount, price }: useCoinRatioProps) => {
  const [prevBalance, setPrevBalance] = useState(0);
  const [ratio, setRatio] = useState(0);
  const { balance } = useSelector((state: RootState) => state.totalBalance);
  const firstRender = useRef(true);

  useEffect(() => {
    if (!amount || !balance) return;
    const multiply = amount * price;
    if (firstRender.current) {
      setRatio(Math.floor((multiply / balance) * 100 * 100) / 100);
      setPrevBalance(balance);
      firstRender.current = false;
      return;
    }
    if (prevBalance !== balance) {
      setRatio(Math.floor((multiply / balance) * 100 * 100) / 100);
      setPrevBalance(balance);
    }
  }, [balance, amount, price, prevBalance]);

  return { ratio };
};
