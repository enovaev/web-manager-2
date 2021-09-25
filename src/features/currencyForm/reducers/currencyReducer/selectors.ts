import { RootState } from 'store/rootReducer';

export const getCurrencySelector = (state: RootState) => state.currency;
