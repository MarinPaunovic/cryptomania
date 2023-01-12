import themeSlice from './theme/themeSlice';
import authSlice from './auth/auth';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import coinListSlice from './coinList/coinListSlice';
import searchListSlice from './searchList/searchListSlice';
import modalSlice from './modal/modalSlice';

const persistConfig = {
  key: 'root',
  storage,
  whiltelist: ['theme', 'auth'],
  blacklist: ['coinList'],
};

const rootReducer = combineReducers({
  theme: themeSlice,
  auth: authSlice,
  coinList: coinListSlice,
  searchList: searchListSlice,
  modal: modalSlice,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
