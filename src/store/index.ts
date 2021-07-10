import { configureStore } from '@reduxjs/toolkit';
import { mainTableReducer } from 'features/mainTable';
import { tableSettingsReducer, tagHandler } from 'features/tableSettings';

export const store = configureStore({
  reducer: {
    table: mainTableReducer,
    tableSettings: tableSettingsReducer
  },
  middleware: [tagHandler]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
