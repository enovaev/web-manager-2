import { combineReducers, CombinedState, Reducer } from 'redux';
import { mainTableReducer } from 'features/mainTable';
import { tagController } from 'features/tagController';
import { authMainReducer } from 'features/authReg';
import { currencyReducer } from 'features/currencyForm';
import { specificationTable } from 'features/specificationTable';
import { InterfaceStore } from './interfaceStore';

export const rootReducer: Reducer<CombinedState<InterfaceStore>> =
  combineReducers({
    table: mainTableReducer,
    tags: tagController,
    account: authMainReducer,
    currency: currencyReducer,
    specificationTable
  });

export type RootState = ReturnType<typeof rootReducer>;
