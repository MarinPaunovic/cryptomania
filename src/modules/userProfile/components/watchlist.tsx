import { useGetFavorites } from 'shared';
import { useCoinList } from 'shared/hooks/useCoinList';
import { Coin } from 'shared/components/coin';
import { Description } from 'modules/homepage';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

export const Watchlist: React.FC = () => {
  useCoinList();
  const { favoriteList } = useGetFavorites();

  return (
    <ScrollSync>
      <>
        <Description />
        <ScrollSyncPane>
          <div className="watchlist ffam-content">
            {favoriteList &&
              favoriteList.map((item, i) => (
                <div key={i}>
                  <Coin item={item} />
                </div>
              ))}
          </div>
        </ScrollSyncPane>
      </>
    </ScrollSync>
  );
};
