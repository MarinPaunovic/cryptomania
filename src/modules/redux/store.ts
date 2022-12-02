import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export interface RootState {
  theme: { theme: string };
  auth: { auth: boolean };
}

const middlewares = [thunk, logger];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});
export const persistor = persistStore(store);
