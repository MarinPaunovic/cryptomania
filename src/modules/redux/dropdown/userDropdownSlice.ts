import { createSlice } from '@reduxjs/toolkit';

const userDropdownSlice = createSlice({
  name: 'dropdown',
  initialState: { isOpen: false },
  reducers: {
    setOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const { setOpen } = userDropdownSlice.actions;
export default userDropdownSlice.reducer;
