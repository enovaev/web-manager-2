import { configureStore } from '@reduxjs/toolkit';
import { sortingHandler, addPositionHandler } from 'features/mainTable';
import { calculateHandler } from 'features/settingsTable';
import { tagHandler } from 'features/tagController';
import { dragAndDropHandler } from 'features/specificationTable';
import { rootReducer } from './rootReducer';
import { InterfaceStore } from './interfaceStore';

export const configureAppStore = (preloadedState?: Partial<InterfaceStore>) =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(
        sortingHandler,
        addPositionHandler,
        calculateHandler,
        tagHandler,
        dragAndDropHandler
      ),
    preloadedState
  });

export const store = configureAppStore();
export type AppDispatch = typeof store.dispatch;
