import { Watchlist } from 'modules/userProfile';
import { useHoldings, useTotalBalance } from '../hooks';
import { Summary } from './summary';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setResetTotalBalance } from 'modules/redux/slices/totalBalance';
import { useFavorites } from 'shared';
import { Link } from 'react-router-dom';

export const Portfolio = () => {
  const { favorites } = useFavorites();
  const dispatch = useDispatch();
  useTotalBalance();
  useHoldings();

  useEffect(() => {
    return () => {
      dispatch(setResetTotalBalance());
    };
  }, [dispatch]);

  if (!favorites.length)
    return (
      <h2 className="portfolio__favorites--empty ffam-content">
        You don't have any coins added to favorites, go to{' '}
        <Link to={'/'} className={`portfolio__favorites-link`}>
          homepage
        </Link>{' '}
        to add some
      </h2>
    );

  return (
    <div>
      <Summary />
      <Watchlist />
    </div>
  );
};
