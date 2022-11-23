import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { RootState } from 'modules/redux/store';
import { useSelector } from 'react-redux';

interface CoinsArray {
  market_cap_rank: number;
  name: string;
  current_price: number;
  symbol: string;
  image: string;
  last_updated: string;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
}

export const CoinsList = () => {
  const [coinsArr, setCoinsArr] = useState([]);
  const [ticker, setTicker] = useState(0);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const firstRender = useRef(false);
  useEffect(() => {
    if (!firstRender.current) {
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d',
        )
        .then((res) => {
          console.log(res);
          if (!res) return;
          setTicker(ticker + 1);
          setCoinsArr(res.data);
        });
      firstRender.current = true;
      return;
    }

    const timeout = setTimeout(async () => {
      await axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d',
        )
        .then((res) => {
          if (!res) return;
          setCoinsArr(res.data);
        });
    }, 10000);
    return () => {
      clearTimeout(timeout);
    };
  }, [firstRender, coinsArr, ticker]);
  return (
    <main className="coin-list-container main-align">
      {coinsArr &&
        coinsArr.map((item: CoinsArray, i: number) => {
          return (
            <div key={i} className={`coin-list-wrapper ${theme}`}>
              <div className={`coin-list-description-wrapper g ${theme}`}>
                <div className="coin-list-rank">{item.market_cap_rank}</div>
                <div className="coin-list-name-wrapper">
                  <img className="coin-list-image" src={item.image} />
                  <div className="coin-list-name f">
                    <span>{item.name}</span>
                    <span>{item.symbol.toUpperCase()}</span>
                  </div>
                </div>
              </div>
              <ol className="coin-list-price-wrapper g">
                <li className="coin-list-price">${item.current_price}</li>
                <li
                  className="coin-list-price"
                  style={
                    item.price_change_percentage_1h_in_currency < 0
                      ? { color: 'red' }
                      : { color: '#00e200' }
                  }
                >
                  {Math.round(
                    item.price_change_percentage_1h_in_currency * 10,
                  ) / 10}
                  %
                </li>
                <li
                  className="coin-list-price"
                  style={
                    item.price_change_percentage_24h_in_currency < 0
                      ? { color: 'red' }
                      : { color: '#00e200' }
                  }
                >
                  {Math.round(
                    item.price_change_percentage_24h_in_currency * 10,
                  ) / 10}
                  %
                </li>
                <li
                  className="coin-list-price"
                  style={
                    item.price_change_percentage_7d_in_currency < 0
                      ? { color: 'red' }
                      : { color: '#00e200' }
                  }
                >
                  {Math.round(
                    item.price_change_percentage_7d_in_currency * 10,
                  ) / 10}
                  %
                </li>
              </ol>
            </div>
          );
        })}
    </main>
  );
};
