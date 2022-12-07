import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/redux/store';
import { ScrollSyncPane } from 'react-scroll-sync';
import {
  setHowOrder,
  setOrderCoinList,
  setWhatOrder,
} from 'modules/redux/coinList/coinListSlice';

export const Description = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { whatOrder } = useSelector((state: RootState) => state.coinList);

  const dispatch = useDispatch();

  const handleClick = (what: string) => {
    dispatch(setWhatOrder(what));
    if (whatOrder !== what) {
      dispatch(setHowOrder('asc'));
      dispatch(setOrderCoinList());
      return;
    }
  };

  return (
    <ScrollSyncPane>
      <div className={`coin-description main-align ${theme} `}>
        <div className={`coin-description-wrapper g ${theme}`}>
          <span
            className="coin-description-main"
            onClick={() => {
              handleClick('market_cap_rank');
            }}
          >
            #
          </span>
          <span
            className="coin-description-main"
            onClick={() => {
              handleClick('name');
            }}
          >
            Coin
          </span>
        </div>
        <div
          className="coin-description-price-wrapper g"
          id="scrollSyncDescription"
        >
          <span
            className="coin-description-price"
            onClick={() => {
              handleClick('current_price');
            }}
          >
            Price
          </span>
          <span
            className="coin-description-price"
            onClick={() => {
              handleClick('price_change_percentage_1h_in_currency');
            }}
          >
            1h
          </span>
          <span
            className="coin-description-price"
            onClick={() => {
              handleClick('price_change_percentage_24h_in_currency');
            }}
          >
            24h
          </span>
          <span
            className="coin-description-price"
            onClick={() => {
              handleClick('price_change_percentage_7d_in_currency');
            }}
          >
            7d
          </span>
        </div>
      </div>
    </ScrollSyncPane>
  );
};
