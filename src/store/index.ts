import { configureStore } from '@reduxjs/toolkit';
import { mainTableReducer } from 'features/mainTable';

export const store = configureStore({
  reducer: {
    table: mainTableReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
