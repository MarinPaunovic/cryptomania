import { Watchlist } from 'modules/userProfile';
import { useAmount } from '../hooks';
import { Summary } from './summary';

export const Portfolio = () => {
  useAmount();

  return (
    <div>
      <Summary />
      <Watchlist />
    </div>
  );
};
