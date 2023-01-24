import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';
import { useFavorites } from 'shared';
import { useEffect, useState } from 'react';
import { CoinsArray } from 'modules/redux/slices/coinListSlice';
import { useCoinList } from 'shared/hooks/useCoinList';
import { Coin } from 'shared/components/coin';
import { Description } from 'modules/homepage';
import { handleOrder } from 'shared/functions/handleOrder';

export const Watchlist: React.FC = () => {
  const [favoriteList, setFavoriteList] = useState<Array<CoinsArray>>();
  const { coinList, howOrder, whatOrder } = useSelector((state: RootState) => state.coinList);
  const { favorites } = useFavorites();
  useCoinList();

  useEffect(() => {
    if (!coinList || !favorites.length) {
      return;
    }
    const coins: Array<CoinsArray> = [];

    favorites.map((item) => {
      const coin = coinList.find((coin) => coin.name === item.name);
      if (!coin) return;
      coins.push(coin);
    });
    const sortedFavorites = handleOrder({
      coinList: coins,
      howOrder,
      whatOrder,
    });
    setFavoriteList(sortedFavorites);
  }, [coinList, favorites, howOrder, whatOrder]);

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
