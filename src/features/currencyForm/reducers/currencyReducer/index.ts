/* eslint-disable no-return-assign, no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { saveCurrency } from '../../actions/currencyActions';
import { CurrencyState } from '../../types/intefaceState';

const initialState = {
  list: { RUB: '1' }
} as CurrencyState;

export const currencyReducer = createReducer(initialState, builder => {
  builder.addCase(saveCurrency, (state, { payload }) => {
    state.list = { ...initialState.list, ...payload };
  });
});
