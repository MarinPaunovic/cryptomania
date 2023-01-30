import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Amount, HoldingsModal } from 'modules/portfolio';
import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';
import { CoinProps } from 'shared/types';
import { Favorites } from './favorites';
import { useState, useEffect } from 'react';

export const Coin: React.FC<CoinProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const { holdings } = useSelector((state: RootState) => state.holdings);
  const { active } = useSelector((state: RootState) => state.portfolio);
  const { theme } = useSelector((state: RootState) => state.theme);
  const { auth } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const find = holdings.find((holding) => holding.what === item.name);
    if (find && find.amount) {
      setAmount(find.amount);
      return;
    }
    setAmount(0);
  }, [holdings, item, amount]);

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
      <div
        className={
          active === 'portfolio'
            ? 'coin-list-price-wrapper g portfolio--active'
            : 'coin-list-price-wrapper g'
        }
        id="scrollSyncList"
      >
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
        {active === 'portfolio' && (
          <Amount amount={amount} tag={item.symbol} price={item.current_price} />
        )}
        {active === 'portfolio' && (
          <button
            className={`portfolio__wrapper-add f asc jsc ${theme}`}
            onClick={() => setIsOpen(true)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        )}
      </div>
      <HoldingsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        what={item.name}
        price={item.current_price}
      />
    </div>
  );
};
