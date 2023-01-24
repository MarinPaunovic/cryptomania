import axios from 'axios';
import { setCoinList } from 'modules/redux/slices/coinListSlice';
import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

export const useCoinList = () => {
  const [ticker, setTicker] = useState(0);
  const apiUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d';
  const firstRender = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!firstRender.current) {
      axios.get(`${apiUrl}`).then((res) => {
        if (!res) return;
        setTicker(ticker + 1);
        dispatch(setCoinList(res.data));
      });
      firstRender.current = true;
      return;
    }

    const timeout = setTimeout(async () => {
      await axios.get(`${apiUrl}`).then((res) => {
        if (!res) return;
        setTicker(ticker + 1);
        dispatch(setCoinList(res.data));
      });
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, [firstRender, ticker, dispatch]);
};
