import { combineReducers, CombinedState, Reducer } from 'redux';
import { InterfaceStore } from './interfaceStore';
import { mainTableReducer } from '../features/mainTable';
import { tagController } from '../features/tagController';

export const rootReducer: Reducer<CombinedState<InterfaceStore>> =
  combineReducers({
    table: mainTableReducer,
    tags: tagController
  });

export type RootState = ReturnType<typeof rootReducer>;
