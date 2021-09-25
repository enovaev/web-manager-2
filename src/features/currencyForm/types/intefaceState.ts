import type { CurrencyValues } from '../config/currencyList';

export type CurrencyListType = Record<CurrencyValues, string>;
export type CurrencyListForSubmit = Partial<Record<string, string>>;

export interface CurrencyState {
  list: CurrencyListType;
}
