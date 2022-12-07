import { current } from '@reduxjs/toolkit';
import { CoinsArray, CoinSlice } from 'modules/redux/coinList/coinListSlice';

export const handleOrder = ({
  coinList,
  howOrder,
  whatOrder,
}: CoinSlice): Array<CoinsArray> => {
  let sortedList = [...current(coinList)];
  if (howOrder === 'asc') {
    sortedList = sortedList.sort((i1, i2) => {
      if (i1 && i2) {
        if (i1[whatOrder] < i2[whatOrder]) {
          return 1;
        }
        if (i1[whatOrder] > i2[whatOrder]) {
          return -1;
        } else {
          return 0;
        }
      }
      return 0;
    });
  } else {
    sortedList = sortedList.sort((i1, i2) => {
      if (i1 && i2) {
        if (i1[whatOrder] > i2[whatOrder]) {
          return 1;
        }
        if (i1[whatOrder] < i2[whatOrder]) {
          return -1;
        } else {
          return 0;
        }
      }
      return 0;
    });
  }
  return sortedList;
};
