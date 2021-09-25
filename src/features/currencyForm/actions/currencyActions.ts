import { createAction } from '@reduxjs/toolkit';
import { CurrencyListForSubmit } from '../types/intefaceState';

export const saveCurrency = createAction<CurrencyListForSubmit>(
  'currency/saveCurrency'
);
