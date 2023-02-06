import { RootState } from 'modules/redux/rootReducer';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { HoldingsProps } from '../types';

export const SellHoldings: React.FC<HoldingsProps> = ({
  handleSubmit,
  onConfirm,
  price,
  tag,
  name,
  setAmount,
}) => {
  const [max, setMax] = useState<number>(0);
  const { holdings } = useSelector((state: RootState) => state.holdings);
  const { theme } = useSelector((state: RootState) => state.theme);

  const handleMax = () => {
    const index = holdings.findIndex((holding) => holding.what === name);
    if (!holdings[index]) return;
    setMax(holdings[index].amount);
    setAmount(holdings[index].amount);
  };

  return (
    <form onSubmit={handleSubmit(onConfirm)}>
      <div className="modal-price">
        <label htmlFor="price" className="ffam-content">
          Price per coin
        </label>
        <input id="price" defaultValue={price} className={`price-input ${theme}`} />
      </div>
      <div className="modal-amount">
        <label htmlFor="amount" className="ffam-content">
          Amount
        </label>
        <div className="amount-input-wrapper">
          <input
            id="amount"
            className={`amount-input ${theme}`}
            type="number"
            step={0.001}
            defaultValue={max > 0 ? max : undefined}
            autoComplete="off"
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          ></input>
          <span className="amount-what">
            <button onClick={handleMax} type="button" className={`${theme}`}>
              MAX
            </button>
            {tag.toLocaleUpperCase()}
          </span>
        </div>
      </div>
      <button type="submit" hidden />
    </form>
  );
};
