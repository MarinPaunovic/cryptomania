import { RootState } from 'modules/redux/rootReducer';
import { CoinsArray } from 'modules/redux/slices/coinListSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { handleOrder } from 'shared/functions';
import { useFavorites } from './useFavorites';

export const useGetFavorites = () => {
  const [favoriteList, setFavoriteList] = useState<Array<CoinsArray>>();
  const { coinList, howOrder, whatOrder } = useSelector((state: RootState) => state.coinList);
  const { favorites } = useFavorites();

  useEffect(() => {
    if (!coinList || !favorites.length) {
      return;
    }
    setFavoriteList([]);
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

  return { favoriteList };
};
