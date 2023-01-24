import { AmountProps } from '../types';
import { useCoinRatio } from '../hooks/useCoinRatio';
import { useTotalBalance } from '../hooks';

export const Amount: React.FC<AmountProps> = ({ amount, tag, price }) => {
  const hookProps = { amount, price };
  const { singleHoldingValue } = useTotalBalance(hookProps);
  const { ratio } = useCoinRatio(hookProps);

  const fiatValueFloor = singleHoldingValue && Math.floor(singleHoldingValue * 100) / 100;

  if (!amount)
    return (
      <div className="portfolio-amount f asc jsc">
        <ol className="fc">
          <li className="fr">0.00$</li>
          <li className="amount-holdings fr">
            0.0 <h4>{tag.toUpperCase()}</h4>
          </li>
        </ol>
      </div>
    );

  return (
    <div className="portfolio-amount f asc jsc">
      <ol className="fc">
        <li className="fr">
          {fiatValueFloor}$ ({ratio}%)
        </li>
        <li className="amount-holdings fr">
          {amount} <h4>{tag.toUpperCase()}</h4>
        </li>
      </ol>
    </div>
  );
};
