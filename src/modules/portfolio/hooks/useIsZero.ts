import { RootState } from 'modules/redux/rootReducer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { UseIsZeroProps } from '../types';

export const useIsZero = ({ what, tag }: UseIsZeroProps) => {
  const { holdings } = useSelector((state: RootState) => state.holdings);
  const [isZero, setIsZero] = useState(false);

  useEffect(() => {
    const isHolding = holdings.some((holding) => holding.what === what);
    if (!isHolding) {
      setIsZero(true);
      return;
    }
    setIsZero(false);
  }, [holdings, what, tag]);

  return { isZero };
};
