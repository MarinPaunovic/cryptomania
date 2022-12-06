import themeSlice from './theme/themeSlice';
import authSlice from './auth/auth';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'root',
  storage,
  whiltelist: ['theme', 'auth'],
};

const rootReducer = combineReducers({
  theme: themeSlice,
  auth: authSlice,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
