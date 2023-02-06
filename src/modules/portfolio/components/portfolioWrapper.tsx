import { setActive } from 'modules/redux/slices/portfolioSlice';
import { RootState } from 'modules/redux/rootReducer';
import { Watchlist } from 'modules/userProfile';
import { useDispatch, useSelector } from 'react-redux';
import { Portfolio } from './portfolio';
import { useFavorites } from 'shared';
import { Link } from 'react-router-dom';

export const PortfolioWrapper = () => {
  const { active } = useSelector((state: RootState) => state.portfolio);
  const { favorites } = useFavorites();
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <div
      className={
        active === 'watchlist'
          ? `portfolio__wrapper portfolio__wrapper-watchlist main-align ${theme}`
          : `portfolio__wrapper portfolio__wrapper-portfolio main-align ${theme}`
      }
    >
      <div className={`portfolio__actions fr main-align ${theme}`}>
        {active === 'watchlist' ? (
          <h1 className="portfolio__actions-title portfolio__actions-title--active ffam-content">
            Watchlist
          </h1>
        ) : (
          <button
            className={`portfolio__actions-button ${theme}`}
            onClick={() => dispatch(setActive('watchlist'))}
          >
            Watchlist
          </button>
        )}
        {active === 'portfolio' ? (
          <h1 className="portfolio__actions-title portfolio__actions-title--active ffam-content">
            My Portfolio
          </h1>
        ) : (
          <button
            className={`portfolio__actions-button ${theme}`}
            onClick={() => dispatch(setActive('portfolio'))}
          >
            My Portfolio
          </button>
        )}
      </div>
      {active === 'watchlist' ? (
        favorites.length ? (
          <Watchlist />
        ) : (
          <h2 className="portfolio__favorites--empty ffam-content">
            You don't have any coins added to favorites, go to{' '}
            <Link to={'/'} className={`portfolio__favorites-link`}>
              homepage
            </Link>{' '}
            to add some
          </h2>
        )
      ) : (
        <Portfolio />
      )}
    </div>
  );
};
