import { Watchlist } from 'modules/userProfile';
import { useHoldings, useTotalBalance } from '../hooks';
import { Summary } from './summary';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setResetTotalBalance } from 'modules/redux/slices/totalBalance';

export const Portfolio = () => {
  const dispatch = useDispatch();
  useTotalBalance();
  useHoldings();

  useEffect(() => {
    return () => {
      dispatch(setResetTotalBalance());
    };
  }, [dispatch]);

  return (
    <div>
      <Summary />
      <Watchlist />
    </div>
  );
};
