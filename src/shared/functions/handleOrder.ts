import { CoinsArray, CoinSlice } from 'modules/redux/slices/coinListSlice';

const defaultOrder = (sortedList: Array<CoinsArray>) => {
  return sortedList.sort((i1, i2) => {
    if (i1 && i2) {
      if (i1.market_cap_rank > i2.market_cap_rank) {
        return 1;
      }
      if (i1.market_cap_rank < i2.market_cap_rank) {
        return -1;
      } else {
        return 0;
      }
    }
    return 0;
  });
};

const ascendingOrderOfWhat = (sortedList: Array<CoinsArray>, whatOrder: string) => {
  return sortedList.sort((i1, i2) => {
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
};

const descendingOrderOfWhat = (sortedList: Array<CoinsArray>, whatOrder: string) => {
  return sortedList.sort((i1, i2) => {
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
};

export const handleOrder = ({ coinList, howOrder, whatOrder }: CoinSlice): Array<CoinsArray> => {
  let sortedList: Array<CoinsArray> = [...coinList];

  if (!whatOrder) {
    sortedList = defaultOrder(sortedList);
  }
  if (howOrder === 'asc') {
    sortedList = ascendingOrderOfWhat(sortedList, whatOrder);
  } else {
    sortedList = descendingOrderOfWhat(sortedList, whatOrder);
  }
  return sortedList;
};
