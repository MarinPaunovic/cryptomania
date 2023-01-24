import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';

export const Summary = () => {
  const { balance } = useSelector((state: RootState) => state.totalBalance);
  const { holdings } = useSelector((state: RootState) => state.holdings);

  return (
    <div className="summary-wrapper">
      <div className="summary-content">
        <div>total balance ${Math.floor(balance * 100) / 100}</div>
        <div>24h chance</div>
        <div>total profit loss</div>
      </div>
    </div>
  );
};
