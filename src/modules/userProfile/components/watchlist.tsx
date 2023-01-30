import { useGetFavorites } from 'shared';
import { useCoinList } from 'shared/hooks/useCoinList';
import { Coin } from 'shared/components/coin';
import { Description } from 'modules/homepage';

export const Watchlist: React.FC = () => {
  useCoinList();
  const { favoriteList } = useGetFavorites();

  return (
    <div className="watchlist ffam-content">
      <Description />
      {favoriteList &&
        favoriteList.map((item, i) => (
          <div key={i}>
            <Coin item={item} />
          </div>
        ))}
    </div>
  );
};
