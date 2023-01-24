import { createSlice } from '@reduxjs/toolkit';
import { Holdings } from 'modules/portfolio';

const holdingsSlice = createSlice({
  name: 'holdings',
  initialState: { holdings: [] as Holdings[] },
  reducers: {
    setHoldings(state, action: { payload: Holdings[] }) {
      state.holdings = action.payload;
    },
  },
});

export const { setHoldings } = holdingsSlice.actions;

export default holdingsSlice.reducer;
