import { RootState } from 'modules/redux/rootReducer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCurrencyConvert } from 'shared';

export const useTotalProfit = () => {
  const [totalProfit, setTotalProfit] = useState(0);
  const [profitRatio, setProfitRatio] = useState(0);
  const { holdings } = useSelector((state: RootState) => state.holdings);
  const { balance } = useSelector((state: RootState) => state.totalBalance);
  const { coinList } = useSelector((state: RootState) => state.coinList);
  const { currency } = useCurrencyConvert(totalProfit);

  useEffect(() => {
    let totalProfit = 0;
    holdings.map((holding) => {
      if (coinList.some((coin) => coin.name === holding.what)) {
        const coin = coinList.find((coin) => coin.name === holding.what);
        if (!coin) return;
        const singleProfit = (coin.current_price - holding.price) * holding.amount;
        totalProfit = totalProfit + singleProfit;
      }
    });
    setProfitRatio((totalProfit / (balance + totalProfit)) * 100);
    setTotalProfit(totalProfit);
  }, [holdings, coinList, balance]);

  return { totalProfit: currency, profitRatio };
};
