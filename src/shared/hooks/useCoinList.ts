import axios from 'axios';
import { CoinsArray, setCoinList } from 'modules/redux/coinList/coinListSlice';
import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

export const useCoinList = () => {
  // const [localCoinList, setLocalCoinList] = useState<Array<CoinsArray>>();
  const firstRender = useRef(false);
  const dispatch = useDispatch();
  const [ticker, setTicker] = useState(0);
  useEffect(() => {
    if (!firstRender.current) {
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d',
        )
        .then((res) => {
          if (!res) return;
          setTicker(ticker + 1);
          dispatch(setCoinList(res.data));
          // setLocalCoinList(res.data);
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
          setTicker(ticker + 1);
          dispatch(setCoinList(res.data));
          // setLocalCoinList(res.data);
        });
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, [firstRender, ticker, dispatch]);
};
