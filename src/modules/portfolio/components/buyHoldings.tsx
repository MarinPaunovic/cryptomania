import { HoldingsProps } from '../types';

export const BuyHoldings: React.FC<HoldingsProps> = ({
  price,
  setAmount,
  handleSubmit,
  onConfirm,
  tag,
}) => {
  return (
    <form onSubmit={handleSubmit(onConfirm)}>
      <div className="modal-price">
        <label htmlFor="price">Price per coin</label>
        <input id="price" defaultValue={price} className="price-input" />
      </div>
      <div className="modal-amount">
        <label htmlFor="amount">Amount</label>
        <div className="amount-input-wrapper">
          <input
            id="amount"
            className="amount-input"
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
