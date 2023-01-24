import { setActive } from 'modules/redux/slices/portfolioSlice';
import { RootState } from 'modules/redux/rootReducer';
import { Watchlist } from 'modules/userProfile';
import { useDispatch, useSelector } from 'react-redux';
import { Portfolio } from './portfolio';

export const PortfolioWrapper = () => {
  const { active } = useSelector((state: RootState) => state.portfolio);
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <div className={`portfolio-wrapper main-align ${theme}`}>
      <div className="portfolio-actions fr jcc">
        {active === 'watchlist' ? (
          <h1>Watchlist</h1>
        ) : (
          <button onClick={() => dispatch(setActive('watchlist'))}>Watchlist</button>
        )}
        {active === 'portfolio' ? (
          <h1>My Portfolio</h1>
        ) : (
          <button onClick={() => dispatch(setActive('portfolio'))}>Portfolio</button>
        )}
      </div>
      {active === 'watchlist' ? <Watchlist /> : <Portfolio />}
    </div>
  );
};
