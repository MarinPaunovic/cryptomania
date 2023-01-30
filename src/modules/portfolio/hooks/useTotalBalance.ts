import { RootState } from 'modules/redux/rootReducer';
import { setResetTotalBalance, setTotalBalance } from 'modules/redux/slices/totalBalance';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useTotalBalance = () => {
  const { coinList } = useSelector((state: RootState) => state.coinList);
  const { holdings } = useSelector((state: RootState) => state.holdings);
  const dispatch = useDispatch();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (coinList.length && holdings.length) {
      let balanceL = 0;
      holdings.map((holding) => {
        if (!coinList) return;
        const find = coinList.find((coin) => coin.name === holding.what);
        if (!find) return;
        balanceL = balanceL + find.current_price * holding.amount;
        dispatch(setResetTotalBalance());
        dispatch(setTotalBalance({ amount: balanceL }));
      });
    }
  }, [dispatch, holdings, coinList]);

  return;
};
