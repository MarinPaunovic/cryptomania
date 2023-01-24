import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { isModal: false },
  reducers: {
    setIsModal(state, action: { payload: boolean }) {
      state.isModal = action.payload;
    },
  },
});

export const { setIsModal } = modalSlice.actions;

export default modalSlice.reducer;
