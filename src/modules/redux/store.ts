import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { CoinsArray } from './coinList/coinListSlice';
import { User } from 'firebase/auth';

export interface RootState {
  theme: { theme: string };
  auth: { auth: User };
  coinList: {
    coinList: Array<CoinsArray>;
    isAscending: boolean;
    whatOrder: string;
    howOrder: string;
  };
}

const middlewares = [thunk];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});
export const persistor = persistStore(store);
