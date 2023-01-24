import { Watchlist } from 'modules/userProfile';
import { useHoldings } from '../hooks';
import { Summary } from './summary';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setResetTotalBalance } from 'modules/redux/slices/totalBalance';

export const Portfolio = () => {
  const dispatch = useDispatch();
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
