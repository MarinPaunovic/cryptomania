import { AmountProps } from '../types';
import { useCoinRatio } from '../hooks/useCoinRatio';
import { useGetSingleValue } from '../hooks';
import { useCurrencyConvert } from 'shared';

export const Amount: React.FC<AmountProps> = ({ amount, tag, price }) => {
  const hookProps = { amount, price };
  const { singleValue: singleHoldingValue } = useGetSingleValue({ amount, price });
  const { ratio } = useCoinRatio(hookProps);
  const fiatValueFloor = singleHoldingValue && Math.floor(singleHoldingValue * 100) / 100;
  const { currency } = useCurrencyConvert(fiatValueFloor);

  if (!amount)
    return (
      <div className="portfolio-amount">
        <ol className="fc">
          <li className="portfolio__amount-total fr">0.00$ (0%)</li>
          <li className="amount-holdings fr">
            0.0 <h4>{tag.toUpperCase()}</h4>
          </li>
        </ol>
      </div>
    );

  return (
    <div className="portfolio-amount">
      <ol className="fc">
        <li className="portfolio__amount-total fr">
          <span>{currency}</span>
          <span>({ratio}%)</span>
        </li>
        <li className="amount-holdings fr">
          {amount} <h4>{tag.toUpperCase()}</h4>
        </li>
      </ol>
    </div>
  );
};
