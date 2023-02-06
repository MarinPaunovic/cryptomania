import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';
import { HoldingsProps } from '../types';

export const BuyHoldings: React.FC<HoldingsProps> = ({
  price,
  setAmount,
  handleSubmit,
  onConfirm,
  tag,
}) => {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <form onSubmit={handleSubmit(onConfirm)}>
      <div className="modal-price">
        <label htmlFor="price" className="modal__title ffam-content">
          Price per coin
        </label>
        <input id="price" defaultValue={price} className={`price-input ${theme}`} />
      </div>
      <div className="modal-amount">
        <label htmlFor="amount" className="modal__title ffam-content">
          Amount
        </label>
        <div className="amount-input-wrapper">
          <input
            id="amount"
            className={`amount-input ${theme}`}
            type="number"
            step={0.001}
            autoComplete="off"
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          ></input>
          <span className="amount-what">{tag.toLocaleUpperCase()}</span>
        </div>
      </div>
      <button type="submit" hidden />
    </form>
  );
};
