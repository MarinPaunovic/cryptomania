import { createSlice } from '@reduxjs/toolkit';

interface SearchProps {
  name: string;
  rank: number;
}
interface SearchArray {
  searchList: Array<SearchProps>;
}
const searchListSlice = createSlice({
  name: 'searchList',
  initialState: { searchList: [] } as SearchArray,
  reducers: {
    setSearchList(state, action) {
      state.searchList = action.payload;
    },
  },
});

export const { setSearchList } = searchListSlice.actions;

export default searchListSlice.reducer;
