import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollSyncPane } from 'react-scroll-sync';
import { setCoinList } from 'modules/redux/coinList/coinListSlice';
import { setSearchList } from 'modules/redux/searchList/searchListSlice';
import { Favorites } from 'shared';
import { useCoinList } from 'shared/hooks/useCoinList';
import { Coin } from 'shared/components/coin';
import { RootState } from 'modules/redux/rootReducer';

export const CoinsList = () => {
  useCoinList();
  const dispatch = useDispatch();
  const { coinList } = useSelector((state: RootState) => state.coinList);
  const { searchList } = useSelector((state: RootState) => state.searchList);

  useEffect(() => {
    if (!coinList || searchList.length) return;
    dispatch(setSearchList(coinList));
  }, [dispatch, coinList, searchList]);

  return (
    <ScrollSyncPane>
      <main className="coin-list-container main-align">
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
