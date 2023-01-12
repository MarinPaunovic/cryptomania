import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';
import { CoinProps } from 'shared/types';
import { Favorites } from './favorites';

export const Coin: React.FC<CoinProps> = ({ item }) => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const { auth } = useSelector((state: RootState) => state.auth);

  return (
    <div className={`coin-list-wrapper ${theme}`}>
      <div className={`coin-list-description-wrapper g ${theme}`}>
        {!auth.uid ? <></> : <Favorites name={item.name} />}
        <div className="coin-list-rank">{item.market_cap_rank}</div>
        <div className="coin-list-name-wrapper">
          <img className="coin-list-image" src={item.image} />
          <div className="coin-list-name f">
            <span>{item.name}</span>
            <span>{item.symbol.toUpperCase()}</span>
          </div>
        </div>
      </div>
      <div className="coin-list-price-wrapper g" id="scrollSyncList">
        <div className="coin-list-price">${item.current_price}</div>
        <div
          className="coin-list-price"
          style={
            item.price_change_percentage_1h_in_currency < 0
              ? { color: 'red' }
              : { color: '#00e200' }
          }
        >
          {Math.round(item.price_change_percentage_1h_in_currency * 10) / 10}%
        </div>
        <div
          className="coin-list-price"
          style={
            item.price_change_percentage_24h_in_currency < 0
              ? { color: 'red' }
              : { color: '#00e200' }
          }
        >
          {Math.round(item.price_change_percentage_24h_in_currency * 10) / 10}%
        </div>
        <div
          className="coin-list-price"
          style={
            item.price_change_percentage_7d_in_currency < 0
              ? { color: 'red' }
              : { color: '#00e200' }
          }
        >
          {Math.round(item.price_change_percentage_7d_in_currency * 10) / 10}%
        </div>
      </div>
    </div>
  );
};
