import { createSlice, current } from '@reduxjs/toolkit';
import { handleOrder } from 'shared/functions/handleOrder';

export interface CoinsArray {
  [key: string]: string | number;
  market_cap_rank: number;
  name: string;
  current_price: number;
  symbol: string;
  image: string;
  last_updated: string;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
}

export interface CoinSlice {
  coinList: Array<CoinsArray>;
  howOrder: string;
  whatOrder: string;
  isAscending?: boolean;
}

const coinListSlice = createSlice({
  name: 'coinList',
  initialState: {
    isAscending: true,
    whatOrder: '',
    howOrder: 'asc',
    coinList: [],
  } as CoinSlice,
  reducers: {
    setCoinList(state, action: { payload: Array<CoinsArray> }) {
      if (!state.whatOrder) {
        state.coinList = action.payload;
        return;
      }
      const orderedList = handleOrder({
        coinList: action.payload,
        howOrder: state.howOrder,
        whatOrder: state.whatOrder,
      });
      state.coinList = orderedList;
    },
    setWhatOrder(state, action) {
      state.whatOrder = action.payload;
    },
    setHowOrder(state, action) {
      state.howOrder = action.payload;
    },
    setIsAscending(state, action) {
      state.isAscending = action.payload;
    },
    setOrderCoinList(state) {
      const orderedList = handleOrder({
        coinList: current(state.coinList),
        howOrder: state.howOrder,
        whatOrder: state.whatOrder,
      });
      state.coinList = orderedList;
    },
  },
});

export const { setHowOrder, setCoinList, setOrderCoinList, setWhatOrder, setIsAscending } =
  coinListSlice.actions;
export default coinListSlice.reducer;
