import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollSyncPane } from 'react-scroll-sync';
import { setSearchList } from 'modules/redux/searchList/searchListSlice';
import { useCoinList } from 'shared/hooks/useCoinList';
import { Coin } from 'shared/components/coin';
import { RootState } from 'modules/redux/rootReducer';

export const CoinsList = () => {
  const { searchList } = useSelector((state: RootState) => state.searchList);
  const { coinList } = useSelector((state: RootState) => state.coinList);
  const dispatch = useDispatch();
  useCoinList();

  useEffect(() => {
    if (!coinList || searchList.length) return;
    dispatch(setSearchList(coinList));
  }, [dispatch, coinList, searchList]);

  return (
    <ScrollSyncPane>
      <main className="coin-list-container main-align" style={{ overflowY: 'hidden' }}>
        {coinList &&
          coinList.map((item, i: number) => (
            <div key={i}>
              <Coin item={item} />
            </div>
          ))}
      </main>
    </ScrollSyncPane>
  );
};
