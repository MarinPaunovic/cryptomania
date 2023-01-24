import { setTotalBalance } from 'modules/redux/slices/totalBalance';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { UseTotalBalanceProps } from '../types';

export const useTotalBalance = ({ amount, price }: UseTotalBalanceProps) => {
  const [singleHoldingValue, setSingleHoldingValue] = useState<number>(0);
  const [prevPrice, setPrevPrice] = useState(0);
  const dispatch = useDispatch();
  const firstRender = useRef(true);

  useEffect(() => {
    if (!amount) return;
    const multiply = amount * price;
    if (firstRender.current) {
      setPrevPrice(price);
      dispatch(setTotalBalance({ amount: multiply }));
      setSingleHoldingValue(multiply);
      firstRender.current = false;
      return;
    }
    if (prevPrice !== price) {
      dispatch(setTotalBalance({ amount: prevPrice * amount, minus: true }));
      setSingleHoldingValue(multiply);
      dispatch(setTotalBalance({ amount: multiply }));
      setPrevPrice(price);
      return;
    }
    setSingleHoldingValue(amount * price);
  }, [dispatch, amount, price, prevPrice]);

  return { singleHoldingValue };
};
