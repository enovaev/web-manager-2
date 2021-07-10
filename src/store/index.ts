import { configureStore } from '@reduxjs/toolkit';
import { sortingHandler, addPositionHandler } from 'features/mainTable';
import { rootReducer } from './rootReducer';
import { InterfaceStore } from './interfaceStore';

export const configureAppStore = (preloadedState?: Partial<InterfaceStore>) =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(sortingHandler).concat(addPositionHandler),
    preloadedState
  });

export const store = configureAppStore();
export type AppDispatch = typeof store.dispatch;
