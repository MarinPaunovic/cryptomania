import { useDispatch, useSelector } from 'react-redux';
import { ScrollSyncPane } from 'react-scroll-sync';
import { setHowOrder, setOrderCoinList, setWhatOrder } from 'modules/redux/slices/coinListSlice';
import { useEffect, useRef } from 'react';
import { RootState } from 'modules/redux/rootReducer';

export const Description = () => {
  const { whatOrder, howOrder } = useSelector((state: RootState) => state.coinList);
  const { active } = useSelector((state: RootState) => state.portfolio);
  const { theme } = useSelector((state: RootState) => state.theme);
  const firstRender = useRef(false);
  const dispatch = useDispatch();

  const handleClick = (what: string) => {
    dispatch(setWhatOrder(what));
    if (whatOrder !== what) {
      dispatch(setHowOrder('asc'));
      dispatch(setOrderCoinList());
      return;
    }
    if (howOrder === 'desc') dispatch(setHowOrder('asc'));
    else dispatch(setHowOrder('desc'));
    dispatch(setOrderCoinList());
  };

  useEffect(() => {
    if (!firstRender.current) {
      firstRender.current = true;
      return;
    }
    return () => {
      dispatch(setWhatOrder(''));
      dispatch(setHowOrder('asc'));
      dispatch(setOrderCoinList());
    };
  }, [dispatch]);

  return (
    <ScrollSyncPane>
      <div className={`coin-description main-align ${theme} `}>
        <div className={`coin-description-wrapper g ${theme}`}>
          <div></div>
          <button
            className={`coin-description-main ${theme}`}
            onClick={() => {
              handleClick('market_cap_rank');
            }}
          >
            #
          </button>
          <button
            className={`coin-description-main ${theme}`}
            onClick={() => {
              handleClick('name');
            }}
          >
            Coin
          </button>
        </div>
        <div
          className={
            active === 'portfolio'
              ? 'coin-description-price-wrapper g portfolio--active'
              : 'coin-description-price-wrapper g'
          }
          id="scrollSyncDescription"
        >
          <button
            className={`coin-description-price ${theme}`}
            onClick={() => {
              handleClick('current_price');
            }}
          >
            Price
          </button>
          <button
            className={`coin-description-price ${theme}`}
            onClick={() => {
              handleClick('price_change_percentage_1h_in_currency');
            }}
          >
            1h
          </button>
          <button
            className={`coin-description-price ${theme}`}
            onClick={() => {
              handleClick('price_change_percentage_24h_in_currency');
            }}
          >
            24h
          </button>
          <button
            className={`coin-description-price ${theme}`}
            onClick={() => {
              handleClick('price_change_percentage_7d_in_currency');
            }}
          >
            7d
          </button>
          {active === 'portfolio' && (
            <button className={`portfolio__wrapper-holdings f asc jsfe ${theme}`}>Holdings</button>
          )}
        </div>
      </div>
    </ScrollSyncPane>
  );
};
