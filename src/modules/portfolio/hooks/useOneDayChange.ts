import { RootState } from 'modules/redux/rootReducer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCurrencyConvert } from 'shared';

export const useOneDayChange = () => {
  const [price24h, setPrice24h] = useState(0);
  const [ratio24h, setRatio24h] = useState(0);
  const { balance } = useSelector((state: RootState) => state.totalBalance);
  const { holdings } = useSelector((state: RootState) => state.holdings);
  const { coinList } = useSelector((state: RootState) => state.coinList);
  const { currency } = useCurrencyConvert(price24h);

  useEffect(() => {
    const index = [];
    let price24h = 0;
    for (let i = 0; i < holdings.length; i++) {
      if (coinList.some((coin) => coin.name === holdings[i].what)) {
        index.push(coinList.findIndex((coin) => coin.name === holdings[i].what));
      }
    }
    if (!index) return;
    index.map((index, i) => {
      (price24h =
        price24h +
        coinList[index].current_price *
          (coinList[index].price_change_percentage_24h_in_currency / 100) *
          holdings[i].amount),
        holdings[i].what;
    });
    setRatio24h((price24h / (balance + price24h)) * 100);
    setPrice24h(price24h);
  }, [coinList, holdings, balance]);
  return { price24h: currency, ratio24h };
};
