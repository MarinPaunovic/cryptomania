import { createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: {} as User,
  },
  reducers: {
    setLogin(state, action) {
      state.auth = action.payload;
    },
  },
});

export const { setLogin } = authSlice.actions;
export default authSlice.reducer;
