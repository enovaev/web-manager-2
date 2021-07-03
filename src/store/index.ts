import { configureStore } from '@reduxjs/toolkit';
import { mainTableReducer } from 'features/mainTable';
import { tableSettingsReducer } from 'features/tableSettings';

export const store = configureStore({
  reducer: {
    table: mainTableReducer,
    tableSettings: tableSettingsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
