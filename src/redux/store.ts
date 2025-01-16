import { configureStore } from '@reduxjs/toolkit';
import { reducer as counterReducer } from './slices/counter';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
