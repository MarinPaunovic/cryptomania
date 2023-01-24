import { createSlice } from '@reduxjs/toolkit';

const totalBalanceSlice = createSlice({
  name: 'totalBalance',
  initialState: { balance: 0 },
  reducers: {
    setTotalBalance(state, action: { payload: { amount: number; minus?: boolean } }) {
      if (action.payload.minus) {
        state.balance = state.balance - action.payload.amount;
        return;
      }
      state.balance = state.balance + action.payload.amount;
    },
    setResetTotalBalance(state) {
      state.balance = 0.0;
    },
  },
});

export const { setTotalBalance, setResetTotalBalance } = totalBalanceSlice.actions;
export default totalBalanceSlice.reducer;
