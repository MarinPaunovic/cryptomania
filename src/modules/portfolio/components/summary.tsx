import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';
import { useOneDayChange, useTotalProfit } from '../hooks';
import { useGetTotalBalance } from '../hooks/useGetTotalBalance';

export const Summary = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const { totalProfit, profitRatio } = useTotalProfit();
  const { totalBalance } = useGetTotalBalance();
  const { price24h, ratio24h } = useOneDayChange();

  return (
    <div className="summary__wrapper fr ffam-content">
      <div className={`summary__box ${theme}`}>
        <h3>{totalBalance == '' ? 'Loading..' : totalBalance}</h3>
        <span className="summary__box-title ffam-content">Total balance</span>
      </div>
      <div className={`summary__box ${theme}`}>
        <h3>{price24h == '' ? 'Loading..' : price24h}</h3>
        <span className="summary__box-title ffam-content">
          24h change
          <span
            className={
              price24h.includes('-') ? 'summary__box-title--loss' : 'summary__box-title--profit'
            }
          >
            ({ratio24h.toFixed(2)}%)
          </span>
        </span>
      </div>
      <div className={`summary__box ${theme}`}>
        <h3>{totalProfit == '' ? 'Loading..' : totalProfit}</h3>
        <div className="summary__box-title ffam-content">
          Total profit loss{' '}
          <span
            className={
              totalProfit.includes('-') ? 'summary__box-title--loss' : 'summary__box-title--profit'
            }
          >
            ({profitRatio.toFixed(2)}%)
          </span>
        </div>
      </div>
    </div>
  );
};
