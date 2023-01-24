import themeSlice from './slices/themeSlice';
import authSlice from './slices/auth';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import coinListSlice from './slices/coinListSlice';
import searchListSlice from './slices/searchListSlice';
import modalSlice from './slices/modalSlice';
import portfolioSlice from './slices/portfolioSlice';
import holdingsSlice from './slices/holdings';
import totalBalanceSlice from './slices/totalBalance';

const persistConfig = {
  key: 'root',
  storage,
  whiltelist: ['theme', 'auth', 'portfolio'],
  blacklist: ['coinList', 'totalBalance'],
};

const rootReducer = combineReducers({
  theme: themeSlice,
  auth: authSlice,
  coinList: coinListSlice,
  searchList: searchListSlice,
  modal: modalSlice,
  portfolio: portfolioSlice,
  holdings: holdingsSlice,
  totalBalance: totalBalanceSlice,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
