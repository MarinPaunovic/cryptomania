import { createSlice } from '@reduxjs/toolkit';

type action = {
  payload: 'watchlist' | 'portfolio';
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: { active: 'watchlist' },
  reducers: {
    setActive(state, action: action) {
      state.active = action.payload;
    },
  },
});

export const { setActive } = portfolioSlice.actions;
export default portfolioSlice.reducer;
