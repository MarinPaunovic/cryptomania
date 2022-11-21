import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './theme/themeSlice';

export interface RootState {
    theme: { theme: string };
}

const store = configureStore({
    reducer: {
        theme: themeSlice,
    },
});

export default store;
